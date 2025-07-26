export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Paella mediterránea con mariscos",
      title: "Paella de Mariscos"
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Interior elegante del restaurante",
      title: "Ambiente Acogedor"
    },
    {
      src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Ensalada mediterránea fresca",
      title: "Ensaladas Frescas"
    },
    {
      src: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Pescado mediterráneo a la parrilla",
      title: "Pescados Frescos"
    },
    {
      src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Terraza del restaurante con vista al mar",
      title: "Terraza Mediterránea"
    },
    {
      src: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Postres mediterráneos artesanales",
      title: "Postres Artesanales"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-4xl font-bold mediterranean-900 mb-4">Galería</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un vistazo a nuestro ambiente acogedor y nuestras creaciones culinarias
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `https://via.placeholder.com/600x400/1e3a8a/ffffff?text=${encodeURIComponent(image.title)}`;
                }}
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.opacity = "1";
                }}
                style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-playfair text-lg font-semibold">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
