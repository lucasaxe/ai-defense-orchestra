import { Button } from "@/components/ui/button";
import { Shield, Brain, Target } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 z-10">
        {/* Floating Agents */}
        <div className="agent-orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <div className="agent-orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '2s'}}>
          <Brain className="h-6 w-6 text-secondary" />
        </div>
        <div className="agent-orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '4s'}}>
          <Target className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-[slide-in-up_1s_ease-out]">
          <h1 className="hero-title">
            Cybersecurity Command Center
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gradient-cyber">
            Orquestrando a Defesa com Agentes de IA Autônomos
          </h2>
          <p className="hero-subtitle max-w-4xl mx-auto">
            Utilizando o poder do CrewAI e da NVIDIA para simular, identificar e relatar 
            vulnerabilidades de forma inteligente e automatizada.
          </p>
          <div className="pt-6">
            <Button className="btn-hero">
              Iniciar Simulação de Segurança
            </Button>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
    </section>
  );
};

export default HeroSection;