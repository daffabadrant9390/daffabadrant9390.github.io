import React, { RefObject } from 'react';
import AboutMe from './AboutMe';
import SkillsAndInterests from './SkillsAndInterests';
import Projects from './Projects';
import Collaborations from './Collaborations';

type MainContentProps = {
  aboutMeRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  collaborationsRef: RefObject<HTMLDivElement>;
  isDarkMode: boolean;
};

const MainContent = ({
  aboutMeRef,
  projectsRef,
  collaborationsRef,
  isDarkMode,
}: MainContentProps) => {
  return (
    <main className="bg-white dark:bg-blue-850">
      <AboutMe aboutMeRef={aboutMeRef} />
      <SkillsAndInterests />
      <Projects projectsRef={projectsRef} isDarkMode={isDarkMode} />
      <Collaborations collaborationsRef={collaborationsRef} />
    </main>
  );
};

export default MainContent;
