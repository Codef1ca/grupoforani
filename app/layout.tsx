
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar  from "@/components/navbar";
import Botonarr  from "@/components/botonarriba";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen  font-sans antialiased bg-[#11183D]",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen ">
            <Navbar />
            <main className="main">
              {children}
            </main>
            <div className="footer-completo">
              <hr className="linea-footer"></hr>
            <footer className="footer">
            <Link>
            <img src="/assets/logo-footer.png" alt="Logo" className="logo-fo"/> 
            </Link>
            <div className="boton-ig">
            <Link>
            <img src="/assets/instagram-footer-forani.png" alt="Logo" className="ig-f" /> 
            </Link>
            <Botonarr/>
            </div>
            </footer>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
