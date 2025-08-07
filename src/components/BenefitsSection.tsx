import { TrendingDown, Zap, Brain } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Redução Drástica de Custos Operacionais",
      description: "Automatize 80% do trabalho manual de pentesting e libere sua equipe de especialistas para focar em desafios estratégicos, não em tarefas repetitivas.",
      stat: "80%",
      statLabel: "Redução em trabalho manual"
    },
    {
      icon: Zap,
      title: "Velocidade de Detecção 10x Maior",
      description: "Identifique vulnerabilidades em horas, não em semanas. Nossa equipe de IA trabalha 24/7, garantindo que você esteja sempre um passo à frente dos atacantes.",
      stat: "10x",
      statLabel: "Mais rápido na detecção"
    },
    {
      icon: Brain,
      title: "Inteligência, Não Apenas Dados",
      description: "Receba insights claros e priorizados. Saiba exatamente onde focar seus recursos para maximizar o impacto na sua postura de segurança.",
      stat: "95%",
      statLabel: "Redução em falsos positivos"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary)) 0%, transparent 50%), 
                             radial-gradient(circle at 70% 80%, hsl(var(--secondary)) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            O que sua empresa ganha com uma{" "}
            <span className="text-gradient-nvidia">Orquestra de Defesa?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Transforme sua segurança de um centro de custo reativo 
            em uma vantagem competitiva proativa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="text-center">
                <div className="benefit-icon mx-auto">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gradient-nvidia mb-2">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {benefit.statLabel}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
            </div>
          ))}
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-20 text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-foreground mb-6">
              ROI Comprovado em{" "}
              <span className="text-gradient-electric">30 Dias</span>
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clientes relatam economia média de R$ 500.000 anuais em custos de segurança, 
              com detecção 90% mais rápida de vulnerabilidades críticas e redução 
              de 75% no tempo de resposta a incidentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;