function Empresas({ setSeccion, mostrarBotonVolver = false }) {
  const listaEmpresas = [
    {
      id: 1,
      nombre: "FixIt Pro",
      categoria: "Mantenimiento",
      calificacion: "4.9",
      descripcion: "Reparaciones rápidas y garantizadas...",
      img: "/img/mantenimiento_foto.jpg" 
    },
    {
      id: 2,
      nombre: "Trazo & Papel",
      categoria: "Papelería",
      calificacion: "4.8",
      descripcion: "Todo en suministros de oficina y materiales creativos.",
      img: "/img/papeleria.jpg"
    },
    {
      id: 3,
      nombre: "Hebra & Estilo",
      categoria: "Costura",
      calificacion: "5.0",
      descripcion: "Confección a medida y arreglos con acabados de alta calidad.",
      img: "/img/costura.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="Empresas">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Empresas destacadas</h2>
          <p className="text-gray-600">Descubre los mejores emprendimientos de la comunidad Nexus</p>
        </div>

        
        {!mostrarBotonVolver && (
          <button 
            onClick={() => setSeccion('empresas')} 
            className="text-green-600 font-medium hover:underline cursor-pointer transition-colors"
          >
            Ver todas →
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {listaEmpresas.map((empresa) => (
          <article key={empresa.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-hover hover:shadow-2xl">
            <img src={empresa.img} alt={empresa.nombre} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-xl">{empresa.nombre}</h3>
                <span className="text-yellow-500 font-bold">★ {empresa.calificacion}</span>
              </div>
              <p className="text-green-600 text-sm mb-3">{empresa.categoria}</p>
              <p className="text-gray-600 text-sm mb-6">{empresa.descripcion}</p>
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

export default Empresas;