'use client';
import Button from './Button';
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F3]/80 backdrop-blur-md border-b border-[#F0E4D3]/30">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo substituindo o texto */}
        <div className="flex items-center">
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
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#approach" 
            className="relative group hover:text-[#D9A299] transition py-2 text-gray-700"
          >
            Sobre Mim
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9A299] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            href="#servicos" 
            className="relative group hover:text-[#D9A299] transition py-2 text-gray-700"
          >
            Serviços
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9A299] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            href="#contato" 
            className="relative group hover:text-[#D9A299] transition py-2 text-gray-700"
          >
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9A299] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Button 
            href="https://wa.me/5511987812800?text=Olá! Gostaria de agendar uma consulta"
            className="px-6 py-3"
            showWhatsAppIcon
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </nav>
  );
}