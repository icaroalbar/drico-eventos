import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "icaro.albar@dricoeventos.com.br",
    pass: "Ilae$110892",
  },
});

// async..await is not allowed in global scope, must use a wrapper

export async function POST(request: Request) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <icaro.albar@dricoeventos.com.br>', // sender address
    to: "icaro.albar@dricoeventos.com.br", // list of receivers
    subject: "Mensagem do site Drico Eventos", // Subject line
    text: "Hello world?", // plain text body
    html: "request", // html body
  });
  console.log(request);
  console.log("Message sent: %s", info.messageId);
  return NextResponse.json({ message: "Menssagem enviada com sucesso!" });
}
