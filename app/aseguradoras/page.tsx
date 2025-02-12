'use client'
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Input from "@/components/input"
import Botonwpp from "@/components/wpp"
import Animacion from "@/components/animacion"
import Carousel from "@/components/carrusel2";
import Link from "next/link";
import Botonarr  from "@/components/botonarriba";

export default function Ssmin() {
  return (
    <div className="bg-[#11183D]">
    <div className="contenedor-hero-gral">
      <Animacion>
       <div className="contenedor-titulosubtitulo">
      <h1 className={title()}>Servicios para Aseguradoras</h1>
      <h4 className="subtitulo-cont">
      Somos líderes en la gestión eficiente de siniestros, brindando soluciones integrales diseñadas especialmente para compañías aseguradoras. Nuestro enfoque combina experiencia, tecnología y un servicio personalizado para garantizar la máxima calidad y rapidez en cada operación.
      </h4>
      </div>
      </Animacion> 
    </div>

    <div className="botonera2">
          <h3 className="texto-botonera2">Nuestros servicios incluyen:</h3>
          <Animacion>
          <div className="container-solobotones2">
            <div className="botonera1">
            <div className="soloboton">Reparaciones de chapa y pintura</div>
            <div className="soloboton">Mecánica integral y electrónica</div>
            <div className="soloboton">Provisión de ruedas, neumáticos y baterías</div>
            </div>
            <div className="botonera11">
            <div className="soloboton">Suministro de repuestos multimarca</div>
            <div className="soloboton">Reparación y provisión de cerraduras</div>
            </div>           
          </div>
          </Animacion>
    </div>
    
    <div className="contenedor-imagen-ssmin">
    <Image
      width={1000}
      height={600}
      alt="NextUI hero Image with delay"
      src="/assets/foto1-aseguradora.png"
      className="img-mec"
      />
    </div>

    <div className="container-texto-aseg">
        <h3 className="titulo-textopeq-min">Integración tecnológica con las principales plataformas del sector</h3>
          <h4 className="subtitulo-cont22">
          Nos conectamos directamente con las plataformas líderes como ORION CESVI, Claims Fast Track, Appsolut, Coris y Grant, permitiendo una comunicación fluida, cotizaciones precisas y procesos optimizados para gestionar los siniestros de manera eficiente.
          <br></br>
          <br></br>
          En Grupo Forani, somos más que un proveedor, somos su socio estratégico, comprometidos con la calidad, la agilidad y el éxito en la gestión de cada siniestro.
          </h4>
    </div>

    <div className="posic-aseg-sellos">
    <h3 className="titulo-textopeq-min">Confían en nosotros</h3>
    <Carousel/>
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
    </div>
  );
}




