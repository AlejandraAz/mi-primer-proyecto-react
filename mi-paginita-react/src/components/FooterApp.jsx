import React from 'react';
import '../css/footer.css';
import {NavLink,Link} from 'react-router-dom';

const FooterApp = ({modoOscuro}) => {
    return (
        <div className={`container-fluid  py-5 ${modoOscuro ? 'elnavbar text-light' : 'bg-body-tertiary shadow-lg'} `}>
            <h1 className='text-center fw-bolder pb-3'>Tu compañia de viajes desde 1990</h1>
            <div className="row text-center">
                <hr className='text-danger' />
                <div className="col-12 py-3 col-md-5 col-lg-3 ">
                    <h3 className=' text-primary-emphasis'><Link to='/' className='text-decoration-none  fw-bold'>GlobalTour  <i className="bi bi-globe2"></i></Link></h3>
                </div>
                <div className="col-12 py-3 col-md-5 col-lg-3  ">
                    <ul>
                        <h4><u>Soporte</u></h4>
                        <li>Preguntas frecuentes</li>
                        <li>Políticas de privacidad</li>
                        <li>Términos y condiciones</li>
                    </ul>
                </div>
                <div className="col-12 py-3 col-md-5 col-lg-3 ">
                    <ul>
                        <h4><u>GlobalTour</u></h4>
                        <li>Contactanos</li>
                        <li>Acerca de</li>
                        <li>Trabajá con nosotros</li>
                    </ul>
                </div>
                <div className="col-12 col-md-5 col-lg-3 py-3">
                    <h4><u>nuestras redes</u></h4>
                    <Link to="https://www.facebook.com/?locale=es_LA"><i className="iconosF bi bi-facebook"></i></Link>
                    <Link to='https://www.instagram.com/' target='_blank'><i className="iconosF bi bi-instagram"></i></Link>
                    <Link to='https://ar.linkedin.com/'><i className="iconosF bi bi-linkedin"></i></Link>
                    <Link to='https://twitter.com/?lang=es'><i className="iconosF bi bi-twitter"></i></Link>
                </div>
                <hr className='text-danger' />
                <p className='text-center  mt-3'><i class="bi bi-c-circle"></i> 2023 -GlobalTour - Todos los derechos reservados</p>
            </div>
        </div>
    )
}

export default FooterApp;