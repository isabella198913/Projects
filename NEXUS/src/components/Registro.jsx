import React from 'react';

function Registro({ setSeccion }) {
  return (
    
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      
      
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg space-y-8 border border-gray-100">
        
        
        <div>
          <button 
            onClick={() => setSeccion('inicio')} 
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition p-0"
          >
             Volver al inicio
          </button>
        </div>

       
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Crear Cuenta</h2>
          <p className="text-gray-600">Únete a la comunidad Nexus</p>
        </div>

        {/* Formulario de Registro */}
        <form className="mt-8 space-y-5">
          <div className="space-y-4">
            
            {/* Campo: Nombre Completo */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Nombre completo</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 text-sm">👤</span>
                <input 
                  type="text" 
                  className="appearance-none rounded-lg relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-50" 
                  placeholder="Tu nombre" 
                />
              </div>
            </div>

            {/* Campo: Correo Electrónico */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Correo electrónico</label>
               <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 text-sm">✉️</span>
                <input 
                  type="email" 
                  className="appearance-none rounded-lg relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-50" 
                  placeholder="tu@email.com" 
                />
              </div>
            </div>

            {/* Campo: Tipo de Cuenta  */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Tipo de cuenta</label>
              <select 
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg text-dark-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-50"
              >
                <option>Usuario</option>
                <option>Empresa</option>
              </select>
            </div>

            {/* Campo: Confirmar Contraseña (Password) */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Confirmar contraseña</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 text-sm">🔒</span>
                    <input 
                        type="password" 
                        className="appearance-none rounded-lg relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-50" 
                        placeholder="........" 
                    />
                </div>
            </div>
          </div>

          {/* Botón de Acción Principal */}
          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 shadow-lg mt-6"
            >
              Crear cuenta
            </button>
          </div>
        </form>

        {/* Pie del Formulario: Volver al Login */}
        <div className="mt-6 text-center text-sm text-gray-600 border-t border-gray-100 pt-6">
          ¿Ya tienes una cuenta? 
          <button 
            onClick={() => setSeccion('login')} 
            className="font-bold text-green-600 hover:text-green-500 ml-1 p-0"
          >
            Iniciar sesión
          </button>
        </div>

      </div>
    </div>
  );
}

export default Registro;