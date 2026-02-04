// components/Approach.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaGraduationCap, FaBrain } from 'react-icons/fa';

export default function Approach() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const formationTopics = [
    {
      id: 1,
      title: "Formação",
      description: "Graduada em psicologia desde 2006 pela Universidade Presbiteriana Mackenzie-SP"
    },
    {
      id: 2,
      title: "Especialização",
      description: "Especialização em TCC (Terapia Cognitivo-Comportamental) e Neuropsicologia"
    },
    {
      id: 3,
      title: "Aperfeiçoamento",
      description: "Curso de Saúde Mental no Instituto A Casa (SP) e Hospital Albert Einstein (SP)"
    }
  ];

  const approachTopics = [
    {
      id: 4,
      title: "Base Científica",
      description: "Trabalho com base na Terapia Cognitivo-Comportamental (TCC), uma abordagem com comprovada eficácia científica, focada no presente e orientada para soluções."
    },
    {
      id: 5,
      title: "Individualidade",
      description: "Cada pessoa é única. Adapto as técnicas e ferramentas de acordo com suas necessidades específicas, história de vida e objetivos pessoais."
    },
    {
      id: 6,
      title: "Ética e Sigilo",
      description: "Todo o processo é conduzido com absoluto respeito ético e sigilo total, garantindo um ambiente de confiança e segurança."
    }
  ];

  return (
    <section id="approach" className="py-16 px-4 bg-[#F0E4D3]/20">
      <div className="container mx-auto max-w-6xl">
        {/* Cabeçalho centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
            Minha <span className="text-[#D9A299]">Formação</span> e <span className="text-[#D9A299]">Abordagem</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Combino formação acadêmica sólida com abordagens terapêuticas baseadas em evidências científicas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Coluna 1: Formação Acadêmica */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#2C1810] flex items-center gap-2">
              <FaBrain className="text-[#D9A299]" />
              Abordagem Terapêutica
            </h3>
            
            <div className="space-y-6">
              {formationTopics.map((topic) => (
                <div 
                  key={topic.id}
                  className="relative pl-6 group"
                  onMouseEnter={() => setHoveredItem(topic.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Barra vertical - base cinza */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300/50 rounded-full overflow-hidden">
                    {/* Barra que acende com a cor do título */}
                    <div 
                      className={`absolute inset-0 bg-[#D9A299] transition-all duration-300 ${
                        hoveredItem === topic.id 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-full opacity-0'
                      }`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      hoveredItem === topic.id ? 'text-[#D9A299]' : 'text-[#2C1810]'
                    }`}>
                      {topic.title}
                    </h4>
                    <p className="text-gray-700 text-sm text-justify">
                      {topic.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Foto (coluna do meio) */}
          <div className="flex justify-center items-start">
            <div className="relative w-full max-w-xs">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#F0E4D3]/10 to-transparent rounded-xl -z-10"></div>

                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/hero1.jpeg"
                    alt="Camila Feliconio - Psicóloga Especializada"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 80vw, 30vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F3]/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F3]/10 via-transparent to-transparent"></div>
                  
                  <div className="absolute inset-0 bg-[#D9A299]/2"></div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#F0E4D3]/20 rounded-full -z-20 blur-sm"></div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-[#D9A299]/10 rounded-full -z-20 blur-sm"></div>
            </div>
          </div>

          {/* Coluna 3: Abordagem Terapêutica */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#2C1810] flex items-center gap-2">
              <FaGraduationCap className="text-[#D9A299]" />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-6">
              {approachTopics.map((topic) => (
                <div 
                  key={topic.id}
                  className="relative pl-6 group"
                  onMouseEnter={() => setHoveredItem(topic.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Barra vertical - base cinza */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300/50 rounded-full overflow-hidden">
                    {/* Barra que acende com a cor do título */}
                    <div 
                      className={`absolute inset-0 bg-[#D9A299] transition-all duration-300 ${
                        hoveredItem === topic.id 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-full opacity-0'
                      }`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      hoveredItem === topic.id ? 'text-[#D9A299]' : 'text-[#2C1810]'
                    }`}>
                      {topic.title}
                    </h4>
                    <p className="text-gray-700 text-sm text-justify">
                      {topic.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé da seção */}
        <div className="mt-12 pt-8 border-t border-[#F0E4D3] text-center">
          <p className="text-gray-600 italic max-w-2xl mx-auto text-center">
            "Integro conhecimento científico atualizado com uma escuta atenta e personalizada para cada paciente"
          </p>
        </div>
      </div>
    </section>
  );
}