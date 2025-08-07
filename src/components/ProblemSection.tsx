import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Custos Elevados e Equipes Sobrecarregadas",
      description: "A dificuldade de contratar e manter especialistas em cibersegurança está criando um déficit crítico de talentos, enquanto os custos operacionais disparam."
    },
    {
      icon: AlertTriangle,
      title: "Fadiga de Alertas",
      description: "O volume esmagador de alertas gerados pelas ferramentas tradicionais torna impossível focar no que realmente importa, criando ruído em vez de clareza."
    },
    {
      icon: Clock,
      title: "Janela de Exposição Crítica",
      description: "O tempo que leva para um humano encontrar e corrigir uma vulnerabilidade é tempo demais - atacantes se movem mais rápido que as defesas tradicionais."
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-24 px-6 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 50%, hsl(var(--secondary)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            A cibersegurança tradicional{" "}
            <span className="text-gradient-nvidia">não acompanha</span>{" "}
            a velocidade das ameaças
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Enquanto você luta contra alertas falsos e processos manuais, 
            os atacantes já estão três passos à frente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problems List */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="glass-card group"
                style={{
                  animation: `fade-in-left 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="benefit-icon bg-destructive/10 text-destructive">
                    <problem.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Representation */}
          <div 
            className="problem-visual h-96 flex items-center justify-center"
            style={{animation: 'fade-in-right 0.8s ease-out 0.4s both'}}
          >
            <div className="relative">
              {/* Overwhelmed Analyst */}
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-8">
                <div className="w-12 h-12 rounded-full bg-foreground/20" />
              </div>
              
              {/* Tsunami of Alerts */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-destructive/60 rounded"
                    style={{
                      left: `${(Math.random() - 0.5) * 200}px`,
                      top: `${-Math.random() * 100}px`,
                      animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both, float-gentle 2s ease-in-out infinite ${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Warning Text */}
              <div className="text-center mt-8">
                <p className="text-destructive font-semibold">
                  Sobrecarga de Alertas
                </p>
                <p className="text-muted-foreground text-sm">
                  95% são falsos positivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;