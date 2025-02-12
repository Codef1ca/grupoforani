'use client'
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Input from "@/components/input"
import Botonwpp from "@/components/wpp"
import Animacion from "@/components/animacion"
import Botonarr  from "@/components/botonarriba";
import Link from "next/link";

export default function Ssmin() {
  return (
    <div className="bg-[#11183D]">
    <div className="contenedor-hero-gral">
      <Animacion>
       <div className="contenedor-titulosubtitulo">
      <h1 className={title()}>Servicios Mineros</h1>
      <h4 className="subtitulo-cont">
      En Grupo Forani, nos especializamos en ofrecer soluciones integrales para el mantenimiento y gestión de flotas mineras, diseñadas para optimizar sus operaciones y maximizar la productividad. Nuestra experiencia en el sector y un equipo altamente capacitado nos posicionan como aliados estratégicos para el cuidado y control de sus vehículos.
      </h4>
      </div>
      </Animacion> 
    </div>
    
    <div className="contenedor-imagen-ssmin">
    <Image
      width={1000}
      height={600}
      alt="NextUI hero Image with delay"
      src="/assets/serviciosmin-foto.png"
      className="img-mec"
      />
    </div>

    <div className="container-cards2">
      <div className="container-solocards2">
      <Animacion delay={0.1}>
      
      <div className="card2">
      <Image
      width={400}
      height={270}
      alt="NextUI hero Image with delay"
      src="/assets/fotonueva-ssmm.png"
      className="card-mec"
      />
      <div className="container-txt-ssmm">
        <div className="titulo-card"><h3 className="soloboton">Mantenimiento Preventivo y Correctivo de Flotas</h3></div>
        <p className="text-card">En nuestros talleres especializados, realizamos controles preventivos y correctivos para asegurar el óptimo rendimiento de cada unidad. Nuestro enfoque incluye revisiones técnicas, diagnósticos avanzados y reparaciones rápidas, minimizando tiempos de inactividad y asegurando la continuidad de sus operaciones.</p>
      </div>
      </div>
      </Animacion>

      <Animacion delay={0.2}>
      
      <div className="card2">
      <Image
      width={400}
      height={270}
      alt="NextUI hero Image with delay"
      src="/assets/card2-min.png"
      className="card-mec"
      />
      <div className="container-txt-ssmm">
        <div className="titulo-card"><h3 className="soloboton">Gestión Integral de Flotas</h3></div>
        <p className="text-card">Ofrecemos un servicio completo de gestión de flotas, que incluye seguimiento, planificación de mantenimientos programados y reportes detallados del estado de cada vehículo. Nuestro sistema asegura una administración eficiente, prolongando la vida útil de los vehículos y reduciendo costos operativos.</p>
      </div>
      </div>
      </Animacion>

      <Animacion delay={0.3}>
      <div className="card2">
      <Image
      width={400}
      height={270}
      alt="NextUI hero Image with delay"
      src="/assets/card3-min.png"
      className="card-mec"
      />
      <div className="container-txt-ssmm">
        <div className="titulo-card"><h3 className="soloboton">Control y Seguimiento Personalizado</h3></div>
        <p className="text-card">Implementamos sistemas avanzados de control y monitoreo preventivo para garantizar la seguridad y rendimiento de sus vehículos. A través de herramientas tecnológicas, brindamos informes en tiempo real, alertas de mantenimiento y análisis de desempeño, adaptados a las necesidades de cada cliente.
        </p>
      </div>
        
      </div>
      </Animacion>

      <Animacion delay={0.5}>
      <div className="card2">
      <Image
      width={400}
      height={270}
      alt="NextUI hero Image with delay"
      src="/assets/card1-min.png"
      className="card-mec"
      />
      <div className="container-txt-ssmm">
        <div className="titulo-card"><h3 className="soloboton">Alquiler de Camionetas 4x4</h3></div>
        <p className="text-card">Disponemos de una moderna flota de camionetas 4x4, equipadas para afrontar las condiciones más exigentes del terreno minero. Ofrecemos opciones de alquiler flexibles, a corto y largo plazo, que se adaptan perfectamente a las necesidades de su operación.</p>
      </div>
      </div>
      </Animacion>
      </div>
      
     
    </div>

    <h4 className="subtitulo-cont2">
    Con Grupo Forani, no solo tiene acceso a vehículos confiables, sino también a un socio estratégico comprometido con el cuidado, la seguridad y la eficiencia de su flota minera.
    </h4>
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
      <h1 className="tamayo">Sucursal Dean Funes 1066 - Salta Capital</h1>
      </div>
      </div>
      </div>
      <div className="container-componente-contacto">
      <Input/>
      </div>
    </div>
    <div className="footer-completo">
              <hr className="linea-footer"></hr>
            <footer className="footer">
            
            <img src="/assets/logo-footer.png" alt="Logo" className="logo-fo"/> 
         
            <div className="boton-ig">
            <Link href="https://www.instagram.com/foraniautocenter" target="_blank">
            <img src="/assets/instagram-footer-forani.png" alt="Logo" className="ig-f" /> 
            </Link>
            <Botonarr/>
            </div>
            </footer>
            </div>
    <Botonwpp/>
    </div>
  );
}




