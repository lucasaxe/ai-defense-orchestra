import { Card } from "@/components/ui/card";
import { Users, Zap, Shield, FileText } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Users,
      title: "1. Definição dos Agentes",
      description: "Definimos uma equipe de agentes especializados em segurança, cada um com um papel específico (ex: Analista de SSH, Especialista em Injeção SQL, Redator de Relatórios)."
    },
    {
      icon: Zap,
      title: "2. Orquestração com CrewAI",
      description: "O CrewAI gerencia a colaboração entre os agentes, distribuindo tarefas e garantindo que os testes sejam executados de forma coordenada e eficiente."
    },
    {
      icon: Shield,
      title: "3. Execução dos Testes",
      description: "Os agentes executam uma bateria de testes de vulnerabilidade (baseados no seu Docker), atacando alvos pré-definidos como servidores web e conexões SSH."
    },
    {
      icon: FileText,
      title: "4. Relatório Inteligente",
      description: "Um agente final consolida os resultados, gera um relatório técnico detalhado e prioriza as vulnerabilidades encontradas."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient-nvidia mb-6">
            Nosso Processo em 4 Passos
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma abordagem sistemática e inteligente para descobrir e reportar vulnerabilidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="cyber-card text-center group"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="space-y-6">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center pulse-glow">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;