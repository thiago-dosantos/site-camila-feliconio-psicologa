// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaArrowUp } from 'react-icons/fa';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botão após rolar 300px
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-[#FAF7F3]">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Services />
      <Contact />
      <Footer />
      
      {/* Botão flutuante "Voltar ao topo" */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-[#D9A299] cursor-pointer text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 transform ${
          showScrollButton 
            ? 'opacity-100 translate-y-0 hover:scale-110 hover:shadow-xl' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo da página"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </main>
  );
}