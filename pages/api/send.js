import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res){
    const {email, subject, message } = await req.json();
    console.log(email);
    try{
        const data = await resend.emails.send({
            from: fromEmail,
            to: ["damiendagory@gmail.com", email],
            subject: subject,
            react: (
                <>
                <h1>{subject}</h1> 
                <p>Merci de m&apos;avoir contacter</p>
                <p>Nouveau message envoyé</p>
                <p>{message}</p>
                </> 
            )
        });
        return NextResponse.json(data);
    }catch(error){
        return NextResponse.json({error});
    }
}