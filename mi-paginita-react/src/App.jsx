
// import './App.css'
import { useState } from 'react'
import CarrouselApp from './components/CarrouselApp'
import NavBarApp from './components/NavBarApp';
import HomeScreen from './views/HomeScreen';
import FooterApp from './components/FooterApp';
import ContactScreen from './views/ContactScreen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarFondo =()=>{
    setModoOscuro(!modoOscuro);
  }

  return (
    <div className={modoOscuro ? 'elnavbar' : 'bg-light'}>
      <BrowserRouter>
      <NavBarApp modoOscuro={modoOscuro} cambiarFondo={cambiarFondo} />
      <Routes>
        <Route path='/' element={<HomeScreen modoOscuro={modoOscuro} setModoOscuro={setModoOscuro}/>} />
        <Route path='/contact' element={<ContactScreen modoOscuro={modoOscuro}/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
