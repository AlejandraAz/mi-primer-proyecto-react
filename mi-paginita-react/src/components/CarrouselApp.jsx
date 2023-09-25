import React from 'react';
import montaña from "../assets/hermoso-paisaje-montana.jpg"
import atardecer from "../assets/reflejo.jpg"
import paisaje from "../assets/paisaje.jpg"
import playa from "../assets/playa.jpg"
import "../css/carrousel.css";

const CarrouselApp = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-inner el-container-carousel">
                <div className="elCarousel carousel-item active">
                    <img src={atardecer} className="opacity-75  d-block w-100 " alt="atardecer" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold text-primary-emphasis">Disfruta de una experiencia inolvidable</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>Ya sea que estés planeando unas vacaciones en la playa, una aventura en la montaña o un recorrido por la ciudad,</strong></p>
                    </div>
                </div>
                <div className="elCarousel carousel-item">
                    <img src={montaña} className="opacity-75 d-block w-100" alt="montaña" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold text-danger-emphasis">Planificá tu viaje</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>No pierdas la oportunidad de descubrir nuevos lugares, probar deliciosa comida local y sumergirte en diferentes culturas. ¡Empieza a planificar tu viaje ahora y prepárate para vivir momentos inolvidables!"</strong></p>
                    </div>
                </div>
                <div className="elCarousel carousel-item">
                    <img src={paisaje} className="opacity-75 d-block w-100" alt="paisaje" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold text-danger-emphasis">Lugares asombrosos</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>Este paisaje es un regalo para los sentidos, donde se pueden disfrutar de las maravillas de la tierra y el agua en perfecta armonía.</strong></p>
                    </div>
                </div>
                <div className="elCarousel carousel-item">
                    <img src={playa} className="opacity-75 d-block w-100 " alt="playa" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold  text-danger-emphasis">Vacaciones en la playa</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>Sumérgete en la diversión y relajación de unas vacaciones en la playa. Disfruta del sol, la arena y el mar mientras te desconectas de la rutina y creas recuerdos inolvidables</strong></p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <h2 className='text-uppercase fw-bold mt-4 text-center'>Ofertas exclusivas</h2>
        </div>
    )
}

export default CarrouselApp