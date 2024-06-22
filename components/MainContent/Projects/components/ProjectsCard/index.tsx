'use client';

import Button from '@/components/Button';
import { ThemesOption } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPushed, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectType, projectsData } from '../../data/projectsData';
import { useState } from 'react';
import SliderImages from './SliderImages';
import Image from 'next/image';
import { ProjectLabel } from './ProjectLabel';

type ProjectsCardProps = {
  title: string;
  description: string | JSX.Element;
  imageUrl: string;
  linkToGithub: string;
  linkToProject: string;
  projectType: ProjectType;
  theme?: ThemesOption;
  images: string[];
};

const ProjectsCard = ({
  title,
  description,
  imageUrl,
  linkToGithub,
  linkToProject,
  projectType,
  theme = 'light',
  images,
}: ProjectsCardProps) => {
  return (
    <div className="w-full h-max rounded-lg bg-white dark:bg-gray-650 hover:shadow-xl transition-all duration-300 border border-gray-550 dark:border-blue-550 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3 h-full">
        {/* Image and Slider */}
        {/* <div className="flex flex-col items-start justify-start gap-3 lg:gap-4">
          <div className="relative flex-shrink-0 w-full md:w-[280px] lg:w-[170px] h-[180px] md:min-h-[180px] lg:min-h-[200px] md:h-full shadow-lg">
            <Image
              alt={`image-project`}
              src={imageUrl}
              fill
              className="rounded-t-md md:rounded-none md:rounded-l-md object-cover object-center"
            />
          </div>
          <div className="px-3 md:hidden">
            <ProjectLabel projectType={projectType} />
          </div>
        </div> */}

        {/* Title, Description & Buttons */}
        <div className="w-full flex flex-col items-start justify-start px-3 pb-4 md:pl-0 md:pt-4 [&>*:not(:last-child)]:mb-3">
          <div className="hidden md:block">
            <ProjectLabel projectType={projectType} />
          </div>
          <div className="flex flex-col mb-2 md:mb-3 text-left">
            <h4 className="text-headings-6 text-blue-850 dark:text-white mb-[4px] md:mb-[8px]">
              {title}
            </h4>
            <p className="text-body-p4-regular lg:text-body-p3-regular text-gray-850 dark:text-gray-50">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-start md:flex-row lg:justify-start gap-2 md:gap-3 w-full">
            <Button
              size="small"
              type="secondary"
              iconElement={
                <FontAwesomeIcon
                  icon={faPushed}
                  color="white"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                />
              }
              fullWidth={true}
              onClick={() => {
                console.log('REDIRECT TO PROJECT');
                window.open(linkToProject, '_blank');
              }}
            >
              Live Demo
            </Button>

            <Button
              size="small"
              type={'tertiary'}
              iconElement={
                <FontAwesomeIcon
                  icon={faGithub}
                  color="white"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                />
              }
              onClick={() => {
                console.log('REDIRECT TO PROJECT');
                window.open(linkToGithub, '_blank');
              }}
              fullWidth={true}
            >
              Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
