import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GamerX - Produtos para Gamers',
  description: 'Descrição do site GamerX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
