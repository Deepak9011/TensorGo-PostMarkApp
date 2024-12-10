// services/postmark.js
const postmark = require("postmark");
const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

const sendEmail = async (from, to, subject, htmlBody, textBody) => {
    try {
        const response = await client.sendEmail({
            From: from,
            To: to,
            Subject: subject,
            HtmlBody: htmlBody,
            TextBody: textBody,
            MessageStream: "broadcast",
        });
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { sendEmail };
