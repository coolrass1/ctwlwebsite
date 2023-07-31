import { sendMail } from '@/app/service/service'
import { NextResponse } from 'next/server'

export async function GET(request) {
    console.log(request.url)
    return NextResponse.json({ra:true})
}

export async function POST(request) {
      //const {title, author, email}=await request.json()
   // console.log(await request.json())
   const re= await request.json()
   console.log(re.name)
   const emailer= process.env.USERMAIL
   console.log(JSON.stringify(re))
   const subject="Booking"
   const {name, email, business,phone, pickupaddress,destination,Your_Request,message}=re
   
   const dtr=`<div>client name </div><h1 style="color:red"> ${name }<h1/>
              <h1> bussiness ${business}<h1/>
              <h1> Phone number: ${phone} <h1/>
              <h1> Depart from: ${pickupaddress} <h1/>
              <h1> Destination: ${destination} <h1/>
              <p> ${Your_Request} </p>
              
              `
 await sendMail(email, emailer,subject,dtr)
     
    
    return NextResponse.json({success:true})
}