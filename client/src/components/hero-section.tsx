import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.4), rgba(30, 58, 138, 0.6)), url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h2 className="font-dancing text-6xl md:text-8xl font-semibold mb-4 animate-float">
          El Sabor del Chef
        </h2>
        <p className="font-playfair text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Auténtica cocina mediterránea fusión donde cada plato cuenta una historia
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            onClick={() => scrollToSection("#menu")}
            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Menú
          </Button>
          <Button
            onClick={() => scrollToSection("#contacto")}
            variant="outline"
            className="border-2 border-white hover:bg-white hover:mediterranean-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Ubicación
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
