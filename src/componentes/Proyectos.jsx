import React from 'react';
import Proyecto from "../img/img-estudiando.gif"
import SombreMi from "../img/img-sobremi.gif"
import {Link} from 'react-router-dom'
import GatoEstudiando from "../img/img-estudiando.gif"
import Contacto from "../img/img-contactame.gif"
import Habilidades from "../img/habilidades-img.gif"

import Frase from "../img/Frasse al azar.png"
import Clima from "../img/app del clima.png"
import Rick from "../img/Rick and Morty.png"
import Pokedex from "../img/pokedex.png"

import Manual from "../img/Manual de usuari.png"
import MYA from "../img/MyaSalesSystem.png"
import ArchRequerimientos from "../img/img-reque.png"
import Diagramas from "../img/diagramas.png"

import PDFManual from "../pdf/Manual de instalación y configuración del sistema de información.pdf"
import PDFTecnico from "../pdf/Informe técnico de MYA SALES SYSTEM.pdf"
import PDFDiagramas from "../pdf/Diagramas MYA SALES SYSTEM.pdf"

const Proyectos = () => {
    return (
        <div>
            <section className='navbar-principal'>
                <div className='navbar-principal-img'>
                    <img src={Proyecto} alt="" />
                </div>
                <h2 className='navbar-principal-texto'>Proyectos</h2>
                <div className='navbar-principal-img'>
                    <img src={Proyecto} alt="" />
                </div>
            </section>

            <section className='contenido-principal-proyecto'>
                <h3>Front-End</h3>
                <div className='proyecto-contenedor-tarjeta'>
                    <div className='proyecto-tarjeta'>
                        <div className='proyecto-tarjeta-img'>
                            <img src={Frase} alt="" />
                        </div>
                        <div className='proyecto-tarjeta-texto'>
                            <h4>Frase al azar</h4>
                            <p>HTML-CSS-JS-ReactJS</p>
                            <p>Terminado</p>
                            <div className='proyecto-tarjeta-links'>
                                <a href="https://delightful-caramel-80439c.netlify.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
                                <a href="https://github.com/YakelinBarcoQuiroga/QuoteBox" target="_blank"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='proyecto-tarjeta'>
                        <div className='proyecto-tarjeta-img'>
                            <img src={Clima} alt="" />
                        </div>
                        <div className='proyecto-tarjeta-texto'>
                            <h4>App del clima</h4>
                            <p>HTML-CSS-JS-ReactJS</p>
                            <p>Terminado</p>
                            <div className='proyecto-tarjeta-links'>
                                <a href="https://dynamic-phoenix-e22881.netlify.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
                                <a href="https://github.com/YakelinBarcoQuiroga/Weather-App" target="_blank"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='proyecto-tarjeta'>
                        <div className='proyecto-tarjeta-img'>
                            <img src={Rick} alt="" />
                        </div>
                        <div className='proyecto-tarjeta-texto'>
                            <h4>Rick and Morty</h4>
                            <p>HTML-CSS-JS-ReactJS-API</p>
                            <p>Terminado</p>
                            <div className='proyecto-tarjeta-links'>
                                <a href="https://luminous-cendol-be00a8.netlify.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
                                <a href="https://github.com/YakelinBarcoQuiroga/Rick-and-Morty-Wiki" target="_blank"><i class="fa-brands fa-github" ></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='proyecto-tarjeta'>
                        <div className='proyecto-tarjeta-img'>
                            <img src={Pokedex} alt="" />
                        </div>
                        <div className='proyecto-tarjeta-texto'>
                            <h4>Pokedex</h4>
                            <p>HTML-CSS-JS-ReactJS-API</p>
                            <p>En proceso</p>
                            <div className='proyecto-tarjeta-links'>
                                <a href="https://nimble-tiramisu-ea8bc5.netlify.app/#/pokedex" target="_blank"><i class="fa-solid fa-link"></i></a>
                                <a href="https://github.com/YakelinBarcoQuiroga/pokedex" target="_blank"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Diseño</h3>
                    <div className='proyecto-contenedor-tarjeta'>
                        <div className='proyecto-tarjeta'>
                            <div className='proyecto-tarjeta-img'>
                                <img src={Manual} alt="" />
                            </div>
                            <div className='proyecto-tarjeta-texto'>
                                <h4>Manual de usuario</h4>
                                <p>MYA SALES SYSTEM</p>
                                <p>Terminado</p>
                                <div className='proyecto-tarjeta-links'>
                                    <a href={PDFManual} download="Diseño del manual de usuario.pdf"><i class="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='proyecto-tarjeta'>
                            <div className='proyecto-tarjeta-img'>
                                <img src={MYA} alt="" />
                            </div>
                            <div className='proyecto-tarjeta-texto'>
                                <h4>Diseño MYA SALES</h4>
                                <p>HTML-CSS-JS-Bootstrap</p>
                                <p>Terminado</p>
                                <div className='proyecto-tarjeta-links'>
                                    <a href="https://view.genial.ly/63ae110798428f0017e38d4f/presentation-diseno-de-mya-sales-system" target="_blank"><i class="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                <h3>Análisis</h3>
                    <div className='proyecto-contenedor-tarjeta'>
                        <div className='proyecto-tarjeta'>
                            <div className='proyecto-tarjeta-img'>
                                <img src={ArchRequerimientos} alt="" />
                            </div>
                            <div className='proyecto-tarjeta-texto'>
                                <h4>Requerimientos</h4>
                                <p>Sistema MYA SALES SYSTEM</p>
                                <p>Terminado</p>
                                <div className='proyecto-tarjeta-links'>
                                <a href={PDFTecnico} download="Informe técnico del sistema MYA SALES SYSTEM.pdf"><i class="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='proyecto-tarjeta'>
                            <div className='proyecto-tarjeta-img'>
                                <img src={Diagramas} alt="" />
                            </div>
                            <div className='proyecto-tarjeta-texto'>
                                <h4>Diagramas UML</h4>
                                <p>Sistema MYA SALES SYSTEM</p>
                                <p>Terminado</p>
                                <div className='proyecto-tarjeta-links'>
                                <a href={PDFDiagramas} download="Diagramas UML del sistemas MYA SALES SYSTEM.pdf"><i class="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Proyectos;