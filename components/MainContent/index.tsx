import React, { RefObject } from 'react';
import AboutMe from './AboutMe';
import SkillsAndInterests from './SkillsAndInterests';
import Projects from './Projects';
import Collaborations from './Collaborations';

type MainContentProps = {
  aboutMeRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  collaborationsRef: RefObject<HTMLDivElement>;
};

const MainContent = ({
  aboutMeRef,
  projectsRef,
  collaborationsRef,
}: MainContentProps) => {
  return (
    <>
      <AboutMe aboutMeRef={aboutMeRef} />
      <SkillsAndInterests />
      <Projects projectsRef={projectsRef} />
      <Collaborations collaborationsRef={collaborationsRef} />
    </>
  );
};

export default MainContent;
