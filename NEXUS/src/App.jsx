import { useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Card from './components/card'
import Productos from './components/Productos'
import Empresas from './components/Empresas'
import Nosotros from './components/Nosotros'
import Footer from './components/footer'
import Eventos from './components/Eventos'
import Login from './components/Login'
import Registro from './components/Registro'

function App() {
  const [seccion, setSeccion] = useState('inicio');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSeccion={setSeccion} />

      
      {seccion === 'inicio' && (
        <main>
          <Hero setSeccion={setSeccion} />
          <Card />
          
          <Empresas setSeccion={setSeccion} />
          <Productos setSeccion={setSeccion} />
          <Footer/>
        </main>
      )}

      {/* SECCIONES INDIVIDUALES */}
      {seccion === 'nosotros' && <Nosotros setSeccion={setSeccion} />}
      
      {seccion === 'empresas' && <Empresas setSeccion={setSeccion}  mostrarBotonVolver={true} />}

      {seccion === 'productos' && (
        <Productos setSeccion={setSeccion} mostrarBotonVolver={true} />
      )}
        
      {seccion === 'eventos' && <Eventos setSeccion={setSeccion} />}
         
      {seccion === 'login' && <Login setSeccion={setSeccion} />}
      {seccion === 'registro' && <Registro setSeccion={setSeccion} />}
    </div>
  )
}

export default App;