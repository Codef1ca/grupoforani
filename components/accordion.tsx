import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Recepción del vehículo" title="Recepción del vehículo">
      En esta etapa, se lleva a cabo el proceso de admisión de los vehículos al taller, realizando una inspección inicial para evaluar los daños y determinar el alcance de los servicios necesarios.
      </AccordionItem>
      <AccordionItem key="2" aria-label="Reparación de carrocería" title="Reparación de carrocería">
      Realizamos las reparaciones necesarias para restaurar la integridad del vehículo.
      </AccordionItem>
      <AccordionItem key="3" aria-label="Alineación en bancada" title="Alineación en bancada">
      Ajustamos la estructura del vehículo para devolverla a su forma original.
      </AccordionItem>
      <AccordionItem key="4" aria-label="Proceso de pintura" title="Proceso de pintura">
      Aplicamos pintura de alta calidad para asegurar un acabado impecable.
      </AccordionItem>
      <AccordionItem key="5" aria-label="Inspección pre-entrega" title="Inspección pre-entrega">
      Revisamos y limpiamos el vehículo antes de entregarlo al cliente.
      </AccordionItem>
      <AccordionItem key="6" aria-label="Control de Calidad Final" title="Control de Calidad Final">
      Verificamos que cada reparación cumpla con nuestros estándares de calidad.
      </AccordionItem>
    </Accordion>
  );
}

