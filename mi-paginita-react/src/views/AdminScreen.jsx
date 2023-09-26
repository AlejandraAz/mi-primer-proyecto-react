import React from 'react';
import imagenAdmin from '../assets/3.jpg';

const AdminScreen = () => {
  return (
    <div className='container  mt-4'>
        <h2 className='text-center mb-4 bg-info'>Administración</h2>
        <div className="row">
<div className="col-12  col-lg-8 ">
    <img src={imagenAdmin} className='w-100 rounded-4 shadow-lg' alt="" />
</div>
<div className="col-12  col-lg-4 text-center">
    <h3 className='mt-4' >Recuerda:</h3>
    <p className='text-center p-2'> "Un buen administrador es aquel que fomenta un ambiente de trabajo positivo y productivo.La comunicación efectiva es esencial para un administrador en la gestión de su equipo.Es exitoso  aquel que busca constantemente el crecimiento y la mejora.
    Nunca subestimes el poder de tu propio potencial. Tienes dentro de ti todo lo necesario para triunfar.La motivación es la chispa que enciende la llama del éxito. Mantén tu pasión y energía en cada tarea que realizas.La actitud positiva es clave para tener una mentalidad exitosa en el trabajo.Recuerda que cada pequeño paso que tomes te acerca más a tus metas profesionales.
    El camino hacia el éxito está lleno de obstáculos, pero con determinación y perseverancia, puedes superarlos.</p>
</div>

        </div>
    </div>
  )
}

export default AdminScreen