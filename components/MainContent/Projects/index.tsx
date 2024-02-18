'use client';

import CommonContentLayout from '@/components/CommonContentLayout';
import React from 'react';
import { projectsData } from './data/projectsData';
import ProjectsCard from './components/ProjectsCard';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const MAX_SHOW_PROJECTS = 4;

const Projects = () => {
  const router = useRouter();

  return (
    <CommonContentLayout
      title="Latest Projects"
      subtitle="Platea cum diam lobortis sed in. In praesent magnis venenatis non viverra nisi."
      theme="light"
      // backgroundImage={'bg-bg-tree'}
    >
      <div className="w-full flex flex-col items-start gap-6 lg:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {projectsData.map((projectDataItem, idx) => {
            const {
              title,
              description,
              imageUrl,
              linkToGithub,
              linkToProject,
              projectType,
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
                theme="light" //TODO: Adjust the theme options
              />
            );
          })}
        </div>

        {projectsData.length > MAX_SHOW_PROJECTS && (
          <button
            className="w-full rounded-md bg-gray-50 py-2 md:py-3 lg:py-4 border-none text-body-p2-semibold lg:text-body-p1-semibold text-gray-850 hover:bg-gray-150 hover:text-black transition-all duration-300"
            onClick={() => router.push('/my-projects')}
          >
            Show all projects
          </button>
        )}
      </div>
    </CommonContentLayout>
  );
};

export default Projects;
