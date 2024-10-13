const express = require("express");
const router = express.Router();

// Allows user to sign up
router.post("/user/signup", (req, res) => {
    res.send({"message" : "User successfully added.", "user_id" : req.params.user_id})
})

// Allows user to login
router.post("/user/login", (req, res) => {
    res.send({"message": "Login successful."})
})

module.exports = router;