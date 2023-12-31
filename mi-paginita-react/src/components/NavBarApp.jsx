import React from 'react';
import "../css/navBar.css";
import {NavLink,Link} from 'react-router-dom';


const NavBarApp = ({modoOscuro,cambiarFondo,estado}) => {
    return (
        <header className='sticky-top'>
            <nav className={`navbar  navbar-expand-lg ${modoOscuro ? 'elnavbar' : 'bg-light shadow-lg' }`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-primary fw-bold" to='/'>GlobalTour <i class="bi bi-globe2"></i></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='*'><i class="bi bi-airplane-fill"></i><br/>Vuelos<br/></NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='*'><i class="bi bi-suitcase-lg-fill"></i><br/>Paquetes<br/></NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='*'><i class="bi bi-fire"></i><br/>Ofertas<br/></NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='*'><i class="bi bi-ticket-perforated-fill"></i><br/>Actividades<br/></NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='*'><i class="bi bi-car-front-fill"></i><br/>Autos<br/></NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='*'><i class="bi bi-heart-pulse-fill"></i><br/>Asistencias<br/></NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='/contact'><i class="bi bi-envelope-fill"></i><br/>Contacto<br/></NavLink>
                            </li>
                            {estado && <li className="nav-item me-3">
                                <NavLink className="nav-link text-center" to='/admin'><i class="bi bi-person-fill-gear"></i><br/>Administrador<br/></NavLink>
                            </li>}
                            
                            
                            <li className="nav-item ms-5 my-auto me-3">
                                <Link className={modoOscuro ? "btn btn-outline-light rounded-5" : "btn btn-outline-dark rounded-5"} to='/login'>{estado ? 'Cerrar sesión' : 'Inicia sesión'} <i class="bi bi-person-fill"></i></Link>
                            </li>
                        </ul>
                        
                        
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={cambiarFondo} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBarApp;