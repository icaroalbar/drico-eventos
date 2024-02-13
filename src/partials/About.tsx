import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon, { IconNames } from "@/components/ui/icon";

const data = [
  {
    icon: "Users" as IconNames,
    description: "Equipe experiente e criativa, + 15 anos no mercado.",
  },
  {
    icon: "View" as IconNames,
    description: "Soluções inovadoras e estratégicas.",
  },
  {
    icon: "Award" as IconNames,
    description: "+ 500 Ações e eventos realizados.",
  },
  {
    icon: "BadgeCheck" as IconNames,
    description: "+ 50 clientes atendidos",
  },
];

export default function About() {
  return (
    <section className="flex flex-col items-center justify-around gap-y-10 border-t py-20">
      <h1 className="lg: max-w-3xl scroll-m-20 px-10 text-center text-2xl font-extrabold tracking-tight lg:text-4xl ">
        Engaje clientes com ações impactantes, transforme-os em
        <span className="text-primary"> fãs do seu negócio!</span>
      </h1>
      <div className="grid grid-cols-4 justify-around gap-5">
        {data.map((items, index) => (
          <Card
            key={index}
            className="col-span-4 flex min-w-72 max-w-72  flex-col items-center justify-center rounded-xl sm:col-span-2 xl:col-span-1"
          >
            <CardHeader>
              <CardTitle>
                <Icon name={items.icon} size={60} className="text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-4xl">
              <CardDescription>{items.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
