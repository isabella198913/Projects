function Productos({ setSeccion, mostrarBotonVolver = false }) {
  const listaProductos = [
    { id: 1, nombre: "Sushi Especial", categoria: "Comida", precio: "$20.000", img: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=500" },
    { id: 2, nombre: "Cargador Rápido USB-C", categoria: "Tecnología", precio: "$10.000", img: "/img/cargador.jpg" },
    { id: 3, nombre: "Miel de Montaña Pura", categoria: "Alimentos", precio: "$28.000", img: "/img/mielpura.jpg" },
    { id: 4, nombre: "Óleos Profesionales", categoria: "Diseño", precio: "$50.000", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500" }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="productos">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-green-600 font-bold text-sm uppercase tracking-wider">Populares</p>
          <h2 className="text-4xl font-bold text-gray-800">Productos recomendados</h2>
        </div>

        
        {!mostrarBotonVolver && (
          <button 
            onClick={() => setSeccion('productos')} 
            className="text-green-600 font-medium hover:underline cursor-pointer transition-colors pb-1"
          >
            Ver todas 
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listaProductos.map((prod) => (
          <article key={prod.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={prod.img} alt={prod.nombre} className="w-full h-56 object-cover" />
              <span className="absolute top-4 left-4 bg-green-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                {prod.categoria}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-800 mb-4">{prod.nombre}</h3>
              <p className="text-green-700 font-bold text-xl">{prod.precio}</p>
            </div>
          </article>
        ))}
      </div>

      
      {mostrarBotonVolver && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setSeccion('inicio')}
            className="bg-green-600 text-white px-10 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-lg"
          >
            Volver al Inicio
          </button>
        </div>
      )}
    </section>
  );
}

export default Productos;