export default function MenuQRStatic() {
  const menuUrl = "./menu_1753543517259.pdf"; // Se servirá desde el directorio público
  
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mediterranean-900 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-lg text-mediterranean-700 max-w-2xl mx-auto">
            Descubre nuestra selección de platos mediterráneos preparados con ingredientes frescos y auténticos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-playfair font-semibold mediterranean-900 mb-4">
                  Menú Digital
                </h3>
                <p className="text-mediterranean-700 mb-6 leading-relaxed">
                  Escanea el código QR o haz clic en el enlace para ver nuestro menú completo con todos los platos, precios y descripciones detalladas.
                </p>
                <a 
                  href={menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors duration-300 font-medium"
                >
                  Ver Menú PDF
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-mediterranean-100">
                  <div className="w-48 h-48 bg-gradient-to-br from-mediterranean-100 to-cream-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mediterranean-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                      <p className="text-xs text-mediterranean-700 font-medium">Código QR del Menú</p>
                    </div>
                  </div>
                  <p className="text-center text-xs text-mediterranean-600 mt-2">
                    Escanea para ver el menú
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}