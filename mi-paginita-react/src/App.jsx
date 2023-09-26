
// import './App.css'
import { useState } from 'react'
import CarrouselApp from './components/CarrouselApp'
import NavBarApp from './components/NavBarApp';
import HomeScreen from './views/HomeScreen';
import FooterApp from './components/FooterApp';
import ContactScreen from './views/ContactScreen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ErrorScreen from './views/ErrorScreen';
import LoginScreen from './views/LoginScreen';
import AdminScreen from './views/AdminScreen';
import ProtectedRoutes from './routes/ProtectedRoutes';


function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [estado,setEstado] = useState(false);

  const cambiarFondo =()=>{
    setModoOscuro(!modoOscuro);
  }

  return (
    <div className={modoOscuro ? 'elnavbar' : 'bg-light'}>
      <BrowserRouter>
      <NavBarApp modoOscuro={modoOscuro} cambiarFondo={cambiarFondo} estado={estado}/>
      <Routes>
        <Route path='/' element={<HomeScreen modoOscuro={modoOscuro} setModoOscuro={setModoOscuro}/>} />
        <Route path='/contact' element={<ContactScreen modoOscuro={modoOscuro}/>} />
        <Route path='*' element={<ErrorScreen />} />
        <Route path='/login' element={<LoginScreen modoOscuro={modoOscuro} setEstado={setEstado}/>} />
        <Route
            path="/admin"
            element={
              <ProtectedRoutes estado={estado}>
                <AdminScreen modoOscuro={modoOscuro} />
              </ProtectedRoutes>
            }
          />
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
