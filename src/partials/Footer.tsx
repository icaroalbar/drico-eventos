import Link from "next/link";
import React from "react";
import Image from "next/image";

type MenuItem = {
  icon?: string | any;
  label: string;
  href: string;
};

type MenuGroup = {
  [key: string]: MenuItem[];
};

type MenuData = {
  groupA: MenuGroup["groupA"];
  groupB: MenuGroup["groupB"];
  groupC: MenuGroup["groupC"];
};

export const data: MenuData = {
  groupA: [
    {
      label: "home",
      href: "/#",
    },
    {
      label: "sobre",
      href: "/#",
    },
    {
      label: "ações",
      href: "/#",
    },
    {
      label: "parceiros",
      href: "/#",
    },
    {
      label: "casos",
      href: "/#",
    },
  ],
  groupB: [
    {
      label: "seja um parceiro",
      href: "/#",
    },
    {
      label: "ative sua marca",
      href: "/#",
    },
  ],
  groupC: [
    {
      label: "home",
      href: "/#",
    },
    {
      label: "sobre",
      href: "/#",
    },
    {
      label: "ações",
      href: "/#",
    },
    {
      label: "parceiros",
      href: "/#",
    },
    {
      label: "casos",
      href: "/#",
    },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="container grid grid-cols-5 justify-around gap-x-3 py-10">
        <div className="col-span-2 flex items-center gap-x-2">
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
        {Object.values(data).map((group, index) => (
          <div key={index} className="col-span-1">
            <h3 className="border-b-2 pb-2 font-semibold">Drico Eventos</h3>
            <ul className="px-2 capitalize">
              <React.Fragment>
                {group.map((item, itemIndex) => (
                  <li key={itemIndex} className="py-1">
                    <Link
                      href={item.href}
                      className="font-extralight underline-offset-4 transition-colors hover:font-light hover:underline"
                    >
                      {item.label}
                    </Link>
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
