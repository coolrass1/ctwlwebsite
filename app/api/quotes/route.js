import { sendMail } from "@/app/service/service";
import { NextResponse } from "next/server";

export async function POST(request) {
    const re = await request.json();
  
    const emailer = process.env.USERMAIL;
  
    const subject = "Quote Request";
    const {
        Your_Request,
        destination,
        email,
        name,
        phone,
        pickupadress

    } = re;
  
    const dtr = `<div>client name:  ${name}  </div>
                <div> Email: ${email}<div/>
                <div> Phone number: ${phone} <div/>
               
                <div> Depart from: ${ pickupadress} <div/>
                <div> Destination: ${destination} <div/>
                <p> Request: ${Your_Request} </p>
                
                
                `;
  
    await sendMail(email, emailer, subject, dtr);
  
    return NextResponse.json({ success: true });
  }