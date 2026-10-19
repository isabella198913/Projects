import React from 'react';

function Eventos({ setSeccion }) {
  const eventos = [
    {
      id: 1,
      titulo: "Feria de Postres Torre 2",
      categoria: "Gastronomía",
      descripcion: "Venta de postres caseros, tortas y dulces artesanales",
      fecha: "martes, 7 de abril de 2026",
      imagen: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=400"
    },
    {
      id: 2,
      titulo: "Clase de Yoga Comunitaria",
      categoria: "Deporte",
      descripcion: "Sesión de yoga para todos los vecinos del conjunto",
      fecha: "lunes, 13 de abril de 2026",
      imagen: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400"
    },
    {
      id: 3,
      titulo: "Venta de Ropa Usada",
      categoria: "Ropa",
      descripcion: "Ropa en buen estado a precios accesibles para toda la familia",
      fecha: "domingo, 19 de abril de 2026",
      imagen: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=400"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Encabezado Verde */}
      <div className="bg-[#2ecc71] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Eventos del Conjunto</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Descubre ferias, clases y eventos organizados por tus vecinos emprendedores.
          </p>
         
        </div>
      </div>

      {/* Tarjetas */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventos.map((evt) => (
            <div key={evt.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <img src={evt.imagen} alt={evt.titulo} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{evt.titulo}</h3>
                  <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full font-medium border border-green-100">
                    {evt.categoria}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm mb-6">{evt.descripcion}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs italic">
                    📅 {evt.fecha}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs italic">
                    🔒 Ubicación exclusiva para residentes
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs italic">
                    🔒 Contacto exclusivo para residentes
                  </div>
                </div>

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition">
                  🔒 Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setSeccion('inicio')}
            className="bg-green-600 text-white px-10 py-3 rounded-full font-bold hover:bg-green-700 shadow-md transition"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eventos;