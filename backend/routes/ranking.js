const router = require("express").Router();
const User = require("../model/User");


router.get("/", function (req, res) {
    User.find({}, 'pseudo bestscore', function (err, users) {
      if (err) {
        res.send("Quelque chose ne fonctionne pas !");
        next();
      }
      res.json(users);
    })
    .sort({"bestscore": -1});
  });
  
  module.exports = router;