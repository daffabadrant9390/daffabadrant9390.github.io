'use client';

import Button from '@/components/Button';
import { ThemesOption } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faPushed, faGithub } from '@fortawesome/free-brands-svg-icons';

type ProjectsCardProps = {
  title: string;
  description: string | JSX.Element;
  imageUrl: string;
  linkToGithub: string;
  linkToProject: string;
  theme?: ThemesOption;
};

const ProjectsCard = ({
  title,
  description,
  imageUrl,
  linkToGithub,
  linkToProject,
  theme = 'light',
}: ProjectsCardProps) => {
  return (
    <div className="w-full h-full p-4 lg:p-6 rounded-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-550">
      <div className="flex flex-col [&>*:not(:last-child)]:mb-5 [&>*:not(:last-child)]:lg:mb-7">
        <div className="relative flex-shrink-0 w-full h-[240px] shadow-lg">
          <Image
            alt={title}
            src={imageUrl}
            fill
            className="rounded-md object-cover object-center"
          />
        </div>

        {/* Title, Description & Buttons */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col mb-5 lg:mb-6 [&>*:not(:last-child)]:mb-3 [&>*:not(:last-child)]:lg:mb-4 text-left">
            <h4 className="text-headings-5 lg:text-headings-4 text-blue-850">
              {title}
            </h4>
            <p className="text-body-p3-regular lg:text-body-p2-regular text-gray-850">
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
                  color="gray"
                  className="w-3 h-3 lg:w-5 lg:h-5"
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
              type="secondary"
              iconElement={
                <FontAwesomeIcon
                  icon={faGithub}
                  color="gray"
                  className="w-3 h-3 lg:w-5 lg:h-5"
                />
              }
              onClick={() => {
                console.log('REDIRECT TO PROJECT');
                window.open(linkToProject, '_blank');
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
