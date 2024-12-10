// app.js
require('dotenv').config();
const express = require("express");
const session = require("express-session");
const passport = require("./src/services/googleAuth");
const authRoutes = require("./src/routes/auth");
const emailRoutes = require("./src/routes/email");
// const helmet = require("helmet");
// const cors = require("cors");

const app = express();

// app.use(helmet());
// app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET || "defaultsecret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use(emailRoutes);

app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});



// require('dotenv').config();

// const express = require("express");
// const passport = require("passport");
// const session = require("express-session");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// const app = express();

// app.use(
//     session({
//         secret: "secret",
//         resave: false,
//         saveUninitialized: true,
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//     new GoogleStrategy({
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: 'http://localhost:5000/auth/google/callback',
//     }, (accessToken, refreshToken, profile, done) => {
//         return done(null, profile);
//     })
// );

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));


// app.get("/", (req, res) => {
//     res.send("<a href ='/auth/google'> Login with Google</a>");
// });

// app.get("/auth/google", passport.authenticate('google', { scope: ["profile", "email"] }));

// app.get("/auth/google/callback", passport.authenticate('google', {failureRedirect: "/"}), (req, res) => {
//     res.redirect('/dashboard')
// });

// app.get("/dashboard", (req, res) => {
//     res.send("welcome to account");
// });

// app.get("/logout", (req, res) => {
//     req.logOut(() => {
//         res.redirect('/'); 
//     });
// });



// const postmark = require("postmark");
// var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

// app.get("/sendEmail", (req, res) => {
//     client.sendEmail({
//         "From": "sender@example.org",
//         "To": "deepakagrawal9011@sgsitsindore.in",
//         "Subject": "Hello from Postmark",
//         "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
//         "TextBody": "Hello from Postmark!",
//         "MessageStream": "broadcast"
//     });  
//     res.send("Thank you for email");    
// });

// app.listen(5000, () => {
//     console.log('Server is running at 5000');
// });
