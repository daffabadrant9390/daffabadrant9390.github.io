import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}
