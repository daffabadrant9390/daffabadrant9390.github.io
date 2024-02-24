'use client';

import Button from '@/components/Button';
import CommonContentLayout from '@/components/CommonContentLayout';
import ProjectsCard from '@/components/MainContent/Projects/components/ProjectsCard';
import { projectsData } from '@/components/MainContent/Projects/data/projectsData';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const MyProjectsPage = () => {
  const router = useRouter();
  const handleClickBack = () => {
    // Return back to first page
    router.push('/');
  };
  return (
    <section className="max-container padding-container py-[40px] lg:py-[80px] bg-white">
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Back Button */}
        <Button
          size="large"
          theme="light"
          type="tertiary"
          iconElement={
            <FontAwesomeIcon
              icon={faArrowLeft}
              color="black"
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
          }
          customClassName="w-max"
          onClick={handleClickBack}
        >
          Back
        </Button>

        <div className="w-full flex flex-col gap-6 lg:gap-7">
          <h2 className="text-headings-4 lg:text-headings-2 text-gray-850 text-left">
            All Projects
          </h2>
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
        </div>
      </div>
    </section>
  );
};

export default MyProjectsPage;
