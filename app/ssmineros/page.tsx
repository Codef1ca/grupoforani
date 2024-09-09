'use client'
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Input from "@/components/input"
import Botonwpp from "@/components/wpp"

export default function Ssmin() {
  return (
    <div className="bg-[#11183D]">
    <div className="contenedor-hero-gral">
       <div className="contenedor-titulosubtitulo">
      <h1 className={title()}>Servicios Mineros</h1>
      <h4 className="subtitulo-cont">
      En Grupo Forani, ofrecemos un servicio integral de soluciones mineras,  diseñado para optimizar sus operaciones y maximizar su productividad.  Contamos con una amplia experiencia en el sector y un equipo altamente  capacitado para brindarle el soporte que necesita.
      </h4>
      </div> 

      <div className="contenedor-textospeq">
        <div className="texto-peq">
          <h3 className="titulo-textopeq">Empezá tu aventura</h3>
          <p className="p-textopeq">Explora el mundo con nuestras camionetas 4x4 de alquiler. Equipadas con lo último en tecnología y comodidad. Si quieres algo confiable, esta es tu mejor opción.</p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq">Cómodas y seguras</h3>
          <p className="p-textopeq">En nuestra empresa, la seguridad y el confort son nuestras prioridades. Nuestras camionetas te proveerán de un viaje seguro y cómodo, brindándote la tranquilidad y el confort que necesitas en tus viajes.</p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq">Logística minera</h3>
          <p className="p-textopeq">Ya sea que necesites transportar personal o equipo, nuestras camionetas 4x4 son la elección perfecta para tus necesidades de logística minera.</p>
        </div>
      </div>
    </div>
    
    <div className="contenedor-imagen-ssmin">
    <Image
      width={1600}
      height={800}
      alt="NextUI hero Image with delay"
      src="/assets/serviciosmin-foto.png"
      className="img-mec"
      />
    </div>

    <div className="container-cards">
      <h2 className="texto-centrado"></h2>
      <div className="container-solocards">
      <div className="card">
      <Image
      width={450}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/card1-min.png"
      />
        <div className="titulo-card"><h3 className="soloboton">Alquiler de 4x4</h3></div>
        <p className="text-card">Disponemos de una moderna flota de  camionetas 4x4 equipadas para las condiciones más exigentes del  terreno minero. Ofrecemos alquileres a corto y largo plazo, con opciones  flexibles para satisfacer sus necesidades específicas.</p>
        
      </div>

      <div className="card">
      <Image
      width={450}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/card2-min.png"
      />
        <div className="titulo-card"><h3 className="soloboton">Logística minera</h3></div>
        <p className="text-card">Nos encargamos de la planificación, ejecución y  control de toda la cadena logística de su operación minera. Optimizamos  el transporte de materiales, insumos y personal, garantizando eficiencia,  seguridad y puntualidad.
        </p>
        
      </div>

      <div className="card">
      <Image
      width={450}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/card3-min.png"
      />
        <div className="titulo-card"><h3 className="soloboton">Control de flota minera</h3></div>
        <p className="text-card">Implementamos sistemas de control  preventivo de flota minera de última tecnología para optimizar el rendimiento de sus vehículos.</p>
        
      </div>
      </div>
     
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




