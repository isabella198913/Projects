import React from 'react';

function Login({ setSeccion }) {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-8">
        
        <button onClick={() => setSeccion('inicio')} className="text-sm text-gray-500 hover:text-green-600">
          ← Volver al inicio
        </button>

        <div className="text-center">
          <div className="mx-auto bg-gray-100 rounded-full h-24 w-24 flex items-center justify-center mb-4">
             <span className="text-5xl text-gray-400">👤</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Iniciar sesión</h2>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">👤</span>
              <input 
                type="email" 
                required 
                className="rounded-lg w-full px-10 py-3 border border-gray-300 focus:ring-green-500 focus:border-green-500 bg-gray-50" 
                placeholder="Username" 
              />
            </div>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">🔒</span>
              <input 
                type="password" 
                required 
                className="rounded-lg w-full px-10 py-3 border border-gray-300 focus:ring-green-500 focus:border-green-500 bg-gray-50" 
                placeholder="Password" 
              />
            </div>
          </div>

          <button type="submit" className="w-full py-3 px-4 font-bold rounded-xl text-white bg-green-600 hover:bg-green-700 shadow-lg">
            Iniciar sesión
          </button>

          {/* Botón de Google */}
          <div className="mt-4">
            <button type="button" className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="w-5 h-5"/>
              Iniciar sesión con Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;