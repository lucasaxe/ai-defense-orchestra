import { Badge } from "@/components/ui/badge";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "NVIDIA",
      logo: "🔬", // Placeholder - in real implementation would be actual logo
      description: "AI Computing Power"
    },
    {
      name: "CrewAI",
      logo: "🤖",
      description: "Multi-Agent Orchestration"
    },
    {
      name: "Docker",
      logo: "🐳",
      description: "Containerized Security Tests"
    },
    {
      name: "Python",
      logo: "🐍",
      description: "Core Development Language"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient-cyber mb-6">
            Construído com Tecnologia de Ponta
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos as melhores ferramentas do mercado para criar uma solução robusta e confiável
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="tech-logo text-center group"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="cyber-card">
                <div className="space-y-4">
                  <div className="text-6xl">{tech.logo}</div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {tech.name}
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {tech.description}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Powered by cutting-edge AI and cloud technologies for maximum security and performance
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;