import nodemailer from "nodemailer";


// Configuration du transporteur
const transporter = nodemailer.createTransport({
  host: "ssl0.ovh.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.FROM_EMAIL , 
    pass: process.env.EMAIL_MDP ,
  },
});

export async function sendMail(name, phone_number, email, message, sentTo) {
  try {
    // Vérifiez que le transporteur est opérationnel
    await transporter.verify();
    
    // Problème potentiel: OVH pourrait ne pas accepter qu'une adresse différente soit dans le champ "from"
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL , // Utilisez l'adresse authentifiée pour le "from"
      replyTo: email, // Utilisez l'email du formulaire comme "reply-to" à la place
      to: sentTo || process.env.FROM_EMAIL ,
      subject: `Nouveau message de ${name} via le formulaire de contact`,
      text: `Message de: ${name} (${email})
      
${message}`,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong> ${message}</p>`,
    });

    console.log("Email envoyé ! ID :", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Erreur d'envoi d'email :", error);
    return { success: false, error: error.message };
  }
}