import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Car, ChefHat, Bus, Calendar } from "lucide-react";

export default function ContactSection() {
  const teamMembers = [
    { icon: ChefHat, title: "Chef Ejecutivo", name: "Laura Gómez" },
    { icon: Bus, title: "Encargado de Sala", name: "Diego Ramírez" },
    { icon: Calendar, title: "Responsable de Reservas", name: "Ana Torres" }
  ];

  const openGoogleMaps = () => {
    const address = "Calle Gourmet 123, Ciudad Sabores, CP 45678";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-4xl font-bold mediterranean-900 mb-4">Contacto y Ubicación</h3>
          <p className="text-xl text-gray-600">Visítanos en el corazón de Ciudad Sabores</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-cream-50 rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-playfair text-2xl font-bold mediterranean-900 mb-6">Información de Contacto</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="gold-500 w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Dirección</h5>
                      <p className="text-gray-600">Calle Gourmet 123<br />Ciudad Sabores, CP 45678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="gold-500 w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Teléfono</h5>
                      <p className="text-gray-600">+34 912 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Car className="gold-500 w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Parking</h5>
                      <p className="text-gray-600">Parking público a 100 metros</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Team */}
            <Card className="bg-mediterranean-50 rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-playfair text-2xl font-bold mediterranean-900 mb-6">Nuestro Equipo</h4>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center">
                      <member.icon className="mediterranean-700 w-5 h-5 mr-3" />
                      <div>
                        <h5 className="font-semibold">{member.title}</h5>
                        <p className="text-gray-600">{member.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map */}
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="font-semibold mb-2">Mapa Interactivo</p>
              <p className="text-sm mb-4">Calle Gourmet 123, Ciudad Sabores</p>
              <Button
                onClick={openGoogleMaps}
                className="bg-mediterranean-700 hover:bg-mediterranean-800 text-white px-6 py-2 rounded-full transition-colors"
              >
                Abrir en Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
