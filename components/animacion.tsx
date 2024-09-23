'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Importa motion de framer-motion

const AnimatedComponent = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectar el observador después de que se vuelva visible
        }
      },
      { threshold: 0.1 } // Ajusta el umbral según sea necesario
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Estado inicial
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animación cuando es visible
      transition={{ duration: 0.7, delay }} // Duración de la animación y delay
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
