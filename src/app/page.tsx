import { Body } from '@/components/Body';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}
