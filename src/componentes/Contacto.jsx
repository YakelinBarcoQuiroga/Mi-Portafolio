import React from 'react';
import Contacto from "../img/img-contactame.gif"
import SombreMi from "../img/img-sobremi.gif"
import {Link} from 'react-router-dom'
import GatoEstudiando from "../img/img-estudiando.gif"
import Habilidades from "../img/habilidades-img.gif"
import GatoContacto from "../img/Gato-contacto.png"

import emailjs from '@emailjs/browser'

const contacto = () => {

    const sendEmail = (event) => {
        event.preventDevault();

        emailjs.sendForm('service_7fgidin', 'template_de169ys', event.target, 'fQj7Hed4-R2dFA1TD')
        .then(response => console.log(response))
        .catch(error => console.log(error))

    }

    return (
        <div>
            <section className='navbar-principal'>
                <div className='navbar-principal-img'>
                    <img src={Contacto} alt="" />
                </div>
                <h2 className='navbar-principal-texto'>Contáctame</h2>
                <div className='navbar-principal-img'>
                    <img src={Contacto} alt=""/>
                </div>
            </section>
            
            <section className='formulario-contacto'>
                <div className='formulario-contacto-formulario'>
                    <form onSubmit={sendEmail}>
                        <label>Nombre</label>
                        <input type="text" name='user-name'/>

                        <label>Correo</label>
                        <input type="email" name='user-email'/>

                        <label htmlFor="">Mensaje</label>
                        <textarea name='user-message' id="" cols="30" rows="10" ></textarea>

                        <button className='boton-contacto'>Enviar</button>
                    
                    </form>
                </div>
                <div className='imagen-contacto'>
                    <img src={GatoContacto} alt="" />
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

export default contacto;