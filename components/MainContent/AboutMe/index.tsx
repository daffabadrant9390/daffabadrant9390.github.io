import CommonContentLayout from '@/components/CommonContentLayout';
import React from 'react';
import WorkExperienceCard from './components/WorkExperienceCard';
import { workExperiencesData } from './data/workExperiencesData';

const AboutMe = () => {
  return (
    <div className="w-full bg-bg-about-me bg-cover bg-no-repeat bg-bottom py-6 lg:py-10">
      <div className="max-container padding-container flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 lg:gap-12 xl:gap-16">
        {/* About Me Title, Subtitle and Description */}
        <div className="w-full flex-1 flex flex-col gap-5 lg:gap-6 items-center text-center lg:items-start md:text-left">
          <div className="w-full flex flex-col gap-2 lg:gap-3">
            <h2 className="text-headings-5 lg:text-headings-2 text-gray-850">
              About Me
            </h2>
            <p className="text-body-p4-regular lg:text-body-p2-regular text-green-750">
              Platea cum diam lobortis sed in. In praesent magnis venenatis non
              viverra nisi.
            </p>
          </div>
          <p className="w-full lg:max-w-[700px] text-body-p3-regular md:text-body-p2-regular lg:text-body-p1-regular text-gray-850">
            Sollicitudin iaculis elit pellentesque blandit ut. Ut tortor duis
            aliquam ultrices cursus. Eget massa netus massa amet feugiat sed
            elementum gravida nisi. Tellus tincidunt fringilla molestie risus id
            commodo adipiscing sapien. Elit ligula maecenas justo nascetur.
            Quisque pharetra eget venenatis eros tortor dictum tellus hendrerit
            ultrices.
          </p>
        </div>

        {/* Working experience Card */}
        <div className="w-full flex-1 flex flex-col items-end justify-center">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            {workExperiencesData.map((workExperienceItem, idx) => {
              const {
                companyName,
                roleName,
                endYear,
                startYear,
                summaries,
                techStacks,
                status,
              } = workExperienceItem;

              return (
                <>
                  <WorkExperienceCard
                    key={`work-experience-${idx}`}
                    companyName={companyName}
                    roleName={roleName}
                    endYear={endYear}
                    startYear={startYear}
                    summaries={summaries}
                    techStacks={techStacks}
                    workingStatus={status}
                  />
                  <div className="vertical-divider" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
