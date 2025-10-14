import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, CheckCircle, TrendingUp, Award } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "Cadastre-se",
    description: "Preencha o formulário de adesão à campanha com seus dados",
  },
  {
    icon: CheckCircle,
    number: "2",
    title: "Ative POSs",
    description: "Ative maquininhas Tá na Conta junto às Revendas Intelbras",
  },
  {
    icon: TrendingUp,
    number: "3",
    title: "Acompanhe Vendas",
    description: "Monitore o faturamento elegível durante o período da campanha",
  },
  {
    icon: Award,
    number: "4",
    title: "Receba Prêmios",
    description: "Ganhe seus prêmios via Cartão Prêmio",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como Participar
          </h2>
          <p className="text-lg text-muted-foreground">
            Siga estes passos simples e comece a ganhar prêmios sobre suas vendas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection Line - Hidden on mobile */}
        <div className="hidden lg:block max-w-7xl mx-auto mt-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 -translate-y-1/2" style={{ top: "-7rem" }} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
