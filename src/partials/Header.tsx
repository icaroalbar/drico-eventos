import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const dataButtons = [{ label: "Marketing promocional" }, { label: "Eventos" }];

export default function Header() {
  return (
    <section className="bg-header bg-cover">
      <div className="flex h-[90vh] flex-grow items-center justify-start pl-16 backdrop-brightness-50">
        <div className="flex flex-col gap-5">
          <div className=" text-center md:text-start">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold uppercase tracking-tight first:mt-0">
              criando experiências
            </h2>
            <h1 className="scroll-m-20 text-4xl font-extrabold uppercase tracking-tight text-primary lg:text-6xl">
              memoráveis
            </h1>
          </div>
          <div className="space-x-5">
            {dataButtons.map((item, index) => (
              <Button
                key={index}
                asChild
                size={"lg"}
                className="hover:bg-bg-[#61AE6D30] rounded-xl border border-primary bg-[#61AE6D30] text-white hover:border-white"
              >
                <Link href={"/partners"}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
        <Button
          asChild
          size={"icon"}
          className=" absolute bottom-10 right-10 h-14 w-14 rounded-full border bg-primary  text-white hover:bg-[#61AE6D90]"
        >
          <Link
            target="_blank"
            href={
              "https://api.whatsapp.com/send?phone=5521996866342&text=Ol%C3%A1%2C%20Grupo%20HP!%20Poderia%20me%20ajudar%3F"
            }
          >
            <FaWhatsapp size={30} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
