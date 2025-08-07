import { useState } from "react";
import { Cpu, Bot, Container, Code } from "lucide-react";

const TechOrchestra = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      id: "nvidia",
      name: "NVIDIA",
      icon: Cpu,
      description: "Poder de processamento AI de última geração para análise em tempo real",
      position: { top: "20%", right: "20%" },
      color: "nvidia"
    },
    {
      id: "crewai",
      name: "CrewAI",
      icon: Bot,
      description: "Orquestra a colaboração inteligente entre nossos agentes especializados",
      position: { bottom: "30%", right: "15%" },
      color: "electric"
    },
    {
      id: "docker",
      name: "Docker",
      icon: Container,
      description: "Ambiente seguro e isolado para execução de testes de penetração",
      position: { bottom: "20%", left: "20%" },
      color: "nvidia"
    },
    {
      id: "python",
      name: "Python",
      icon: Code,
      description: "Linguagem principal para desenvolvimento de agentes e automação",
      position: { top: "30%", left: "15%" },
      color: "electric"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Orbital Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-primary/10"
          style={{
            transform: 'translate(-50%, -50%)',
            background: 'var(--gradient-orbital)',
            animation: 'orbital-rotate 20s linear infinite'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-secondary/10"
          style={{
            transform: 'translate(-50%, -50%)',
            background: 'var(--gradient-orbital)',
            animation: 'orbital-rotate 15s linear infinite reverse'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Construído sobre uma{" "}
            <span className="text-gradient-nvidia">Fundação de Inovação</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada tecnologia foi escolhida para criar a sinergia perfeita 
            entre inteligência artificial e segurança cibernética.
          </p>
        </div>

        {/* Central NVIDIA Core */}
        <div className="relative tech-orbit-container mx-auto">
          <div className="tech-center">
            <Cpu className="h-12 w-12 text-primary-foreground" />
          </div>

          {/* Orbital Technologies */}
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="tech-orbital"
              style={{
                ...tech.position,
                animation: `orbital-rotate ${10 + tech.id.length}s linear infinite ${tech.id === 'nvidia' ? 'reverse' : ''}`
              }}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <tech.icon className="h-8 w-8 text-foreground" />
            </div>
          ))}

          {/* Technology Info Panel */}
          {hoveredTech && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 w-80">
              {technologies
                .filter(tech => tech.id === hoveredTech)
                .map(tech => (
                  <div
                    key={tech.id}
                    className="glass-card text-center"
                    style={{animation: 'fade-in-up 0.3s ease-out'}}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <tech.icon className="h-8 w-8 text-primary mr-3" />
                      <h4 className="text-2xl font-bold text-foreground">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Technology Showcase */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className="glass-card text-center group cursor-pointer h-32 flex flex-col justify-center"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
              }}
              onMouseEnter={() => setHoveredTech(tech.id)}
            >
              <tech.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h5 className="text-lg font-semibold text-foreground">
                {tech.name}
              </h5>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by cutting-edge AI and cloud technologies for maximum security, 
            scalability, and performance in the modern threat landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechOrchestra;