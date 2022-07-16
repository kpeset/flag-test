const router = require("express").Router();
const User = require("../model/User");


router.post("/", function (req, res) {
    User.findOne({email: req.body.email}, function (err, users) {
      if (err) {
        res.send("Quelque chose ne fonctionne pas !");
        next();
      }
      res.json(users);
    });
  });
  
  module.exports = router;