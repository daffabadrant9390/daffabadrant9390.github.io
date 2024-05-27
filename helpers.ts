import { RefObject } from 'react';
import { THEME_OPTIONS } from './constants';

export type NavigationDataItem = {
  title: string;
  sectionRef: RefObject<HTMLDivElement | null>;
};

export const generateNavbarData = ({
  homeSectionRef,
  aboutMeSectionRef,
  myProjectsSectionRef,
}: {
  homeSectionRef: RefObject<HTMLDivElement>;
  aboutMeSectionRef: RefObject<HTMLDivElement>;
  myProjectsSectionRef: RefObject<HTMLDivElement>;
}) => {
  const finalResultList = [] as NavigationDataItem[];

  finalResultList.push({
    title: 'Home',
    sectionRef: homeSectionRef,
  });

  finalResultList.push({
    title: 'About Me',
    sectionRef: aboutMeSectionRef,
  });

  finalResultList.push({
    title: 'Projects',
    sectionRef: myProjectsSectionRef,
  });

  return finalResultList;
};

export const generateIsDarkModeState = ({
  lsThemeValue,
}: {
  lsThemeValue: string;
}) => {
  console.log('lsThemeValue: ', lsThemeValue);
  if (!lsThemeValue) return false;

  if (lsThemeValue === THEME_OPTIONS.DARK) return true;
  else return false;
};
