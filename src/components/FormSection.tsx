import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

const FormSection = () => {
  return (
    <section id="form-section" className="py-20 scroll-mt-16">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-primary bg-clip-text text-transparent">
            Inscreva-se agora!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Confira o termo de adesão da campanha e preencha o formulário para participar.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-primary/20 shadow-elegant mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 bg-muted/50 rounded-lg p-6">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Termo de Adesão</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  O termo de adesão contém informações detalhadas sobre elegibilidade, critérios de apuração,
                  premiação e condições gerais.
                </p>
                <a
                  href="/termo-de-adesao.pdf"
                  download="Termo-de-Adesao-Ta-na-Conta.pdf"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                >
                  Baixar Termo de Adesão (PDF)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-4xl mx-auto border-primary/20 shadow-elegant animate-fade-in">
          <CardContent className="p-4 md:p-8">
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdCnVvR9BsbFu4SxhkLce_rHuDjlRbbGzqQdfWef-gfIo__lg/viewform?embedded=true" 
                width="100%" 
                height="1000" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full"
              >
                Carregando…
              </iframe>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Ao preencher o formulário, você concorda com os termos e condições da Campanha "Tá na conta e no cartão".
            Seus dados serão tratados de acordo com a LGPD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
