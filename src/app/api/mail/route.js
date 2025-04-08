import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request) {
  const body = await request.json()

  const { firstname, lastname, email, phone, Subject, description } = body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'circlex02@gmail.com',
      pass: 'jtrd iyos jvfr xlsu'

    }
  });

  const mailOptions = {
    from: body.email,
    to: 'circlex02@gmail.com',
    subject: body.Subject,
    text: 
    `You have recieved a new message from your website form
    Name: ${body.firstname} ${body.lastname}
    Email: ${body.email}
    Phone: ${body.phone}

    Subject: ${body.Subject}
    Description: ${body.description}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({message: "email sent successfully: ", body})
  } 
  catch (error) {
   
    return NextResponse.json({message: "email failed to send: ", error})
  }

  // return NextResponse.json({ message: "Hello from GET request!", body });

}