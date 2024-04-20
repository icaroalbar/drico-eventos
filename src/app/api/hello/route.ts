import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "icaro.albar@dricoeventos.com.br",
    pass: "Ilae$110892",
  },
});

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  await transporter.sendMail({
    from: '"Site Drico Eventos" <icaro.albar@dricoeventos.com.br>',
    to: "icaro.albar@dricoeventos.com.br",
    subject: "Mensagem do site Drico Eventos",
    html: `Nome: ${name} <br>
           Email: ${email} <br>
           Telefone: ${phone} <br>
           Mensagem: ${message} 
           `,
  });
  return NextResponse.json({ message: "Menssagem enviada com sucesso!" });
}
