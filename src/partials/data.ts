type MenuItem = {
  icon?: string | any;
  label: string;
  href?: string | any;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

type MenuData = {
  groups: MenuGroup[];
};

export const data: MenuData = {
  groups: [
    {
      title: "Menu",
      items: [
        {
          label: "Home",
          href: "#header",
        },
        {
          label: "Sobre",
          href: "#about",
        },
        {
          label: "Ações",
          href: "#actions",
        },
        {
          label: "Parceiros",
          href: "#partners",
        },
        {
          label: "Casos",
          href: "#cases",
        },
      ],
    },
    {
      title: "Serviços",
      items: [
        {
          label: "Seja um parceiro",
          href: "#",
        },
        {
          label: "Ative sua marca",
          href: "#",
        },
      ],
    },
    {
      title: "Contato",
      items: [
        {
          icon: "Phone",
          label: "(21) 99686-6342",
        },
        {
          icon: "Clock",
          label: "Segunda a sexta, 08h às 18h exceto feriado.",
        },
        {
          icon: "Mail",
          label: "contato@dricoeventos.com.br",
        },
      ],
    },
  ],
};
