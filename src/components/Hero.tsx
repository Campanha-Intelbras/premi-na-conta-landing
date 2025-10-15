import { Button } from "@/components/ui/button";
import heroMachines from "@/assets/hero-machines.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMachines}
          alt="Tá na Conta - Maquininhas de Pagamento"
          className="w-full h-full object-cover blur-md"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-3xl md:text-4xl block mb-2">Campanha</span>
            <span className="text-foreground">"Tá na conta e no cartão!"</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90" style={{ animationDelay: "0.2s" }}>
            Ganhe até <span className="font-bold text-foreground">0,2%</span> sobre as vendas em cartão das suas revendas
          </p>
          <p className="text-sm md:text-base mb-12 animate-fade-in text-foreground font-medium" style={{ animationDelay: "0.4s" }}>
            Parceria Intelbras & Cappta | Período: 15/10/2025 a 31/12/2025
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-xl shadow-glow animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            Participar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
