import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'var(--gradient-hero)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Shield 
          className="absolute top-1/4 left-1/4 h-16 w-16 text-primary/20"
          style={{animation: 'float-gentle 4s ease-in-out infinite'}}
        />
        <Zap 
          className="absolute top-3/4 right-1/4 h-12 w-12 text-secondary/20"
          style={{animation: 'float-gentle 4s ease-in-out infinite 2s'}}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div 
          className="space-y-8"
          style={{animation: 'fade-in-up 1s ease-out both'}}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-foreground">Pronto para</span>{" "}
            <span className="text-gradient-nvidia">revolucionar</span>{" "}
            <span className="text-foreground">sua segurança?</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deixe nossa orquestra de IA encontrar suas vulnerabilidades{" "}
            <span className="text-gradient-electric font-semibold">
              antes que outros o façam.
            </span>
          </p>

          <div className="pt-8">
            <Button className="btn-premium group">
              <span className="flex items-center">
                Iniciar Simulação de Segurança Gratuita
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="pt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-muted-foreground"
            style={{animation: 'fade-in-up 1s ease-out 0.3s both'}}
          >
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-primary" />
              <span>100% Seguro e Controlado</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="h-5 w-5 text-secondary" />
              <span>Resultados em 24 Horas</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span>Sem Compromisso</span>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effects */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl opacity-40" />
      </div>
    </section>
  );
};

export default FinalCTA;