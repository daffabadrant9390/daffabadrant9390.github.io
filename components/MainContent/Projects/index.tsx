import CommonContentLayout from '@/components/CommonContentLayout';
import React from 'react';
import { projectsData } from './data/projectsData';
import ProjectsCard from './components/ProjectsCard';

const Projects = () => {
  return (
    <CommonContentLayout
      title="Latest Projects"
      subtitle="Platea cum diam lobortis sed in. In praesent magnis venenatis non viverra nisi."
      theme="light"
      // backgroundImage={'bg-bg-tree'}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {projectsData.map((projectDataItem, idx) => {
          const { title, description, imageUrl, linkToGithub, linkToProject } =
            projectDataItem;

          return (
            <ProjectsCard
              key={`project-${idx}`}
              title={title}
              description={description}
              imageUrl={imageUrl}
              linkToGithub={linkToGithub}
              linkToProject={linkToProject}
              theme="light" //TODO: Adjust the theme options
            />
          );
        })}
      </div>
    </CommonContentLayout>
  );
};

export default Projects;
