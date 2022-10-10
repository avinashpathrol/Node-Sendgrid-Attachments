const sgMail = require("@sendgrid/mail")
const fs = require("fs")
SENDGRID_KEY="your key"
EMAIL_FROM="avinash@myclavis.ca"
sgMail.setApiKey(SENDGRID_KEY);
//you can use any sampple document to send this email
let attachments = fs.readFileSync(`${__dirname}/note.pdf`).toString("base64")

const sendEmail = () => {
    const msgConfig = {
        to: "avinashpathrol1@gmail.com",
        from: EMAIL_FROM,
        subject: "Sendgrind test mail",
        text: "This is a test mail from nodejs using sendgrid",
        attachments: [
            {
                content: attachments,
                filename:"note.pdf",
                type: "application/pdf",
                disposition: "attachment",
            }
        ]
    }
 sgMail.send(msgConfig)
    .then((res) => {
        console.log("Email Sent to: ", msgConfig.to)
})
    .catch((err) => {
        console.log(err)
    })
}

sendEmail()
