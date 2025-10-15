import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Smartphone, DollarSign, Clock, Receipt, Users } from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Parcelamento em até 21x",
    description: "Múltiplos cartões e longo prazo de pagamento",
  },
  {
    icon: Smartphone,
    title: "Cartões, Pix e Links de Pagamento",
    description: "Todas as formas de pagamento em um só lugar",
  },
  {
    icon: Receipt,
    title: "10% + nos serviços",
    description: "Sem desconto de Pis e Confins na Plataforma",
  },
  {
    icon: DollarSign,
    title: "Mais barato que empréstimos",
    description: "Sem perder vendas para concorrência pela demora na aprovação de empréstimos",
  },
  {
    icon: Clock,
    title: "Receba de 2 a 7 dias",
    description: "Dinheiro na conta de forma rápida e segura",
  },
  {
    icon: Users,
    title: "Conta Digital Completa",
    description: "Portabilidade Pix, Multicontas, Multiusuários e muito mais",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Solução Tá na Conta
          </h2>
          <p className="text-lg text-muted-foreground">
            Solução completa de pagamento desenvolvida pela Intelbras em parceria com a Cappta. Maquininha, portal e conta digital para aumentar as vendas e os ganhos das revendas.
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
                  <benefit.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} fill="none" />
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
