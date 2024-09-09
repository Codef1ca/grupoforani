'use client'
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Input from "@/components/input"
import Carousel from "@/components/carrusel"
import Botonwpp from "@/components/wpp"


export default function Sscom() {
  return (
    <div className="bg-[#11183D]">
    <div className="contenedor-hero-gral">
       <div className="contenedor-titulosubtitulo">
      <h1 className={title()}>Servicios y Repuestos</h1>
      <h3 className="titulo-textopeq-min">Baterías</h3>
      <h4 className="subtitulo-cont">
      En Grupo Forani, nos encargamos de la reposición y colocación de baterías de tu vehículo. Contamos con dos marcas de baterías en nuestra cartera de productos, ambas homologadas bajo las normas ISO 9001/2000.
      </h4>
      </div> 

      <div className="contenedor-textospeq">
        <div className="texto-peq">
          <h3 className="titulo-textopeq">Reposición Rápida</h3>
          <p className="p-textopeq">Nos comprometemos a reponer las baterías de los vehículos asegurados en el menor tiempo posible, minimizando cualquier inconveniente para los clientes y asegurando su satisfacción.
          </p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq">Calidad Garantizada</h3>
          <p className="p-textopeq">Trabajamos con baterías de la más alta calidad y durabilidad, asegurando que los vehículos vuelvan a funcionar con total eficiencia y rendimiento.</p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq">Profesionalismo</h3>
          <p className="p-textopeq">Nuestro equipo está formado por técnicos altamente capacitados y con experiencia en la reposición de baterías, garantizando un servicio profesional y confiable en todo momento.</p>
        </div>
      </div>
    </div>
    
    <div className="contenedor-imagen-ssmin">
    <Image
      width={1600}
      height={800}
      alt="NextUI hero Image with delay"
      src="/assets/foto1-sscom.png"
      className="img-mec"
      />
    </div>

    <hr className="linea-sscom"></hr>

    <div className="contenedor-hero-gral">
       <div className="contenedor-titulosubtitulo">
       <h3 className="titulo-textopeq-min">Cerrajería Automotriz</h3>
      <h4 className="subtitulo-cont">
      En Grupo Forani, ofrecemos soluciones de cerrajería automotriz de alta precisión, enfocándonos en la seguridad y funcionalidad de su vehículo. Nuestro equipo especializado diagnostica, repara y mantiene sistemas de cerraduras con un enfoque en eficiencia y calidad.
      </h4>
      </div> 

      <div className="contenedor-textospeq">
        <div className="texto-peq">
          <h3 className="titulo-textopeq2">Diagnóstico de Fallas en Cerraduras</h3>
          <p className="p-textopeq">Identificamos problemas en cerraduras con comando mecánico, asegurando un análisis preciso.
          </p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq">Mantenimiento Correctivo</h3>
          <p className="p-textopeq">Realizamos reparaciones eficientes para restaurar el funcionamiento óptimo de los sistemas de cerradura.
          </p>
        </div>

        <div className="texto-peq">
          <h3 className="titulo-textopeq2">Reemplazo y Reparación de Componentes</h3>
          <p className="p-textopeq">Sustituimos o reparamos componentes defectuosos para garantizar la seguridad y operatividad de su vehículo.</p>
        </div>
      </div>
    </div>

    <div className="contenedor-imagen-ssmin">
    <Image
      width={1600}
      height={800}
      alt="NextUI hero Image with delay"
      src="/assets/foto2-sscom.png"
      className="img-mec"
      />
    </div>

    <hr className="linea-sscom"></hr>

    <div className="contenedor-hero-gral">
       <div className="contenedor-titulosubtitulo">
       <h3 className="titulo-textopeq-min">Neumáticos y Llantas</h3>
      <h4 className="subtitulo-cont">
      Ofrecemos una amplia gama de neumáticos posicionados en el mercado. Trabajamos con más de diez compañías de seguros, cumpliendo sus estándares de calidad y también disponemos de atención y venta al público directo.
      </h4>
      </div> 
    </div>

    <div className="contenedor-imagen-ssmin">
    <Image
      width={1600}
      height={800}
      alt="NextUI hero Image with delay"
      src="/assets/foto3-sscom.png"
      className="img-mec"
      />
    </div>
    <Carousel/>

    <hr className="linea-sscom"></hr>

<div className="contenedor-hero-gral">
   <div className="contenedor-titulosubtitulo">
   <h3 className="titulo-textopeq-min">Repuestos Multimarca</h3>
  <h4 className="subtitulo-cont">
  Grupo Forani, líder en gestión eficiente de siniestros, presenta FORANI EXPRESS REPUESTOS, dedicada a la venta de repuestos nacionales e importados MULTIMARCAS con envíos a todo el país.
  </h4>
  </div> 

  <div className="ultimocontenedor">
  <Image
      width={600}
      height={330}
      alt="NextUI hero Image with delay"
      src="/assets/foto3-sscom.png"
      className="img-ult"
      />
      <div className="texto-ultimocontenedor">
    <h3>Con <span className="titulo-negrita">Forani Express</span>, garantizamos la disponibilidad inmediata de productos de alta rotación a través de una red de centros logísticos estratégicamente ubicados, asegurando entregas rápidas y confiables.</h3>
    <h3><span className="titulo-negrita">Grupo Forani: eficiencia y rapidez para mantener tu vehículo en las mejores condiciones.</span></h3>
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




