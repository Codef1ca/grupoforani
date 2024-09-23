import React from "react";
import { Input, Image } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvgpjvjn");

  if (state.succeeded) {
    return <p>¡Estaremos en contacto!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        {/* Campo de Nombre */}
        <Input
          type="text"
          name="nombre"
          label="Nombre"
          required
        />
        
        {/* Campo de Email */}
        <Input
          id="email"
          type="email"
          name="email"
          label="Correo electrónico"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Campo de Mensaje */}
        <Textarea
          id="message"
          name="message"
          placeholder="Mensaje"
          className="max-w-xs"
          required
        />
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
      </div>

      {/* Botón de Envío */}
      <div className="pos-boton-contacto">
        <button
          type="submit"
          className="boton-generico"
          disabled={state.submitting}
        >
          {state.submitting ? "Enviando..." : "Enviar formulario"}
          <Image
            width={35}
            height={35}
            alt="NextUI hero Image with delay"
            src="/assets/flechabotongenerico.png"
            className="boton-img"
          />
        </button>
      </div>
    </form>
  );
}
