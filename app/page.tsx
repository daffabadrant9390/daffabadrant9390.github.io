'use client';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Navbar from '@/components/Navbar';
import { generateNavbarData } from '@/helpers';
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const homeSectionRef = useRef<HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const myProjectsSectionRef = useRef<HTMLDivElement>(null);
  const collaborationsSectionRef = useRef<HTMLDivElement>(null);

  const generatedNavbarMenuData = useMemo(() => {
    return generateNavbarData({
      homeSectionRef,
      aboutMeSectionRef,
      myProjectsSectionRef,
      collaborationsSectionRef,
    });
  }, [
    homeSectionRef,
    aboutMeSectionRef,
    myProjectsSectionRef,
    collaborationsSectionRef,
  ]);

  return (
    <div className={`${!!isDarkMode && 'dark'}`}>
      <Navbar
        menuData={generatedNavbarMenuData}
        isDarkMode={isDarkMode}
        onUpdateDarkModeState={() => setIsDarkMode(!isDarkMode)}
      />
      <Hero
        heroRef={homeSectionRef}
        aboutMeRef={aboutMeSectionRef}
        collaborationsRef={collaborationsSectionRef}
      />
      <MainContent
        aboutMeRef={aboutMeSectionRef}
        projectsRef={myProjectsSectionRef}
        collaborationsRef={collaborationsSectionRef}
        isDarkMode={isDarkMode}
      />
      <Footer />
    </div>
  );
}
