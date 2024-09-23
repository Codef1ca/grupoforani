'use client';
import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation"; // Importa usePathname

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname(); // Obtén la ruta actual
  
  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false); // Cierra el menú en cada cambio de ruta
  }, [pathname]); // Ejecuta el efecto cuando pathname cambie

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#11183d13]">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/assets/logo-navbar-forani.png" alt="Logo" /> 
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {siteConfig.menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link 
              color="foreground" 
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
  
      <NavbarMenu className="nav-menu-back">
        {siteConfig.menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
