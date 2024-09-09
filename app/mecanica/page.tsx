'use client'
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Input from "@/components/input"
import Botonwpp from "@/components/wpp"

export default function Mecanicayal() {
  return (
    <div className="bg-[#11183D]">
    <div className="contenedor-hero-gral">
       <div className="contenedor-titulosubtitulo">
      <h1 className={title()}>Mecánica y Alineación</h1>
      <h4 className="subtitulo-cont">
      En Grupo Forani, ofrecemos un servicio integral de mecánica automotriz, desde mantenimiento preventivo hasta reparaciones complejas, con la máxima calidad y atención personalizada.
      </h4>
      </div> 

      <div className="contenedor-textospeq">
        <div className="texto-peq">
          <h3 className="titulo-textopeq">Mecánica Ligera </h3>
          <p className="p-textopeq">Mantenimiento preventivo y correctivo, incluyendo cambios de aceite y filtros, frenos, correas, y más.</p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq">Alineación y Balanceo</h3>
          <p className="p-textopeq">Optimizamos el rendimiento y la vida útil de los neumáticos, garantizando una conducción segura y cómoda.</p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq">Mecánica Electrónica</h3>
          <p className="p-textopeq">Especialistas en la reparación de filtros de partículas (DPF), problemas con UREA, reparación de válvulas EGR, y reprogramaciones de ECUs.</p>
        </div>
      </div>
    </div>
    
    <div className="contenedor-imagen-mec">
    <Image
      width={1600}
      height={800}
      alt="NextUI hero Image with delay"
      src="/assets/mecanica-foto.png"
      className="img-mec"
      />
    </div>


    <div className="container-contacto">
      <div className="container-texto-contacto">
      <h1 className="titulo-contacto">Contactate <span className="titulo-negrita">con nosotros</span></h1>
      <p className="texto-contacto">¿Tenés alguna duda? Ponete en contacto con nosotros y recibí asesoramiento 100% personalizado.</p>
      </div>
      <div className="container-componente-contacto">
      <Input/>
      </div>
    </div>
    <Botonwpp/>
    </div>
  );
}




