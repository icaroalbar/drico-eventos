import Link from "next/link";
import React from "react";
import Image from "next/image";
import Icon from "@/components/ui/icon";
import { data } from "./data";

export default function Footer() {
  return (
    <footer>
      <div className="container grid grid-cols-5 justify-around gap-3 py-10">
        <div className="col-span-5 mb-5 flex items-center justify-center md:justify-start lg:col-span-2">
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
              {/* <p className="text-xs">acessoria em marketing</p> */}
            </div>
          </Link>
        </div>
        {data.groups.map((group, index) => (
          <div
            key={index}
            className="col-span-5 mb-5 md:col-span-2 lg:col-span-1"
          >
            <h3 className="border-b-2 pb-2 font-semibold">{group.title}</h3>
            <ul className="px-2 pt-2 text-sm">
              <React.Fragment>
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="py-1">
                    {item.icon ? (
                      <p className="flex items-start gap-x-2 font-light">
                        <Icon name={item.icon} className="pt-1" size={20} />
                        {item.label}
                      </p>
                    ) : (
                      <Link
                        href={item.href}
                        className="font-extralight underline-offset-4 transition-colors hover:font-light hover:underline"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </React.Fragment>
            </ul>
          </div>
        ))}
      </div>
      <div className="py-3 text-center">
        <p className="text-xs text-white/60">
          &copy; Drico Eventos {new Date().getFullYear()} - Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  );
}
