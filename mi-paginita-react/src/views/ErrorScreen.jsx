import React from 'react';
import '../css/error.css';
import { Link } from 'react-router-dom';

const ErrorScreen = () => {
  return (
    <div className="elPadre">
      <div className="contenido container">
        <div className="error404  text-center">
          <span>404</span>
          <h2 className='text-center'>Página no encontrada</h2>
          <p><i>Upps!Parece que te has perdido, pero no te preocupes, te ayudaré a encontrar el camino de regreso,¡Vamos!</i></p>
          <div className="d-flex justify-content-center">
            <Link to='/' className='btn btn-warning fw-bold text-danger-emphasis'>Inicio  <i className="bi  bi-arrow-right"></i></Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ErrorScreen;