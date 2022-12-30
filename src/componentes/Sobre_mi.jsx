import React from 'react';
import SombreMi from "../img/img-sobremi.gif"
import {Link} from 'react-router-dom'
import GatoEstudiando from "../img/img-estudiando.gif"
import Contacto from "../img/img-contactame.gif"
import Habilidades from "../img/habilidades-img.gif"
import Me from "../img/me.png"

const Sobre_mi = () => {
    return (
        <div>
            <section className='navbar-principal'>
                <div className='navbar-principal-img'>
                    <img src={SombreMi} alt="" />
                </div>
                <h2 className='navbar-principal-texto'>Sobre mí</h2>
                <div className='navbar-principal-img'>
                    <img src={SombreMi} alt="" />
                </div>
            </section>
            <section className='contenido-sobremi'>
                <div className='contenido-sobremi-img'>
                    <div className='contenido-sobremi-img-dos'>
                        <img src={Me} alt="" />
                    </div>
                </div>
                <p className='contenido-sobremi-texto'>
                ¡Bienvenido! <br /> <br />
                Es un gusto tenerte por aquí, mi nombre es Yakelin Barco, me encanta el diseño y el desarrollo Web Front-End, aunque voy en camino de ser desarrolladora Full Stack, estudio un tecnólogo en Análisis y desarrollo de sistemas de información en el SENA. <br />
                Me apasiona escuchar música, el dibujo y los libros, ¡Oh, por cierto! También los gatos. <br />
                Dentro de mis fortalezas esta la amabilidad, el trabajo en equipo y la adaptabilidad. 
                </p>
                
            </section>
            <section className='menu'>
                <Link to='/sobremi' className='link-menu'>
                    <div className='link-menu-img'>
                        <img src={SombreMi} alt="" />
                    </div>
                    <p>Sobre mí</p>
                </Link>
                <Link to='/habilidades' className='link-menu'>
                    <div className='link-menu-img'>
                        <img className='img-habilidades' src={Habilidades} alt="" />
                    </div>
                    <p>Habilidades</p>
                </Link>
                <Link to='/proyectos' className='link-menu'>
                    <div className='link-menu-img'>
                        <img src={GatoEstudiando} alt="" />
                    </div>
                    <p>Proyectos</p>
                </Link>
                <Link to='/contacto' className='link-menu'>
                    <div className='link-menu-img'>
                        <img src={Contacto} alt="" />
                    </div>
                    <p>Contacto</p>
                </Link>
                <Link to='/' className='link-menu'>
                    <i class="fa-solid fa-house-chimney"></i>
                    <p>Home</p>
                </Link>
            </section>
        </div>
    );
};

export default Sobre_mi;