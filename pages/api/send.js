import { sendMail } from "@/src/lib/sendMail";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { name, phone_number, email, message } = req.body;

  const result = await sendMail(name, phone_number, email, message);

  if (result.success) {
    return res.status(200).json({ success: true, message: "Message envoyé avec succès" });
  } else {
    return res.status(500).json({ error: "Erreur lors de l'envoi du mail", details: result.error });
  }
}