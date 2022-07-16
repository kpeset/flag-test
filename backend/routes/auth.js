const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const verify = require("./verifyToken");
const argon2 = require("argon2");

router.post("/register", async (req, res) => {
  // La première étape d'enregistrement est de vérifier avec Joi (dans ma fonction registerValidation), si les saisies sont respectées.

  const { error } = registerValidation(req.body);

  // Si erreur, alors on récupère le message précis de l'erreur)

  if (error) return res.status(400).send(`Erreur :` + error.details[0].message);

  // Maintenant je vais vérifier que l'émail de l'utilisateur n'est pas déjà dans ma base de donnée.
  // findOne est une fonctionalité de mongoose qui permet de chercher une valeur dans la DB.

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res
      .status(422)
      .send("Votre email est déjà liée à un compte existant.");

  // Il est important de hasher le password de l'utilisateur. Je vais utiliser la bibliothèque Argon2 car recommandé par l'OWASP.

  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  const hashedPassword = await argon2.hash(req.body.password, hashingOptions);

  const defaultScore = 0

  // Si il n'y a pas d'erreur suite à la vérification via Joi alors il passe à l'étape suivante qui est de créer le user en question
  const user = new User({
    pseudo: req.body.pseudo,
    email: req.body.email,
    password: hashedPassword,
    bestscore: defaultScore
  });
  try {
    const savedUser = await user.save();
    // Je l'ui demande d'afficher dans postman UNIQUEMENT l'id de l'utilisateur
    res.send({ user: user._id });
    console.log("L'utilisateur a bien été ajouté à la base de données !");
  } catch (err) {
    res.status(400).send(err);
  }
});

// PARTIE LOGIN
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(`Erreur :` + error.details[0].message);

  // Je vérifie si l'émail existe
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    // Si l'email n'existe pas, alors j'envoie ce message.
    return res.status(422).send("Ce compte n'existe pas.");
  // Maintenant je vérifie le MDP avec la fonctionnalité verify de argon2
  const validPass = await argon2.verify(user.password, req.body.password);
  if (!validPass) return res.status(400).send("Email ou password invalide.");

  //Créer et assigner un token
  const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
  res
    // .header("auth-token", token)
    .cookie("authcookie", token, {
      maxAge: 900000,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .json({message:"Connexion réussie", utilisateur:req.body.email,
  cookie:token
});
});

module.exports = router;