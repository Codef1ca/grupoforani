'use client'
import React from "react";
import {Image} from "@nextui-org/react";

const ScrollToTopButton: React.FC = () => {
  // Función para desplazarse hacia el inicio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
    onClick={scrollToTop}
  >
    <Image
      width={130}
      height={30}
      alt="NextUI hero Image with delay"
      src="/assets/volver.png"
      className="botonarr"
      />
  
    </button>
  );
};

export default ScrollToTopButton;
