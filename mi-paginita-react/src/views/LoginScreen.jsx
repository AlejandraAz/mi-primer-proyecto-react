import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginScreen = ({modoOscuro,setEstado}) => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(()=>{
        localStorage.removeItem('usuario');
        setEstado(false);
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email == 'admin@admin.com' && password == '123456'){
            localStorage.setItem('usuario',JSON.stringify(email));
            setEstado(true);
            navigate('/admin')
        } else{
            alert('email o contraseña incorrectos')
        }

    }

    return (
        <div className='vh-100 '>
        <div className='container mb-3 shadow-lg pt-4 rounded-3 text-center mt-4'>
            <h3 className='text-uppercase mb-4'><u>Inicia sesión</u></h3>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div class="form-floating mx-auto mb-3 col-12 col-md-8 col-lg-5">
                        <input type="email" class="form-control" id="floatingInput" required
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} />
                        <label for="floatingInput">Correo electrónico</label>
                    </div>
                    <div class="form-floating mx-auto col-12 col-md-8 col-lg-5">
                        <input type="password" class="form-control" id="floatingPassword" required
                        name='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                    <div className='my-4 '>
                        <button className="btn btn-info">Inicia sesión</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default LoginScreen;