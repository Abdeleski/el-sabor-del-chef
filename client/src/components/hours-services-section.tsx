import { Card, CardContent } from "@/components/ui/card";
import { Clock, ConciergeBell, ShoppingBag, Truck, Baby, Accessibility, Cake, Leaf, Shield, Info } from "lucide-react";

export default function HoursServicesSection() {
  const services = [
    { icon: ShoppingBag, label: "Para Llevar" },
    { icon: Truck, label: "Delivery" },
    { icon: Baby, label: "Menú Infantil" },
    { icon: Accessibility, label: "Accesible" },
    { icon: Cake, label: "Eventos" },
    { icon: Leaf, label: "Opciones Veganas" }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours */}
          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-3xl font-bold mediterranean-900 mb-6 text-center">
                <Clock className="gold-500 w-8 h-8 inline mr-3" />
                Horarios
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Lunes - Viernes</span>
                  <div className="text-right">
                    <div className="mediterranean-700 font-medium">12:00 - 16:00</div>
                    <div className="mediterranean-700 font-medium">19:00 - 23:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-700">Sábado - Domingo</span>
                  <div className="text-right">
                    <div className="mediterranean-700 font-medium">13:00 - 17:00</div>
                    <div className="mediterranean-700 font-medium">20:00 - 00:00</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gold-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <Info className="gold-500 w-4 h-4 inline mr-2" />
                  Menú del día disponible de lunes a viernes al mediodía por 14,90€
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Services */}
          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-3xl font-bold mediterranean-900 mb-6 text-center">
                <ConciergeBell className="gold-500 w-8 h-8 inline mr-3" />
                Servicios
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center p-3 bg-mediterranean-50 rounded-lg">
                    <service.icon className="mediterranean-700 w-5 h-5 mr-3" />
                    <span className="text-sm font-medium">{service.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-cream-100 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <Shield className="mediterranean-700 w-4 h-4 inline mr-2" />
                  Adaptamos nuestros platos para alergias e intolerancias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
