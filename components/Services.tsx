// components/Services.tsx
import Button from './Button';
import { 
  FaHeart, 
  FaBrain, 
  FaUsers, 
  FaCheckCircle, 
  FaLeaf, 
  FaHandsHelping,
  FaBalanceScale,
  FaSun,
  FaCloud,
  FaHeartbeat,
  FaHeadSideVirus,
  FaUserFriends,
  FaRegSmile,
  FaLightbulb
} from 'react-icons/fa';
import { GiBrain, GiHealing } from 'react-icons/gi';
import { MdPsychology, MdSelfImprovement } from 'react-icons/md';

export default function Services() {
  const signs = [
    { icon: <FaCloud className="w-5 h-5" />, text: "Tristeza ou ansiedade persistentes" },
    { icon: <FaHeartbeat className="w-5 h-5" />, text: "Dificuldade para lidar com emoções" },
    { icon: <FaUserFriends className="w-5 h-5" />, text: "Problemas em relações importantes" },
    { icon: <FaRegSmile className="w-5 h-5" />, text: "Perda de interesse em atividades" },
    { icon: <FaHeadSideVirus className="w-5 h-5" />, text: "Sintomas físicos sem causa médica" },
    { icon: <FaLightbulb className="w-5 h-5" />, text: "Pensamentos repetitivos ou auto críticos" },
    { icon: <FaBalanceScale className="w-5 h-5" />, text: "Queda no desempenho por questões emocionais" },
    { icon: <GiHealing className="w-5 h-5" />, text: "Sensação de vazio ou falta de sentido" },
    { icon: <FaHandsHelping className="w-5 h-5" />, text: "Ações impulsivas ou autodestrutivas" }
  ];

  const objectives = [
    { 
      icon: <GiBrain className="w-8 h-8" />, 
      title: "Autoconhecimento", 
      description: "Compreender suas emoções e padrões de comportamento",
      color: "from-[#D9A299] to-[#DCC5B2]"
    },
    { 
      icon: <FaHeart className="w-8 h-8" />, 
      title: "Autoestima", 
      description: "Fortalecer sua confiança e amor próprio",
      color: "from-[#DCC5B2] to-[#F0E4D3]"
    },
    { 
      icon: <FaUsers className="w-8 h-8" />, 
      title: "Relacionamentos", 
      description: "Melhorar relações consigo mesmo e com os outros",
      color: "from-[#F0E4D3] to-[#D9A299]/20"
    },
    { 
      icon: <FaCheckCircle className="w-8 h-8" />, 
      title: "Resolução", 
      description: "Desenvolver habilidades para enfrentar desafios",
      color: "from-[#D9A299]/30 to-[#DCC5B2]/30"
    },
  ];

  return (
    <section id="servicos" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header minimalista */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D9A299]/30"></div>
            <span className="text-sm font-semibold text-[#D9A299] tracking-wider uppercase">
              Quando Buscar Ajuda
            </span>
            <div className="w-8 h-px bg-[#D9A299]/30"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-6">
            Sinais para <span className="text-[#D9A299]">Iniciar a Terapia</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Reconhecer estes sinais é o primeiro passo para cuidar da sua saúde emocional
          </p>
        </div>

        {/* Grid de Sinais em Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {signs.map((sign, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#F0E4D3]/50 hover:border-[#D9A299]/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F0E4D3] flex items-center justify-center text-[#D9A299] group-hover:bg-[#D9A299] group-hover:text-white transition-colors duration-300">
                  {sign.icon}
                </div>
                <p className="text-gray-700 flex-1 text-justify">{sign.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-center">
            Se identificou com algum desses sinais? Pode ser o momento ideal para buscar apoio psicológico.
          </p>
          <Button 
            href="https://wa.me/5511987812800?text=Olá! Gostaria de agendar uma consulta"
            className="px-8 py-4"
            showWhatsAppIcon
          >
            Agendar Avaliação
          </Button>
        </div>

        {/* Divisor */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#F0E4D3]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-sm text-[#D9A299] font-medium">
              Benefícios da Terapia
            </span>
          </div>
        </div>

        {/* Objetivos da Terapia */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C1810] mb-4">
              O que você pode <span className="text-[#D9A299]">alcançar</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Através do processo terapêutico, é possível desenvolver habilidades e recursos emocionais valiosos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#F0E4D3]/50"
              >
                {/* Background gradiente sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${obj.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-[#D9A299] mb-4">
                    {obj.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#2C1810] mb-3 text-center">
                    {obj.title}
                  </h4>
                  <p className="text-gray-700 text-sm text-justify">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reflexão Final */}
        <div className="bg-gradient-to-r from-[#F0E4D3]/30 to-[#DCC5B2]/20 rounded-2xl p-8 md:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-[#2C1810] mb-6">
              Por que buscar terapia mesmo sem uma crise evidente?
            </h4>
            
            <div className="space-y-4 text-gray-700 text-lg">
              <p className="text-justify">
                Muitas crises emocionais não são visíveis externamente. Elas podem surgir silenciosamente através do acúmulo de pequenas tensões, desgastes emocionais e insatisfações que minam nosso bem-estar ao longo do tempo.
              </p>
              
              <p className="italic text-[#D9A299] font-medium text-center">
                A terapia é um espaço protegido onde você pode crescer emocionalmente, se preparar para mudanças e fortalecer seu autoconhecimento - mesmo quando já se sente "bem".
              </p>
              
              <p className="text-sm text-gray-600 mt-6 text-center">
                É um investimento preventivo na sua saúde mental e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}