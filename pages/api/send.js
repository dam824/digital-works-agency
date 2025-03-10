import nodemailer from "nodemailer";

export default async function handler(req,res){
    if(req.method !== "POST"){
        return res.status(405).json({error :"Méthod non authorisée"});
    }

    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: "ssl0.ovh.net",
        port: 465, // Port SMTP sécurisé
        secure: true, // Utilisation de SSL
        auth: {
          user: process.env.FROM_EMAIL,  
          pass: process.env.EMAIL_MDP,  
        },
      });

      try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // L'email de l'expéditeur
            to: "contact@digital-works.org", // reception emails
            subject: "Nouveau message via le formulaire de contact",
            text: message, // Contenu en texte brut
            html: `<p><strong>Nom :</strong> ${name}</p>
                   <p><strong>Email :</strong> ${email}</p>
                   <p><strong>Message :</strong> ${message}</p>`,
        });
        return res.status(200).json({ success: true, message: "Message envoyé avec succès" });
      }catch(error){
        console.error("Erreur d'envoi d'email :", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi du mail" });
      }
}