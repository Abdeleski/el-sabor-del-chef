import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Heart, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="font-playfair text-4xl font-bold mediterranean-900 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En <span className="font-semibold mediterranean-700">El Sabor del Chef</span>, fusionamos la tradición mediterránea con técnicas culinarias innovadoras. Nuestro Chef Ejecutivo, <span className="font-semibold">Laura Gómez</span>, crea experiencias gastronómicas únicas que despiertan todos los sentidos.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ubicados en el corazón de Ciudad Sabores, ofrecemos un ambiente acogedor donde cada comida se convierte en un momento especial. Nuestros 20 cuidadosamente diseñados espacios pueden acomodar desde cenas íntimas hasta celebraciones familiares.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Utensils className="gold-500 h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold mediterranean-900">Cocina Fusión</h4>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Heart className="gold-500 h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold mediterranean-900">Con Amor</h4>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Leaf className="gold-500 h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold mediterranean-900">Ingredientes Frescos</h4>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop&crop=center&auto=format&q=80" 
              alt="Chef preparando platos mediterráneos" 
              className="rounded-xl shadow-2xl w-full h-auto" 
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "https://via.placeholder.com/800x600/1e3a8a/ffffff?text=Chef+Mediterr%C3%A1neo";
              }}
              onLoad={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.opacity = "1";
              }}
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
