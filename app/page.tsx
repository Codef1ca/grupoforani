'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import Input from "@/components/input"
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Botonwpp from "@/components/wpp"
import Animacion from "@/components/animacion"



export default function Home() {
  return (
    <div className="bg-[#11183D]">
    <section className="container-hero">
   <div className="hero-home">
    <Animacion>
    <h1 className="titulo-home">Más de una generación 
    <span className="titulo-negrita"> creando valor</span></h1>
    </Animacion>
   </div>
    </section>

    <div className="texto-centrado-container">
      <h2 className="texto-centrado">
      Brindamos soluciones <span className="titulo-negrita"> fiables, integrales, e innovadoras</span>, cumpliendo altos estándares de calidad y ofreciendo el servicio en el menor tiempo posible.
      </h2>
    </div>

  
    <div className="container-dosrecuadros">
      <div className="container-textoybotones">
        <Animacion>
        <h2 className="texto-debotones">Grupo Forani es el resultado de la <span className="titulo-negrita">consolidación de diversas unidades de negocio creadas y desarrolladas a lo largo de tres generaciones por la familia Forani.</span> Nos enorgullece ofrecer un amplio portafolio de servicios con altos estándares de calidad y tecnología avanzada, cubriendo todas las necesidades para nuestros clientes. </h2>
        </Animacion >
        <div className="botonera">
          <h3 className="texto-botonera">Nuestros servicios incluyen:</h3>
          <Animacion>
          <div className="container-solobotones">
            <div className="botonera1">
            <div className="soloboton">Talleres de Carrocería y Pintura</div>
            <div className="soloboton">Taller de Mecánica y Alineación</div>
            </div>
            <div className="botonera1">
            <div className="soloboton">Provisión de Neumáticos y Llantas</div>
            <div className="soloboton">Venta y Reposición de Baterías</div>
            </div>
            <div className="botonera1">
            <div className="soloboton">Taller de Cerrajeria Automotriz</div>
            <div className="soloboton">Servicios Mineros</div>
            </div>            
          </div>
          </Animacion>
          

          <div className="pos-boton-home">
          <a href="/sscomerciales">
          <button className="boton-generico">Contratá nuestros servicios
          <Image
      width={35}
      height={35}
      alt="NextUI hero Image with delay"
      src="/assets/flechabotongenerico.png"
      className="boton-img"
      />
          </button>
          </a>
          </div>
        </div>
      </div>
      <Animacion>
      <div className="container-dosfotos">
      <Image
      width={600}
      height={380}
      alt="NextUI hero Image with delay"
      src="/assets/foto1-home.png"
      className="img-card"
      />
      <Image
      width={600}
      height={380}
      alt="NextUI hero Image with delay"
      src="/assets/foto2-home.png"
      className="img-card"
      />
      </div>
      </Animacion>
    </div>


    <div className="container-cards">
      <h2 className="texto-centrado">Servicios y unidades<span className="titulo-negrita"> de negocio</span></h2>
      <div className="container-solocards">
        <Animacion delay={0.1}>
      <div className="card">
      <Image
      width={400}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/img-card1home.png"
      className="card-c"
      />
        <div className="titulo-card"><h3 className="soloboton">Talleres de Carrocería y Pintura</h3></div>
        <p className="text-card">Inspección, enderezado, soldadura y reemplazo de piezas dañadas, lijado y aplicación de imprimación, pintura, secado, pulido y montaje.</p>
        <a href="/chapa">
        <button className="button-card">Ver más
        <Image
      width={35}
      height={35}
      alt="NextUI hero Image with delay"
      src="/assets/flechabotongen.png"
      className="boton-img"
      />
        </button>
        </a>
      </div>
      </Animacion>

      <Animacion delay={0.2}>
      <div className="card">
      <Image
      width={400}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/img-card2home.png"
      className="card-c"
      />
        <div className="titulo-card"><h3 className="soloboton">Taller de Mecánica y Alineación</h3></div>
        <p className="text-card">Mecanica ligera y mecanica para camionetas con DPF y EGR. Alineado y balanceo de ruedas. Reparación de cerraduras y levantacristales. Provisión de baterías y venta de neumáticos.</p>
        <a href="/mecanica">
        <button className="button-card">Ver más
        <Image
      width={35}
      height={35}
      alt="NextUI hero Image with delay"
      src="/assets/flechabotongen.png"
      className="boton-img"
      />
        </button>
        </a>
      </div>
      </Animacion>

      <Animacion delay={0.3}>
      <div className="card">
      <Image
      width={400}
      height={250}
      alt="NextUI hero Image with delay"
      src="/assets/img-card3home.png"
      className="card-c"
      />
        <div className="titulo-card"><h3 className="soloboton">Provisión de Neumáticos y Llantas</h3></div>
        <p className="text-card">Contamos con venta de neumáticos de la mejor calidad ¡Te aseguramos un viaje sin preocupaciones!</p>
        <a href="/sscomerciales">
        <button className="button-card">Ver más
        <Image
      width={35}
      height={35}
      alt="NextUI hero Image with delay"
      src="/assets/flechabotongen.png"
      className="boton-img"
      />
        </button>
        </a>
      </div>
      </Animacion>
      </div>
      <div className="pos-boton-home">
      <a href="/sscomerciales">
          <button className="boton-generico">Contratá nuestros servicios
          <Image
      width={35}
      height={35}
      alt="NextUI hero Image with delay"
      src="/assets/flechabotongenerico.png"
      className="boton-img"
      />
          </button>
          </a>
          </div>
        
    </div>
    

    <Animacion>
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
    </Animacion>
    <Botonwpp/>
    </div>
  );
}
