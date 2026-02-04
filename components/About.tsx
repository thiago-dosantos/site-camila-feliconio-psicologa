// components/About.tsx
import Button from './Button';

export default function About() {
  return (
    <section id="sobre" className="py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Cabeçalho minimalista */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#D9A299]/30"></div>
            <span className="text-sm font-semibold text-[#D9A299] tracking-wider uppercase">
              O Espaço
            </span>
            <div className="w-12 h-px bg-[#D9A299]/30"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-6">
            Sobre a <span className="text-[#D9A299]">Terapia</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Um ambiente seguro e sigiloso para seu crescimento emocional
          </p>
        </div>
        
        {/* Conteúdo em duas colunas para desktop */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Coluna esquerda - texto principal */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              A terapia é um espaço <span className="font-semibold text-[#D9A299]">protegido e seguro</span>, onde você pode falar sobre o que sente sem medo de julgamentos ou recomendações imediatistas.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-justify">
              É um ambiente para entender de onde vêm seus desafios, identificar padrões repetitivos e experimentar novas formas de lidar com eles.
            </p>
          </div>
          
          {/* Coluna direita - texto complementar */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              Mesmo quem já se sente "bem" pode se beneficiar da terapia para crescer emocionalmente, se preparar para mudanças e fortalecer seu autoconhecimento em uma ação preventiva com enorme impacto.
            </p>
            
            <div className="pt-4 mt-4 border-t border-[#F0E4D3]">
              <p className="text-gray-700 italic mb-6 text-center">
                "A terapia é um investimento em você mesmo - um caminho para uma vida mais equilibrada e significativa."
              </p>
              
              <Button 
                href="https://wa.me/5511987812800?text=Olá! Gostaria de agendar uma consulta"
                className="px-6 py-3"
                showWhatsAppIcon
              >
                Conversar sobre Terapia
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divisor decorativo */}
        <div className="mt-12 pt-8 border-t border-[#F0E4D3]">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#D9A299]">Protegido</div>
              <p className="text-sm text-gray-600">Ambiente seguro e confidencial</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#D9A299]">Personalizado</div>
              <p className="text-sm text-gray-600">Abordagem adaptada à sua necessidade</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#D9A299]">Transformador</div>
              <p className="text-sm text-gray-600">Crescimento emocional contínuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}