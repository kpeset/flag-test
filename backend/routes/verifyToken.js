const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.cookies.authcookie;
  if (!token) return res.status(401).send("Accès refusé  okay ?!");

  if(token) return res.status(200).send("accès autorisé");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};