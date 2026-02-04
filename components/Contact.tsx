// components/Contact.tsx
import Button from './Button';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaUserCheck, FaCalendarCheck } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone className="w-4 h-4" />,
      title: "Telefone",
      info: "(11) 98781-2800",
      href: "tel:+5511987812800"
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      title: "E-mail",
      info: "contato@camilafeliconiopsicologa.com.br",
      href: "mailto:contato@camilafeliconiopsicologa.com.br"
    },
    {
      icon: <FaGlobe className="w-4 h-4" />,
      title: "Site",
      info: "camilafeliconiopsicologa.com.br",
      href: "https://www.camilafeliconiopsicologa.com.br"
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      title: "Atendimento",
      info: "Online • Brasil e Exterior"
    }
  ];

  return (
    <section id="contato" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Cabeçalho minimalista */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#D9A299]/30"></div>
            <span className="text-sm font-semibold text-[#D9A299] tracking-wider uppercase">
              Contato
            </span>
            <div className="w-12 h-px bg-[#D9A299]/30"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-6">
            Entre em <span className="text-[#D9A299]">Contato</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Estou disponível para esclarecer dúvidas e agendar sua primeira sessão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna 1: Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-8">
                Informações para contato
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F0E4D3] flex items-center justify-center text-[#D9A299]">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-[#2C1810] text-sm mb-1">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-gray-700 hover:text-[#D9A299] transition-colors"
                          target={item.title === "Site" ? "_blank" : undefined}
                          rel={item.title === "Site" ? "noopener noreferrer" : undefined}
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-700">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 2: CTA Agendamento */}
          <div>
            <div className="h-full bg-gradient-to-br from-[#F0E4D3]/30 to-transparent rounded-xl p-8">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-4 text-center">
                    Agende sua avaliação inicial
                  </h3>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-justify">
                      A primeira sessão é um momento para nos conhecermos e entender como posso ajudar no seu processo terapêutico.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-start gap-3">
                        <div className="text-[#D9A299] mt-1">•</div>
                        <p className="text-sm text-justify">Sigilo total e confidencialidade</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-[#D9A299] mt-1">•</div>
                        <p className="text-sm text-justify">Atendimento personalizado e individual</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-[#D9A299] mt-1">•</div>
                        <p className="text-sm text-justify">Flexibilidade de horários e agendamentos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto space-y-4">
                  <div>
                    <Button 
                      href="https://wa.me/5511987812800?text=Olá! Gostaria de agendar uma consulta"
                      className="w-full py-4 justify-center"
                      showWhatsAppIcon
                    >
                      Agendar pelo WhatsApp
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Resposta em até 24 horas úteis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}