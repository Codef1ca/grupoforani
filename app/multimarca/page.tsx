'use client'
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Input from "@/components/input"
import Botonwpp from "@/components/wpp"
import Animacion from "@/components/animacion"
import Carousel from "@/components/carrusel2";
import Botonarr  from "@/components/botonarriba";
import Link from "next/link";


export default function Ssmin() {
  return (
    <div className="bg-[#11183D]">
    <div className="contenedor-hero-gral">
      <Animacion>
       <div className="contenedor-titulosubtitulo">
      <h1 className={title()}>Grupo Forani Multimarcas</h1>
      <h4 className="subtitulo-cont">
      Usados garantizados, consignaciones transparentes, y 0km listos para rodar. Somos confianza, innovación y familia. Somos GRUPO FORANI MULTIMARCAS, donde el futuro de la movilidad empieza hoy."
      </h4>
      </div>
      </Animacion> 
    </div>

    <div className="botonera2">
          <h3 className="texto-botonera2-n">Transformamos la forma de vender<br></br> y comprar autos.</h3>
    </div>
    
    <div className="contenedor-imagen-ssmin">
    <Image
      width={1000}
      height={600}
      alt="NextUI hero Image with delay"
      src="/assets/foto-multimarca1.png"
      className="img-mec"
      />
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




