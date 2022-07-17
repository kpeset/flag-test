const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");


router.post("/", async (req, res) => {
  
    const filter = { email: req.body.email };
    const update = { bestscore: req.body.bestscore };
    
    const oldDocument = await User.updateOne(filter, update);
    oldDocument.n
  
  });

module.exports = router;