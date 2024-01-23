import { AlignJustify, Instagram, ScanFace } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Nav() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between  py-3">
        <div className="flex items-center gap-x-2">
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
        </div>
        <ul className="flex items-center gap-x-16">
          <Button
            asChild
            variant={"ghost"}
            className="rounded-xl hover:bg-white/20 hover:text-primary"
          >
            <Link href={"#"} className="flex items-center gap-x-2">
              <ScanFace /> Ative sua marca
            </Link>
          </Button>
          <div className="space-x-3">
            <Button
              asChild
              size={"icon"}
              variant={"ghost"}
              className="rounded-xl hover:bg-white/20 hover:text-primary"
            >
              <a href="#">
                <Instagram />
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="rounded-xl text-primary hover:bg-white/20 hover:text-primary"
                >
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  {/* <SheetDescription>
                  Make changes to your profile here. Click save when done.
                </SheetDescription> */}
                </SheetHeader>
                <Link
                  href={"#"}
                  className="flex items-center gap-x-2 p-3 hover:bg-primary"
                >
                  link
                </Link>
                <Link
                  href={"#"}
                  className="flex items-center gap-x-2 p-3 hover:bg-primary"
                >
                  link
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </ul>
      </div>
    </nav>
  );
}
