function Card(){


    return(

        <section className="py-12 px-4 max-w-6xl mx-auto" id="beneficios">
    
   <div className="grid grid-cols-4 gap-6">
        
       <article className="bg-white p-8 shadow-md rounded-xl border-t-8 border-green-600">
            <h3 className="font-bold  text-2x1 text-lg mb-3">Empresas Locales</h3>
            <p className="text-gray-600 text-base leading-relaxed">Conecta con los mejores emprendimientos cerca de ti .</p>
        </article>

        <article className="bg-white p-8 shadow-md rounded-xl border-t-8 border-green-600">
            <h3 className="font-bold  text-2x1 text-lg mb-3">Productos Únicos</h3>
            <p className="text-gray-600 text-base leading-relaxed">Encuentra artículos exclusivos y apoya al productor local.</p>
        </article>

        <article className="bg-white p-8 shadow-md rounded-xl border-t-8 border-green-600">
            <h3 className="font-bold  text-2x1 text-lg mb-3">Eventos Próximos</h3>
            <p className="text-gray-600 text-base leading-relaxed">Participa en ferias, talleres y encuentros locales.</p>
        </article>

        <article className="bg-white p-8 shadow-md rounded-xl border-t-8 border-green-600">
            <h3 className="font-bold  text-2x1 text-lg mb-3">Apoyo Local</h3>
            <p className="text-gray-600 text-base leading-relaxed">Impulsa el crecimiento de tu economía local.</p>
        </article>

    </div>
</section>
    )
}

export default Card;