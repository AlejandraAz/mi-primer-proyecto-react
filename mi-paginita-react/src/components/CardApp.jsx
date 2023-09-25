import React from 'react';
import '../css/card.css'

const CardApp = ({item}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 text-bg-secondary">
            <img src={item.imagen} className="card-img opacity-75" alt={item.titulo}/>
            <div className="card-img-overlay ">
            <h5 className="card-title text-center fw-semibold bg-success">{item.titulo}</h5>
            <p className="card-text fw-bold text-danger-emphasis text-center bg-light">{item.precio}</p>
            <p className="card-text fw-bold text-success-emphasis text-center bg-warning"><small>Desde: {item.origen}</small></p>
            </div>
            </div>
        </div>
    )
}

export default CardApp