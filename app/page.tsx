'use client';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Navbar from '@/components/Navbar';
import { LS_KEYS, THEME_OPTIONS } from '@/constants';
import { generateIsDarkModeState, generateNavbarData } from '@/helpers';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const lsThemeValueState =
      localStorage.getItem(LS_KEYS.THEME) || THEME_OPTIONS.DARK;
    console.log('lsThemeValueState: ', lsThemeValueState);
    setIsDarkMode(generateIsDarkModeState({ lsThemeValue: lsThemeValueState }));
  }, []);

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
        onUpdateDarkModeState={(e: React.ChangeEvent<HTMLInputElement>) => {
          setIsDarkMode(!isDarkMode);

          if (!!e.target.checked) {
            localStorage.setItem(LS_KEYS.THEME, THEME_OPTIONS.DARK);
          } else {
            localStorage.setItem(LS_KEYS.THEME, THEME_OPTIONS.LIGHT);
          }
        }}
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
