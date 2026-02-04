// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Camila Feliconio - Psicóloga CRP 06/161456',
  description: 'Psicóloga especializada em TCC e Neuropsicologia. Atendimento online para adolescentes, jovens e adultos. Agende sua consulta.',
  keywords: 'psicóloga, terapia online, saúde mental, TCC, neuropsicologia, psicoterapia',
  authors: [{ name: 'Camila Feliconio' }],
  icons: {
    // Configuração completa
    icon: [
      { url: '/logo.jpeg', type: 'image/png' },
    ],
    shortcut: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Força o recarregamento do favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}