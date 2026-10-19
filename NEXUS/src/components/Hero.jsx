function Hero() {
    return (
        <section className="bg-[#2ecc71] text-white py-20 flex flex-col items-center justify-center text-center min-h-[500px]">
            <div className="container mx-auto px-4">
              
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Nexus: conecta emprendimientos
                </h1>

                {/* La Descripción  */}
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Explora empresas, descubre productos y apoya el talento local.
                </p>

                {/* Los Botones */}
                <div className="flex gap-4 justify-center flex-wrap">
                   <a href="#Empresas" className="border-2 border-white hover:bg-white hover:text-[#2ecc71] text-white font-bold py-3 px-8 rounded-lg transition duration-600">
                        Explorar empresas
                    </a>

                    <a href="#productos" className="border-2 border-white hover:bg-white hover:text-[#2ecc71] text-white font-bold py-3 px-8 rounded-lg transition duration-600">
                        Ver productos
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;