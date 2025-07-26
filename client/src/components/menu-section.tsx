import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Wine, Leaf, QrCode, Info } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function MenuSection() {
  const { data: qrCodeUrl } = useQuery({
    queryKey: ["/api/menu/qr"],
    enabled: true,
  });

  return (
    <section id="menu" className="py-20 bg-mediterranean-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gold-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold-500 rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Nuestro Menú</h3>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Descubre nuestras especialidades mediterráneas. Escanea el código QR para ver nuestro menú completo con precios actualizados.
        </p>
        
        <Card className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 max-w-md mx-auto transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-0">
            <div className="mb-6">
              <h4 className="font-playfair text-2xl font-bold mediterranean-900 mb-2">Menú Digital</h4>
              <p className="text-gray-600">Escanea para ver todos nuestros platos</p>
            </div>
            
            <div className="bg-gray-100 w-48 h-48 mx-auto rounded-lg flex items-center justify-center mb-6 border-4 border-gold-500">
              {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="QR Code del Menú" className="w-full h-full object-contain" />
              ) : (
                <div className="text-center">
                  <QrCode className="w-16 h-16 mediterranean-900 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Código QR del Menú</p>
                </div>
              )}
            </div>
            
            <p className="text-sm text-gray-500 mb-4">
              O accede directamente:
            </p>
            <Button
              onClick={() => window.open('/api/menu/pdf', '_blank')}
              className="bg-mediterranean-900 hover:bg-mediterranean-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Ver Menú PDF
            </Button>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Fish className="gold-500 w-12 h-12 mx-auto mb-4" />
            <h4 className="font-playfair text-xl font-semibold mb-2">Mariscos Frescos</h4>
            <p className="text-gray-200">Selección diaria del Mediterráneo</p>
          </div>
          <div className="text-center">
            <Wine className="gold-500 w-12 h-12 mx-auto mb-4" />
            <h4 className="font-playfair text-xl font-semibold mb-2">Vinos Selectos</h4>
            <p className="text-gray-200">DO Rioja, Ribera del Duero, Rueda</p>
          </div>
          <div className="text-center">
            <Leaf className="gold-500 w-12 h-12 mx-auto mb-4" />
            <h4 className="font-playfair text-xl font-semibold mb-2">Opciones Saludables</h4>
            <p className="text-gray-200">Vegetarianos, veganos y sin gluten</p>
          </div>
        </div>
      </div>
    </section>
  );
}
