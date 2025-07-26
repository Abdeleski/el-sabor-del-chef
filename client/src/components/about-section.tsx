import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Heart, Leaf } from "lucide-react";
import ReliableImage from "./reliable-image";

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
            <ReliableImage 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              fallback="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Chef preparando platos mediterráneos" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
