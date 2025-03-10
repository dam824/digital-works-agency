const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "ssl0.ovh.net",
  port: 465,
  secure: true,
  auth: {
    user: "contact@digital-works.org",
    pass: "Lutece-figo-91-!!",
  },
});

async function sendTestEmail() {
  try {
    let info = await transporter.sendMail({
      from: "contact@digital-works.org",
      to: "contact@digital-works.org",
      subject: "Test OVH SMTP",
      text: "Ceci est un test d'envoi d'email via OVH SMTP",
    });

    console.log("Email envoyé ! ID :", info.messageId);
  } catch (error) {
    console.error("Erreur SMTP OVH :", error.message);
  }
}

sendTestEmail();
