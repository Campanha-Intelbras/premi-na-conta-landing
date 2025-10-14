import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Smartphone, TrendingUp, Clock, Receipt, Users } from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Parcele em até 21x",
    description: "Ofereça mais opções de pagamento para seus clientes",
  },
  {
    icon: Smartphone,
    title: "Cartões e Pix",
    description: "Aceite todas as formas de pagamento em um só lugar",
  },
  {
    icon: Receipt,
    title: "Links de Pagamento",
    description: "Envie cobranças online de forma simples e rápida",
  },
  {
    icon: TrendingUp,
    title: "Cobranças Recorrentes",
    description: "Automatize pagamentos mensais dos seus clientes",
  },
  {
    icon: Clock,
    title: "Receba de 2 a 7 dias",
    description: "Seu dinheiro na conta de forma rápida e segura",
  },
  {
    icon: Users,
    title: "Conta Digital Completa",
    description: "Portabilidade Pix, pagamento de boletos e muito mais",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Solução Tá na Conta
          </h2>
          <p className="text-lg text-muted-foreground">
            Solução completa de pagamento desenvolvida pela Intelbras em parceria com a Cappta.
            Maquininha, portal e conta digital para aumentar seus ganhos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
