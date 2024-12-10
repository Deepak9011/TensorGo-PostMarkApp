// routes/auth.js
const express = require("express");
const passport = require("../services/googleAuth");
const ensureAuth = require("../middleware/ensureAuth");
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("http://localhost:3000");
});

router.get("/auth/google", passport.authenticate('google', { scope: ["profile", "email"] }));
router.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: "/" }), (req, res) => {
    res.redirect('/dashboard');
});

router.get("/dashboard", ensureAuth, (req, res) => {
    res.send("Welcome to your account");
});

router.get("/logout", (req, res) => {
    req.logOut(() => {
        res.redirect('/');
    });
});

module.exports = router;
