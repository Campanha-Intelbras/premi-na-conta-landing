import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

const FormSection = () => {
  return (
    <section id="form-section" className="py-20 scroll-mt-16">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Inscreva-se Agora
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Preencha o formulário abaixo para participar da Campanha "Tá na conta e no cartão".
            Leia atentamente o termo de adesão antes de se inscrever.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-primary/20 shadow-elegant mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 bg-muted/50 rounded-lg p-6">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Termo de Adesão</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Antes de se inscrever, é importante ler e compreender todos os termos e condições da campanha.
                  O termo de adesão contém informações detalhadas sobre elegibilidade, critérios de apuração,
                  premiação e condições gerais.
                </p>
                <a
                  href="/termo-de-adesao.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <CardContent className="p-8">
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg p-8 min-h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Formulário do Google</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Incorpore aqui o iframe do formulário do Google Forms para capturar os dados dos participantes.
                </p>
                <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-left max-w-md mx-auto">
                  <p className="font-mono text-xs text-muted-foreground">
                    {`<iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" width="100%" height="600" frameborder="0">Carregando…</iframe>`}
                  </p>
                </div>
              </div>
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
