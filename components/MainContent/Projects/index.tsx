'use client';

import CommonContentLayout from '@/components/CommonContentLayout';
import React, { RefObject, useMemo } from 'react';
import { projectsData } from './data/projectsData';
import ProjectsCard from './components/ProjectsCard/ProjectsCard';
import { useRouter } from 'next/navigation';

const MAX_SHOW_PROJECTS = 4;

type ProjectsSectionProps = {
  projectsRef: RefObject<HTMLDivElement>;
  isDarkMode: boolean;
};

const Projects = ({ projectsRef, isDarkMode }: ProjectsSectionProps) => {
  const router = useRouter();

  const finalProjectsData = useMemo(() => {
    if (Array.isArray(projectsData) && !!projectsData.length) {
      return projectsData.slice(0, MAX_SHOW_PROJECTS);
    } else {
      return [];
    }
  }, []);
  return (
    <CommonContentLayout
      title="Latest Projects"
      subtitle="Platea cum diam lobortis sed in. In praesent magnis venenatis non viverra nisi."
      theme="light"
      customRefWrapper={projectsRef}
    >
      <div className="w-full flex flex-col items-start gap-6 lg:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {finalProjectsData.map((projectDataItem, idx) => {
            const {
              title,
              description,
              imageUrl,
              linkToGithub,
              linkToProject,
              projectType,
              images,
            } = projectDataItem;

            return (
              <ProjectsCard
                key={`project-${idx}`}
                title={title}
                description={description}
                imageUrl={imageUrl}
                linkToGithub={linkToGithub}
                linkToProject={linkToProject}
                projectType={projectType}
                theme={!!isDarkMode ? 'dark' : 'light'}
                images={images || []}
              />
            );
          })}
        </div>

        {projectsData.length > MAX_SHOW_PROJECTS && (
          <button
            className="w-full rounded-sm bg-gray-50 dark:bg-gray-300 py-3 lg:py-4 border-none text-body-p2-semibold lg:text-body-p1-semibold text-gray-850 hover:bg-gray-150 dark:hover:bg-gray-400 hover:text-black transition-all duration-300"
            onClick={() => router.push(`/my-projects`)}
          >
            Show all projects
          </button>
        )}
      </div>
    </CommonContentLayout>
  );
};

export default Projects;
