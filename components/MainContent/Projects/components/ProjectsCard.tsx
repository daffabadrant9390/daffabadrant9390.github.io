'use client';

import Button from '@/components/Button';
import { ThemesOption } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faPushed, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectType } from '../data/projectsData';

type ProjectsCardProps = {
  title: string;
  description: string | JSX.Element;
  imageUrl: string;
  linkToGithub: string;
  linkToProject: string;
  projectType: ProjectType;
  theme?: ThemesOption;
};

const ProjectsCard = ({
  title,
  description,
  imageUrl,
  linkToGithub,
  linkToProject,
  projectType,
  theme = 'light',
}: ProjectsCardProps) => {
  return (
    <div className="w-full h-full p-4 lg:p-6 rounded-lg bg-white dark:bg-gray-650 hover:shadow-xl transition-all duration-300 border border-gray-550 dark:border-blue-550">
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="relative flex-shrink-0 w-full h-[240px] shadow-lg">
            <Image
              alt={title}
              src={imageUrl}
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
          <span
            className={`w-fit px-2 py-[2px] lg:px-4 rounded-sm text-body-p5-regular lg:text-body-p4-regular
              ${
                projectType === 'web-development'
                  ? 'bg-red-300 text-red-700 border border-red-800'
                  : projectType === 'data-analytics'
                  ? 'bg-green-300 text-green-700 border border-green-800'
                  : projectType === 'mobile-app-development'
                  ? 'bg-blue-300 text-blue-700 border border-blue-800'
                  : 'bg-purple-300 text-purple-700 border border-purple-800'
              }`}
          >
            {projectType === 'web-development'
              ? 'Web Development'
              : projectType === 'data-analytics'
              ? 'Data Analytics'
              : projectType === 'mobile-app-development'
              ? 'Mobile App Development'
              : 'UI/UX Design'}
          </span>
        </div>

        {/* Title, Description & Buttons */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col mb-5 lg:mb-6 gap-3 lg:gap-4 text-left">
            <h4 className="text-headings-5 lg:text-headings-4 text-blue-850 dark:text-white">
              {title}
            </h4>
            <p className="text-body-p3-regular lg:text-body-p2-regular text-gray-850 dark:text-gray-50">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-start md:flex-row lg:justify-start gap-3 md:gap-4 lg:gap-5">
            <Button
              theme="light"
              size="medium"
              type="primary"
              iconElement={
                <FontAwesomeIcon
                  icon={faPushed}
                  color="white"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              }
              fullWidth={true}
              onClick={() => {
                console.log('REDIRECT TO PROJECT');
                window.open(linkToProject, '_blank');
              }}
            >
              Open Project
            </Button>

            <Button
              theme="light"
              size="medium"
              type={theme === 'light' ? 'secondary' : 'tertiary'}
              iconElement={
                <FontAwesomeIcon
                  icon={faGithub}
                  color="gray"
                  className="w-4 h-4 lg:w-6 lg:h-6"
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
