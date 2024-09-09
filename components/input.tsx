import React from "react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import {Image} from "@nextui-org/react";

export default function App() {
    const variants = ["flat", "faded", "bordered", "underlined"];
  return (
    <div>
    <div className="flex flex-col gap-4">
      <Input type="Nombre" label="Nombre" />
      <Input type="Correo electrónico" label="Correo electrónico" />
      <Textarea
      placeholder="Mensaje"
      className="max-w-xs"
    />
    
    </div>
    <div className="pos-boton-contacto">
          <button className="boton-generico">Enviar formulario
          <Image
      width={35}
      height={35}
      alt="NextUI hero Image with delay"
      src="/assets/flechabotongenerico.png"
      className="boton-img"
      />
          </button>
          </div>
    </div>
    
  );
}
