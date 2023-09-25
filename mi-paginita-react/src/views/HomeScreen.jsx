import React from 'react'
import infoTarjeta from '../data/info';
import CardApp from '../components/CardApp';
import '../css/card.css'
import CarrouselApp from '../components/CarrouselApp';
import FooterApp from '../components/FooterApp';

const HomeScreen = ({modoOscuro}) => {
    return (
        <>
        <CarrouselApp />
        <div className='container'>
            <a href="https://wa.me/? text=Hola!quiero consultar sobre.." target="_blank" ><i class="whatsY bi bi-whatsapp"></i></a>
        <div className="row g-4 p-5">
            {
                infoTarjeta.map((item,index)=>(
                    <CardApp key={index} item={item} />
                ))
            }
        </div>
    </div>
    <FooterApp modoOscuro={modoOscuro}/>
    </>
    )
}

export default HomeScreen;