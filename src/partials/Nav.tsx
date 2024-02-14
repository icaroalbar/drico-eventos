import { Separator } from "@/components/ui/separator";
import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

export default function Nav() {
  return (
    <nav className="border-b" id="header">
      <div className="container flex items-center justify-between  py-3">
        <div className="flex items-center gap-x-2">
          <Link href={"/"} className="flex items-center gap-x-2">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Logo Drico eventos"
              className="pt-1"
            />
            <div className="uppercase">
              <p className="text-xl font-bold">
                drico <span className="text-primary">eventos</span>
              </p>
              <p className="text-xs">acessoria em marketing</p>
            </div>
          </Link>
        </div>
        <ul className="flex items-center gap-x-16">
          <Button
            asChild
            variant={"ghost"}
            className="hidden rounded-xl hover:bg-white/20 hover:text-primary md:flex"
          >
            <Link href={"#"} className="flex items-center gap-x-2">
              <Icon name="ScanFace" /> Ative sua marca
            </Link>
          </Button>
          <div className="space-x-3">
            <Button
              asChild
              size={"icon"}
              variant={"ghost"}
              className="hidden rounded-xl hover:bg-white/20 hover:text-primary md:inline-flex"
            >
              <Link
                target="_blank"
                href={"https://www.instagram.com/dricoeventos/"}
              >
                <Icon name="Instagram" />
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="rounded-xl text-primary hover:bg-white/20 hover:text-primary"
                >
                  <Icon name="AlignJustify" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="mb-2 px-2">
                  <SheetTitle className="flex justify-start">Menu</SheetTitle>
                </SheetHeader>
                <Separator />
                <Link
                  href={"/partners"}
                  className="flex items-center gap-x-2 p-3 hover:bg-primary"
                >
                  <SheetClose className="flex w-full items-center gap-x-2 text-start">
                    <Icon name="HeartHandshake" size={20} /> Seja um parceiro
                  </SheetClose>
                </Link>
                <Link
                  href={"/partners"}
                  className="flex items-center gap-x-2 p-3 hover:bg-primary"
                >
                  <SheetClose className="flex w-full items-center gap-x-2 text-start">
                    <Icon name="ScanFace" size={20} /> Ative sua marca
                  </SheetClose>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/dricoeventos/"}
                  className="flex items-center gap-x-2 p-3 hover:bg-primary"
                >
                  <SheetClose className="flex w-full items-center gap-x-2 text-start">
                    <Icon name="Instagram" size={20} /> Rede social
                  </SheetClose>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/dricoeventos/"}
                  className="flex items-center gap-x-2 p-3 hover:bg-primary"
                >
                  <SheetClose className="flex w-full items-center gap-x-2 text-start">
                    <FaWhatsapp size={20} /> Fale conosco
                  </SheetClose>
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </ul>
      </div>
    </nav>
  );
}
