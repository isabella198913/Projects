import React from 'react'
 import imagenNosotros from '../assets/imagen.nexus.png';

  function Nosotros({ setSeccion }) {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="w-full md:w-2/5">
          <img 
            src={imagenNosotros} 
            alt="Nosotros Nexus" 
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>

        
        <div className="w-full md:w-3/5 flex flex-col gap-8">
          <div>
            <h1 className="text-5xl font-bold text-green-700 mb-6">Sobre Nosotros</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nexus nació como un proyecto académico enfocado en resolver la falta de visibilidad 
              de los pequeños emprendimientos. Nuestra meta es facilitar el acceso a servicios 
              de confianza y productos artesanales de la región.
            </p>
          </div>

         
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm">
              <h2 className="text-2xl font-bold text-green-800 mb-3 text-center">Misión</h2>
              <p className="text-gray-700 text-sm leading-snug">
                Impulsar el comercio local mediante tecnología accesible y de alta calidad para todos.
              </p>
            </div>

            <div className="flex-1 bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm">
              <h2 className="text-2xl font-bold text-green-800 mb-3 text-center">Visión</h2>
              <p className="text-gray-700 text-sm leading-snug">
                Ser la plataforma líder de conexión empresarial y comercial para todo el barrio .
              </p>
            </div>
          </div>

          {/* Botón de volver */}
          <div className="mt-4 flex justify-center w-full">
            <button 
              onClick={() => setSeccion('inicio')}
              className="bg-green-600 text-white px-10 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-md"
            >
              Volver al Inicio
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Nosotros;