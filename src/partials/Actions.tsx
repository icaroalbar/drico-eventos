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
    title: "marketing promocional",
    description:
      "Blitz, abordagens, panfletagem direcionada, distribuição e apresentação de serviços/produtos, degustação, captação de leads e muito mais. Nosso vasto portifólio permite criar soluções personalizadas, que atraem e engajam os clientes certos.",
  },
  {
    image: "/action_vivo.jpg",
    title: "eventos",
    description:
      "Cenografia, coffee break, promotores, coordenadores e supervisores de evento, entre outros serviços. Conte com nosso time de profissionais para criar e executar eventos corporativos memoráveis, que vão potencializar a exposição da sua marca, além de gerar networking e negócios.",
  },
  {
    image: "/action_endomarketing.jpg",
    title: "endomarketing",
    description:
      "Estratégia muito utilizada nos dias atuais, o endomarketing vem para melhorar a relação entre a empresa e o colaborador. Podem ser oferecidos incentivos, como premiações ou brindes, para valorizar, incentivar e motivar os times de uma empresa.",
  },
];

export default function Actions() {
  return (
    <section
      className="border-t bg-action bg-cover bg-bottom py-20"
      id="actions"
    >
      <div className="text-center lg:ml-16 lg:text-start">
        <h3 className="scroll-m-20 px-2 text-2xl font-semibold tracking-tight">
          Impulsione o seu negócio com
        </h3>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl ">
          Ações estratégicas e direcionadas!
        </h1>
      </div>
      <div className="container flex flex-col items-center gap-5 space-y-5 py-10">
        {data.map((item, index) => (
          <Card
            key={index}
            className="grid max-w-6xl grid-cols-3 items-center justify-center rounded-xl border-2 border-primary bg-background/60 py-5"
          >
            <CardHeader className="col-span-3 items-center lg:col-span-1">
              <Image
                src={item.image}
                alt="Imagem de evento"
                width={300}
                height={100}
                className="rounded-xl border-2 border-white pt-1"
              />
            </CardHeader>
            <CardContent className="col-span-3 space-y-8 text-center text-4xl lg:col-span-2 lg:text-start">
              <CardTitle className="capitalize">{item.title}</CardTitle>
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
