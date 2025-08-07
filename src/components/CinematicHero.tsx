import { ChevronDown, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";

const CinematicHero = () => {
  return (
    <section className="hero-cinematic">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `particles ${4 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-secondary rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{animationDelay: '2s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="hero-title-cinematic">
          Onde a Inteligência Artificial se Torna sua{" "}
          <span className="text-gradient-electric">Linha de Frente</span>{" "}
          na Defesa
        </h1>
        
        <h2 className="hero-subtitle-cinematic">
          <span className="text-gradient-nvidia font-semibold">AI Defense Orchestra:</span>{" "}
          Automatize, antecipe e neutralize ameaças antes que elas aconteçam.
        </h2>

        <div 
          className="flex justify-center"
          style={{animation: 'fade-in-up 1.2s ease-out 0.9s both'}}
        >
          <Button className="btn-premium">
            Descubra o Futuro da Defesa
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="flex flex-col items-center space-y-2">
          <Mouse className="h-6 w-6" />
          <span className="text-sm font-light">Descubra como</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
    </section>
  );
};

export default CinematicHero;