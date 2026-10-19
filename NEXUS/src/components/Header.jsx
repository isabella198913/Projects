import React from 'react';

function Header({ setSeccion }) {
    return (
        <header className="bg-[#22c55e] text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-20"> 
                
                {/* Logo */}
                <h1 
                    className="text-5xl font-bold cursor-pointer" 
                    onClick={() => setSeccion('inicio')}
                >
                    Nexus
                </h1>

                {/* Navegación Principal */}
                <nav className="hidden md:flex items-center gap-10">
                    
                    {/* Lista de enlaces */}
                    <ul className="flex space-x-8 font-medium list-none m-0 p-0">
                        <li><button onClick={() => setSeccion('inicio')} className="text-xl hover:text-green-200 transition-colors">Inicio</button></li>
                        <li><button onClick={() => setSeccion('nosotros')} className="text-xl hover:text-green-200 transition-colors">Nosotros</button></li>
                        <li><button onClick={() => setSeccion('productos')} className="text-xl hover:text-green-200 transition-colors">Productos</button></li>
                        <li><button onClick={() => setSeccion('empresas')} className="text-xl hover:text-green-200 transition-colors">Empresas</button></li>
                        <li><button onClick={() => setSeccion('eventos')} className="text-xl hover:text-green-200 transition-colors">Eventos</button></li>
                    </ul>

                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setSeccion('login')}
                            className="text-white font-medium text-xl hover:opacity-80 transition ml-4"
                        >
                            Iniciar sesión
                        </button>
                        
                        <button 
                            onClick={() => setSeccion('registro')}
                            className="border-2 border-black text-white px-6 py-2 rounded-2xl text-xl font-bold hover:bg-black hover:text-white transition-all shadow-sm"
                        >
                            Registrarse
                        </button>
                    </div>

                </nav>
            </div>
        </header>
    );
}

export default Header;