const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#00d084] via-[#00a86b] to-[#008f5d] text-primary-foreground py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre o Tá na Conta</h3>
              <p className="text-primary-foreground/80 text-sm">
                Solução completa de pagamento, resultado da parceria Intelbras com a Cappta.
                Maquininha, portal e conta digital para impulsionar distribuidores e revendas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Campanha</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>• Período: 15/10/2025 a 31/12/2025</li>
                <li>• Premiação via Cartão Prêmio</li>
                <li>• Conformidade com LGPD</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Parceiros</h3>
              <div className="space-y-3">
                <p className="text-primary-foreground/80 text-sm">
                  <span className="font-semibold">INTELBRAS S/A</span><br />
                  CNPJ: 82.901.000/0001-27
                </p>
                <p className="text-primary-foreground/80 text-xs">
                  <span className="font-semibold">CAPPTA INSTITUIÇÃO DE PAGAMENTO S.A.</span> - CNPJ: 13.966.572/0001-71
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm text-primary-foreground/70">
              © 2025 Campanha "Tá na conta e no cartão". Intelbras & Cappta. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
