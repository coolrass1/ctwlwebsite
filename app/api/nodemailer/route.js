import { sendMail } from "@/app/service/service";
import { NextResponse } from "next/server";
const { isValid, format } = require("date-fns");

export async function GET(request) {
  console.log(request.url);
  return NextResponse.json({ ra: true });
}

export async function POST(request) {
  const re = await request.json();

  const emailer = process.env.USERMAIL;

  const subject = "Booking";
  const {
    dateofbooking,
    name,
    cartype,
    email,
    phone,
    pickupaddress,
    destination,
    omessage,
  } = re;

  const dtr = `<div>client name:  ${name}  </div>
              <div> Email: ${email}<div/>
              <div> Phone number: ${phone} <div/>
              <div> Date: ${format(
                new Date(dateofbooking),
                "dd/MM/yyyy HH:mm:ss"
              )} <div/>
              <div> Depart from: ${pickupaddress} <div/>
              <div> Destination: ${destination} <div/>
              <p> Request: ${omessage} </p>
              <p>Cartype: ${cartype}</p>
              
              `;

  await sendMail(email, emailer, subject, dtr);

  return NextResponse.json({ success: true });
}
