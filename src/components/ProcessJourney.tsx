import { Users, Zap, Shield, FileText, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const ProcessJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Users,
      title: "Criamos sua Equipe de Elite",
      description: "Nossa plataforma monta uma equipe de agentes de IA sob medida para o seu ambiente. Cada um é um especialista treinado para um propósito: o Analista de Rede, o Perito em Injeção SQL, o Estrategista de Acesso. Eles são a sua equipe dos sonhos, pronta para agir.",
      visual: "team-creation"
    },
    {
      icon: Zap,
      title: "O Maestro entra em Ação",
      description: "Com o poder do CrewAI, os agentes não trabalham isolados. Eles colaboram, compartilham descobertas e constroem uma compreensão coletiva das suas vulnerabilidades. É a diferença entre um músico solo e uma orquestra sinfônica.",
      visual: "orchestration"
    },
    {
      icon: Shield,
      title: "A Simulação de Defesa Começa",
      description: "A orquestra executa milhares de testes de segurança, simulando ataques do mundo real em seus sistemas web e SSH. Tudo acontece de forma segura e controlada dentro de contêineres Docker, sem impactar sua operação.",
      visual: "defense-simulation"
    },
    {
      icon: FileText,
      title: "De Ruído a Relatórios Acionáveis",
      description: "Esqueça os relatórios de 500 páginas que ninguém lê. Um agente redator especializado transforma as descobertas técnicas em um relatório executivo claro, priorizando o que é crítico e sugerindo as correções.",
      visual: "intelligent-reporting"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const stepHeight = windowHeight;
      const currentStep = Math.floor(scrollPosition / stepHeight) - 1;
      setActiveStep(Math.max(0, Math.min(currentStep, steps.length - 1)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* Fixed Title */}
      <div className="pinned-section">
        <div className="w-1/2 pl-16">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient-nvidia mb-8">
            Nossa Orquestra de IA:
          </h3>
          <p className="text-2xl text-gradient-electric">
            Precisão, Coordenação e Inteligência
          </p>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="h-screen flex items-center">
            <div className="w-1/2" /> {/* Empty space for fixed content */}
            <div className="w-1/2 pr-16">
              <div 
                className={`glass-card transition-all duration-700 ${
                  activeStep >= index ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="benefit-icon mr-6">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {index + 1}
                  </div>
                </div>
                
                <h4 className="text-3xl font-bold text-foreground mb-6">
                  {step.title}
                </h4>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Visual Component Based on Step */}
                <div className="mt-8">
                  {step.visual === 'team-creation' && (
                    <div className="flex space-x-4">
                      {['Network', 'SQL', 'SSH', 'Report'].map((agent, i) => (
                        <div 
                          key={agent}
                          className="glass-card p-4 text-center flex-1"
                          style={{animation: `fade-in-up 0.5s ease-out ${i * 0.2}s both`}}
                        >
                          <div className="w-8 h-8 bg-primary/20 rounded-full mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">{agent} Agent</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {step.visual === 'orchestration' && (
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i}
                            className="h-2 bg-primary/30 rounded-full"
                            style={{animation: `pulse-nvidia 1s ease-in-out infinite ${i * 0.2}s`}}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {step.visual === 'defense-simulation' && (
                    <div className="relative">
                      <div className="w-20 h-20 bg-muted/10 rounded-lg mx-auto mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-primary rounded-full"
                            style={{
                              left: `${20 + (i % 3) * 20}%`,
                              top: `${20 + Math.floor(i / 3) * 20}%`,
                              animation: `ping 1s infinite ${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-center text-sm text-muted-foreground">Sistema sob Teste Seguro</p>
                    </div>
                  )}

                  {step.visual === 'intelligent-reporting' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                        <span className="text-sm text-destructive">Crítico</span>
                        <div className="w-16 h-2 bg-destructive/30 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg">
                        <span className="text-sm text-yellow-500">Alto</span>
                        <div className="w-12 h-2 bg-yellow-500/30 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg">
                        <span className="text-sm text-blue-500">Médio</span>
                        <div className="w-8 h-2 bg-blue-500/30 rounded-full" />
                      </div>
                    </div>
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div className="flex items-center mt-8 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    <span className="text-sm">Próximo passo</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessJourney;