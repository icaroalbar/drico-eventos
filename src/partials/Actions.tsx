import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";

const data = [
  {
    image: "/action_claro.jpg",
    title: "Marketing Promocional",
    description:
      "Blitz, abordagens, panfletagem direcionada, distribuição e apresentação de serviços/produtos, degustação, captação de leads e muito mais. Nosso vasto portifólio permite criar soluções personalizadas, que atraem e engajam os clientes certos.",
  },
  {
    image: "/action_vivo.jpg",
    title: "Eventos",
    description:
      "Cenografia, coffee break, promotores, coordenadores e supervisores de evento, entre outros serviços. Conte com nosso time de profissionais para criar e executar eventos corporativos memoráveis, que vão potencializar a exposição da sua marca, além de gerar networking e negócios.",
  },
];

export default function Actions() {
  return (
    <section className="flex flex-col border-t bg-action bg-cover bg-bottom py-20 pl-16">
      <div className="text-center lg:text-start">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Impulsione o seu negócio com
        </h3>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl ">
          Ações estratégicas e direcionadas!
        </h1>
      </div>
      <div className="grid grid-cols-2 justify-around gap-5 py-10">
        {data.map((item, index) => (
          <Card
            key={index}
            className="col-span-2 flex flex-col items-center justify-center rounded-xl border-2 border-primary bg-background/60 md:col-span-1"
          >
            <CardHeader>
              <Image
                src={item.image}
                alt="Evento claro"
                width={300}
                height={100}
                className="rounded-xl border-2 border-white pt-1"
              />
            </CardHeader>
            <CardContent className="space-y-8 text-center text-4xl">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-justify text-white">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
