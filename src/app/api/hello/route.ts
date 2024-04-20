import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.HOST_SMTP,
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: "Ilae$110892",
  },
});

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  await transporter.sendMail({
    from: process.env.MESSAGE_FRON,
    to: process.env.MESSAGE_TO,
    subject: "Mensagem do site Drico Eventos",
    html: `Nome: ${name} <br>
           Email: ${email} <br>
           Telefone: ${phone} <br>
           Mensagem: ${message} 
           `,
  });
  return NextResponse.json({ message: "Menssagem enviada com sucesso!" });
}
