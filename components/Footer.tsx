// components/Footer.tsx

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C1810] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Informações principais */}
          <div className="text-left">
            <div className="relative w-40 h-26">
              <Image
                src="/logonav.png"
                alt="Camila Feliconio Psicóloga"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
            <p className="text-[#D9A299] font-medium mb-3">
              Psicóloga CRP 06/161456
            </p>
            <p className="text-gray-300 text-sm max-w-xs">
              Cuidando da sua saúde emocional com profissionalismo e acolhimento.
            </p>
          </div>
          
          {/* Informações de direitos - alinhada à direita e mais para baixo */}
          <div className="flex flex-col justify-end items-start md:items-end text-left md:text-right">
            <div className="mt-auto space-y-2">
              <p className="text-sm text-gray-400">
                © {currentYear} Camila Feliconio Psicóloga
              </p>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">
                  Todos os direitos reservados
                </p>
                <p className="text-sm text-gray-400">
                  Atendimento online • Brasil e exterior
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}