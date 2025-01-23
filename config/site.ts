export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  description: "Grupo Forani",
  name: "Grupo Forani",
  navItems: [
    {
      label: "Carrocería y pintura",
      href: "/chapa",
    },
    {
      label: "Servicios para aseguradoras",
      href: "/mecanica",
    },
    {
      label: "GF multimarcas",
      href: "/sscomerciales",
    },
  ],
  menuItems: [
    {
      label: "Carrocería y pintura",
      href: "/chapa",
    },
    {
      label: "Servicios para aseguradoras",
      href: "/aseguradoras",
    },
    {
      label: "GF multimarcas",
      href: "/multimarca",
    },
  ],
  chapaYPinturaItems: [
    { label: "Taller de mecanica", href: "/mecanica" },
    { label: "Repuestos", href: "/sscomerciales" },
    { label: "Servicios mineros", href: "/ssmineros" },
    // Otros elementos del menú desplegable...
  ],
};




