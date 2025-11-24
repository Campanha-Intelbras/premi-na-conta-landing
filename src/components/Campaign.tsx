import { Card, CardContent } from "@/components/ui/card";
import prizeIcon from "@/assets/prize-icon.png";
import posIcon from "@/assets/pos-icon.png";
import { Sun, Target, Calendar, Package } from "lucide-react";

const Campaign = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent leading-tight">
            Conheça o site do produto: www.cappta.com.br/intelbras
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6">
            Comece suas ações de divulgação e tenha em mãos uma ferramenta para o dia a dia da campanha.
          </p>
          <a 
            href="https://www.cappta.com.br/intelbras" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-elegant transition-all duration-300 hover:scale-105">
              Acesse Agora
            </button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Prize Info Card */}
          <Card className="border-0 shadow-elegant" style={{ background: 'linear-gradient(135deg, hsl(156 72% 32%), hsl(156 72% 40%))' }}>
            <CardContent className="p-8 text-primary-foreground">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-foreground/10 rounded-2xl p-2 backdrop-blur-sm">
                  <img src={prizeIcon} alt="Prêmios" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Premiação</h3>
                  <p className="text-primary-foreground/90">Ganhe sobre todas as vendas</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Sun className="w-6 h-6" />
                    <span className="font-semibold text-lg">0,2% em Energia Solar</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80 ml-9">
                    Sobre projetos de energia solar Intelbras (Produtos + Serviços)
                  </p>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-6 h-6" />
                    <span className="font-semibold text-lg">0,1% em Outros Produtos</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80 ml-9">
                    Sobre demais produtos e serviços vendidos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requirements Card */}
          <Card className="border-0 shadow-elegant" style={{ background: 'linear-gradient(135deg, hsl(158 65% 40%), hsl(158 65% 48%))' }}>
            <CardContent className="p-8 text-secondary-foreground">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary-foreground/10 rounded-2xl p-2 backdrop-blur-sm">
                  <img src={posIcon} alt="Requisitos" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Requisitos</h3>
                  <p className="text-secondary-foreground/90">Como participar</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6" />
                    <span className="font-semibold text-lg">Período da Campanha</span>
                  </div>
                  <p className="text-sm text-secondary-foreground/80 ml-9">
                    15/10/2025 a 31/03/2026
                  </p>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-6 h-6" />
                    <span className="font-semibold text-lg">Mínimo para Premiação</span>
                  </div>
                  <p className="text-sm text-secondary-foreground/80 ml-9">
                    R$ 50.000,00 de faturamento da carteira do Participante para emissão do cartão
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="max-w-4xl mx-auto border-primary/20 shadow-elegant">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Detalhes Importantes</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Quem pode participar</span>
                </h4>
                <p className="text-muted-foreground">Vendedores e Parceiros do Distribuidor que auxiliarem na ativação e uso da solução "Tá na Conta" junto às Revendas Intelbras da sua carteira</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Toda a carteira é válida</span>
                </h4>
                <p className="text-muted-foreground">Revendas que já aderiram e possuem maquininha também geram ganhos. Lembre-as de usar e seja premiado por isso</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Forma de pagamento</span>
                </h4>
                <p className="text-muted-foreground">Prêmios pagos via Cartão Prêmio até o 15º dia útil do mês subsequente ao encerramento da Campanha</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Exclusões</span>
                </h4>
                <p className="text-muted-foreground">Não são elegíveis vendas canceladas, devolvidas, estornadas ou fraudulentas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Campaign;
