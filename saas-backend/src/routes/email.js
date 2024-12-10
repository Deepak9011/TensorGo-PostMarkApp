// routes/email.js
const express = require("express");
const { sendEmail } = require("../services/postmark");
const router = express.Router();

router.get("/sendEmail", async (req, res) => {
    try {
        const response = await sendEmail(
            "sender@example.org",
            "deepakagrawal9011@gmail.com",
            "Hello from Postmark",
            "<strong>Hello</strong> dear Postmark user.",
            "Hello from Postmark!"
        );
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        res.status(500).send(`Failed to send email: ${error.message}`);
    }
});

module.exports = router;
