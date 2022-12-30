import React from 'react';
import Habilidades from "../img/habilidades-img.gif"
import SombreMi from "../img/img-sobremi.gif"
import {Link} from 'react-router-dom'
import GatoEstudiando from "../img/img-estudiando.gif"
import Contacto from "../img/img-contactame.gif"

import HTML from "../img/HTML-logo.png"
import CSS from "../img/Css-logo.png"
import JS from "../img/JavaScript-logo.png"
import ReactJS from "../img/React-icon.png"
import Redux from "../img/Redux-logo.png"
import Bootstrap from "../img/Bootstrap_logo.svg.png" 

import NodeJS from "../img/Node.js_logo.svg.png"
import MySQL from "../img/MySQL-Logo.wine.png"
import PostgreSQL from "../img/Postgresql_elephant.svg.png"

import XD from "../img/AdobeXD-icon.png"
import Figma from "../img/Figma-logo.svg.png"
import Reportes from "../img/Reportes.png"

import Requerimientos from "../img/Requerimientos.png"
import UML from "../img/UML_logo.svg.png"

const habilidades = () => {
    return (
        <div>
            <section className='navbar-principal'>
                <div className='navbar-principal-img'>
                    <img src={Habilidades} alt="" />
                </div>
                <h2 className='navbar-principal-texto'>Habilidades</h2>
                <div className='navbar-principal-img'>
                    <img src={Habilidades} alt="" />
                </div>
            </section>


            <section className='container-habilidades'>
                <div class="align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><p>Front-End</p><i class="fa-solid fa-f icon-habilidades"></i></button>
                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><p>Back-End</p><i class="fa-solid fa-b icon-habilidades"></i></button>
                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><p>Diseño</p><i class="fa-solid fa-d icon-habilidades"></i></button>
                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><p>Análisis</p><i class="fa-solid fa-a icon-habilidades"></i></button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                            <div className='container-tarjetas'>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={HTML} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>HTML</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={CSS} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>CSS</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={JS} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>JS</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={ReactJS} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>ReactJS</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={Redux} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>Redux</p>
                                        <li>En proceso</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={Bootstrap} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>Bootstrap</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                        <div className='container-tarjetas'>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={NodeJS} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>NodeJS</p>
                                        <li>En proceso</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={MySQL} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>MySQL</p>
                                        <li>En proceso</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={PostgreSQL} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>PostgreSQL</p>
                                        <li>En proceso</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                        <div className='container-tarjetas'>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={XD} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>Adobe XD</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={Figma} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>Figma</p>
                                        <li>En proceso</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={Reportes} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>Reportes</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                            <div className='container-tarjetas'>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={Requerimientos} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>Requerimientos</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
                                <div className='habilidades-tarjeta'>
                                    <div className='habilidades-tarjeta-img'>
                                        <img src={UML} alt="" />
                                    </div>
                                    <div className='habilidades-tarjeta-texto'>
                                        <p>UML</p>
                                        <li>Aprendido</li>
                                    </div>
                                </div>
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

export default habilidades;