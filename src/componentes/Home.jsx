import React from "react";
import GatoPrincipal from "../img/gatoprincipal.png";
import GatoCv from "../img/gato-cv.png"
import GatoEstudiando from "../img/img-estudiando.gif"
import SombreMi from "../img/img-sobremi.gif"
import Contacto from "../img/img-contactame.gif"
import Habilidades from "../img/habilidades-img.gif"
import {Link} from 'react-router-dom'

import CV from '../pdf/Yakelin Barco CV.pdf'

const home = () => {
  return (
    <div>
      <section className="barra-principal">
        <div className="barra-principal_gato">
          <img className="barra-principal_gato-img" src={GatoPrincipal} alt="Imagen de un Gato" />
        </div>
        <div className="barra-principal_texto">
          <h2>
          ¡Hi! Soy Yakelin Barco desarrolladora Front end, te invito a conocer
          mi portafolio.
          </h2>
        </div>
      </section>
      <section className="contenido-principal">
        <div className="contenido-botoncv">
          <div className="contenido-botoncv-img">
              <img src={GatoCv} alt="" />
          </div>
          <a className="boton-cv" href={CV} download="Yakelin Barco CV.pdf">CV</a>
        </div>
        <div className="contenedor-menu">
          <Link className="botones-menu" to="/sobremi">
            <div className="botones-menu-img">
              <img src={SombreMi} alt="" />
            </div>
            <p className="botones-menu-texto">Sobre mí</p>
          </Link>
          <Link className="botones-menu" to="/habilidades">
            <div className="botones-menu-img">
              <img src={Habilidades} alt="" />
            </div>
            <p className="botones-menu-texto">Habilidades</p>
          </Link> 
          <Link className="botones-menu" to="/proyectos">
            <div className="botones-menu-img">
                <img src={GatoEstudiando} alt="" />
            </div>
            <p className="botones-menu-texto">Proyectos</p>
          </Link>
          <Link className="botones-menu" to="/contacto">
            <div className="botones-menu-img">
                <img src={Contacto} alt="" />
            </div>
            <p className="botones-menu-texto">Contacto</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default home;
