// middleware/ensureAuth.js
const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
};

module.exports = ensureAuth;
