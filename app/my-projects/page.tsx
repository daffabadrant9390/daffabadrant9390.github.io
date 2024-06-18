'use client';

import Button from '@/components/Button';
import ProjectsCard from '@/components/MainContent/Projects/components/ProjectsCard';
import { projectsData } from '@/components/MainContent/Projects/data/projectsData';
import Navbar from '@/components/Navbar';
import { LS_KEYS, QUERY_PARAMS, THEME_OPTIONS } from '@/constants';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const MyProjectsPage = () => {
  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const lsThemeValue =
      localStorage.getItem(LS_KEYS.THEME) || THEME_OPTIONS.DARK;

    setIsDarkMode(lsThemeValue === THEME_OPTIONS.DARK);
  }, []);

  const handleClickBack = () => {
    router.push('/');
  };
  return (
    <div className={`${isDarkMode && 'dark'}`}>
      <Navbar
        menuData={[]}
        isDarkMode={isDarkMode}
        onUpdateDarkModeState={(e: React.ChangeEvent<HTMLInputElement>) => {
          setIsDarkMode(!isDarkMode);

          if (!!e.target.checked) {
            localStorage.setItem(LS_KEYS.THEME, THEME_OPTIONS.DARK);
          } else {
            localStorage.setItem(LS_KEYS.THEME, THEME_OPTIONS.LIGHT);
          }
        }}
      />
      <main>
        <section className="bg-white dark:bg-gray-1150">
          <div className="max-container padding-container py-[20px] lg:py-[40px]">
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Back Button */}
              <Button
                size="medium"
                type="secondary"
                iconElement={
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    color="white"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  />
                }
                customClassName="w-max"
                onClick={handleClickBack}
              >
                Back
              </Button>

              <div className="w-full flex flex-col gap-6 lg:gap-7">
                <h2 className="text-headings-4 lg:text-headings-2 text-gray-850 dark:text-white text-left">
                  All Projects
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
                  {projectsData.map((projectDataItem, idx) => {
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyProjectsPage;
