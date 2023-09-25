import React from 'react';
import paisajeContacto from '../assets/1.jpg';
import FooterApp from '../components/FooterApp';

const ContactScreen = ({modoOscuro}) => {
    return (
        <>
    <div className='container mb-2 p-2 '>
        <div className="row">
            <div className="col-12 col-md-7 col-lg-6 mt-2">
                <img src={paisajeContacto} className='w-100 rounded-3' alt='paisaje-natural' />
            </div>
            <div className="col-12 col-md-7 col-lg-6">
                <form>
                <h6 className='text-center mt-2 py-2 bg-info-subtle'>Formulario de contacto</h6>
                <div class="form-floating mt-3">
                <input type="text" class="form-control" id="floatingInput" />
                <label for="floatingInput">Nombre</label>
                </div>
                <div class="form-floating mt-3">
                <input type="text" class="form-control" id="floatingPassword" />
                <label for="floatingPassword">Apellido</label>
                </div>
                <div class="form-floating mb-2 mt-3">
                <input type="email" class="form-control" id="floatingPassword" />
                <label for="floatingPassword">Email</label>
                </div>
                <div class="form-floating mb-2 mt-3 ">
                <input type="number" class="form-control" id="floatingPassword" />
                <label for="floatingPassword">Telefono</label>
                </div>
                <div class="form-floating my-4">
                <textarea class="form-control" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Deje su mensaje</label>
                </div>
                <div className="d-flex justify-content-end my-4">
                <button className="btn btn-success">Enviar</button>
                </div>
                </form>
                </div>
        </div>
    </div>
    <FooterApp modoOscuro={modoOscuro}/>
    </>
    )
}

export default ContactScreen;