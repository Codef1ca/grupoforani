
'use client'
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Input from "@/components/input"
import Accordion from "@/components/accordion"
import Botonwpp from "@/components/wpp"
import Animacion from "@/components/animacion"

export default function Mecanicayal() {
  return (
    <div className="bg-[#11183D]">
    <div className="contenedor-hero-gral">
    <Animacion>
       <div className="contenedor-titulosubtitulo">
      <h1 className={title()}>Carrocería y Pintura</h1>
      <h4 className="subtitulo-cont">
      Nuestro taller de carrocería y pintura combina  tecnología de punta y certificación CESVI para asegurar la más alta  calidad en la reparación de vehículos. Nos comprometemos a  brindar resultados excepcionales a través de nuestras modernas  instalaciones y equipos avanzados
      </h4>
      </div> 
      </Animacion>

      <div className="contenedor-textospeq">
      <Animacion delay={0.1}>
        <div className="div-textospeq">
        <div className="texto-peq2">
          <p className="p-textopeq"><span className="titulo-negrita">Cabinas de Pintura</span>: Diseñadas para ofrecer acabados  impecables con control ambiental preciso.</p>
        </div>
        <div className="texto-peq2">
          <p className="p-textopeq"><span className="titulo-negrita">Planos Aspirantes</span>: Mantienen un entorno de trabajo limpio,  seguro y libre de contaminantes.</p>
        </div>
        </div>
        </Animacion>

        <Animacion delay={0.3}>
        <div className="div-textospeq">
        <div className="texto-peq2">
          <p className="p-textopeq"><span className="titulo-negrita">Bancadas de Enderezado</span>: Ofrecen precisión y eficiencia en la  reparación estructural de vehículos.</p>
        </div>
        <div className="texto-peq2">
          <p className="p-textopeq"><span className="titulo-negrita">Desabolladoras Multispot</span>: Soluciones de última generación para la reparación rápida de daños menores.</p>
        </div>
        </div>
        </Animacion>

        <Animacion delay={0.5}>
        <div className="div-textospeq">
        <div className="texto-peq2">
          <p className="p-textopeq"><span className="titulo-negrita">Laboratorio de Colometría</span>: Garantiza una combinación de colores  exacta y personalizada para cada vehículo.</p>
        </div>
        <div className="texto-peq2">
          <p className="p-textopeq"><span className="titulo-negrita">Lámparas IR</span>: Facilitan el secado y curado eficiente de la pintura,  reduciendo los tiempos de espera.</p>
        </div>
        </div>
        </Animacion>
      </div>
    </div>
    
    <div className="contenedor-imagen-mec">
    <Image
      width={1000}
      height={600}
      alt="NextUI hero Image with delay"
      src="/assets/img-carroceria.png"
      className="img-mec"
      />
    </div>

    <Animacion>
    <div className="contenedor-acordeon">
    <Accordion/>
    </div>
    </Animacion>

    <div className="container-cards">
      <h2 className="texto-centrado"></h2>
      <div className="container-solocards">
      <Animacion delay={0.1}>
      <div className="card">
      <Image
      width={400}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/card1-chapa.png"
      className="card-mec"
      />
        <div className="titulo-card"><h3 className="soloboton">Uso responsable de productos químicos</h3></div>
        <p className="text-card">La empresa se preocupa por utilizar productos químicos de limpieza y pintura respetuosos con el medio ambiente. Se busca opciones seguras biodegradables y se minimiza la cantidad de productos químicos utilizados en las operaciones.</p>
        
      </div>
      </Animacion>


      <Animacion delay={0.3}>
      <div className="card">
      <Image
      width={400}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/card2-chapa.png"
      className="card-mec"
      />
        <div className="titulo-card"><h3 className="soloboton">Gestión adecuada de residuos</h3></div>
        <p className="text-card">Los residuos se clasifican y separan correctamente, incluyendo desechos de pintura, aceites usados, filtros de aire y otros materiales. Además, se considera la posibilidad de reciclar o reutilizar estos materiales siempre que sean factibles.
        </p>
        
      </div>
      </Animacion>

      <Animacion delay={0.5}>
      <div className="card">
      <Image
      width={400}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/card3-chapa.png"
      className="card-mec"
      />
        <div className="titulo-card"><h3 className="soloboton">Colaboración con proveedores sostenibles</h3></div>
        <p className="text-card">La empresa establece relaciones de colaboración con proveedores que comparten su enfoque sostenible. Se busca trabajar con proveedores que ofrezcan pinturas eco amigables y piezas de automóviles recicladas o reutilizadas.</p>
        
      </div>
      </Animacion>
      </div>
      
    </div>

    <div className="container-contacto">
      <div className="container-texto-contacto">
      <h1 className="titulo-contacto">Contactate <span className="titulo-negrita">con nosotros</span></h1>
      <p className="texto-contacto">¿Tenés alguna duda? Ponete en contacto con nosotros y recibí asesoramiento 100% personalizado.
      </p>
      <div className="ubic">
      <Image
      width={22}
      height={25}
      alt="NextUI hero Image with delay"
      src="/assets/ubi-forani.png"
      className="ubi"
      />
      <div className="ubic-txt">
      <h1>Sucursal Dean Funes 1066 - Salta Capital</h1>
      <h1>Sucursal Juan E. Tamayo 363 - Salta Capital</h1>
      </div>
      </div>
      </div>
      <div className="container-componente-contacto">
      <Input/>
      </div>
    </div>
    <Botonwpp/>
    </div>
  );
}