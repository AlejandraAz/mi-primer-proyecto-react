
import paisajeContacto from '../assets/1.jpg';
import FooterApp from '../components/FooterApp';
import { useState } from 'react';

const ContactScreen = ({modoOscuro}) => {

    const [formValueContacts, setFormValueContacts] = useState({
        nombre: '',
        apellido:'',
        email: '',
        telefono:'',
        mensaje:''
    });

    const cambios =(e)=>{
        setFormValueContacts({...formValueContacts,[e.target.name]:e.target.value})
    }
    
    
   
    const enviados = (e)=>{
        
        alert('Hemos recibido su mensaje le responderemos a la brevedad..');
        e.target.reset();
    }

    return (
        <>
    <div className='container mt-3 mb-2 p-2 '>
        <div className="row">
            <div className="col-12 col-md-7 col-lg-6 mt-2">
                <img src={paisajeContacto} className='w-100 rounded-3' alt='paisaje-natural' />
            </div>
            <div className="col-12 col-md-7 col-lg-6">
                <form  onSubmit={enviados}>
                <h6 className='text-center mt-2 py-2 bg-info-subtle'>Formulario de contacto</h6>
                <div class="form-floating mt-3">
                <input type="text" class="form-control" id="floatingInput" required
                name='nombre'
                value={formValueContacts.nombre}
                onChange={cambios} 
                />
                <label for="floatingInput">Nombre</label>
                </div>
                <div class="form-floating mt-3">
                <input type="text" class="form-control" id="floatingPassword" required
                name='apellido'
                value={formValueContacts.apellido}
                onChange={cambios} />
                <label for="floatingPassword">Apellido</label>
                </div>
                <div class="form-floating mb-2 mt-3">
                <input type="email" class="form-control" id="floatingPassword" required
                name='email'
                value={formValueContacts.email}
                onChange={cambios}  />
                <label for="floatingPassword">Email</label>
                </div>
                <div class="form-floating mb-2 mt-3 ">
                <input type="number" class="form-control" id="floatingPassword" required
                name='telefono'
                value={formValueContacts.telefono}
                onChange={cambios}  />
                <label for="floatingPassword">Telefono</label>
                </div>
                <div class="form-floating my-4">
                <textarea class="form-control" id="floatingTextarea" required
                name='mensaje'
                value={formValueContacts.mensaje}
                onChange={cambios} 
                ></textarea>
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