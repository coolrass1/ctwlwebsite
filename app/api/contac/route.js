import { sendMail } from "@/app/service/service";
import { NextResponse } from "next/server";

export async function POST(request) {
  const re = await request.json();

  const emailer = process.env.USERMAIL;

  const mailTitle = "Contact";
  const { subject, email, name, message } = re;

  const dtr = `<div>client name:  ${name}  </div>
                <div> Email: ${email}<div/>
                <div> Subject: ${subject} <div/>
                <p> Request: ${message} </p>
                `;
            
                
                
                
             

  await sendMail(email, emailer, mailTitle, dtr);
console.log("contact")
  return NextResponse.json({ success: true });
}
