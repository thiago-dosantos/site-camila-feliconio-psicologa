// components/Hero.tsx
import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-[5rem] pb-[5rem] md:pt-[3rem] md:pb-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-base font-medium text-gray-600 bg-[#F0E4D3]/50 px-3 py-1.5 rounded-full">
                  CRP 06/161456
                </span>
              </div>
              
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C1810] leading-tight">
                  Investir em si mesmo começa pela{' '}
                  <span className="text-[#D9A299]">saúde emocional!</span>
                </h1>
                <p className="text-gray-600 mt-4 leading-relaxed text-justify">
                  Fortaleça sua jornada de autoconhecimento e transforme seus relacionamentos. Atendimento humanizado com a flexibilidade que você precisa.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">              
              <Button 
                href="https://wa.me/5511987812800?text=Olá! Gostaria de agendar uma consulta"
                className="px-6 py-3"
                showWhatsAppIcon
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#F0E4D3]/15 to-transparent rounded-2xl -z-10"></div>

                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/hero2.jpeg"
                    alt="Camila Feliconio - Psicóloga"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F3]/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F3]/15 via-transparent to-transparent"></div>
                  
                  <div className="absolute inset-0 bg-[#D9A299]/2"></div>
                </div>
              </div>
              
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm max-w-[180px]">
                <div className="text-center">
                  <h3 className="font-semibold text-[#2C1810] text-sm">
                    Camila Feliconio
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Psicóloga
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F0E4D3]/20 rounded-full -z-20 blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#D9A299]/10 rounded-full -z-20 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}