import { useMemo } from 'react';
import { WorkStatus } from '../data/workExperiencesData';

type WorkExperienceCardProps = {
  companyName: string;
  roleName: string;
  startYear: number | string;
  endYear: number | string;
  techStacks: string[];
  summaries: string[];
  workingStatus: WorkStatus;
};

const WorkExperienceCard = ({
  companyName,
  roleName,
  startYear,
  endYear,
  techStacks,
  summaries,
  workingStatus,
}: WorkExperienceCardProps) => {
  // Generate the tech stacks array of string -> 1 string separated by comma
  const generatedTechStacks = useMemo(() => {
    return techStacks.filter(Boolean).join(', ');
  }, [techStacks]);

  return (
    <div
      className={`w-full sm:max-w-[400px] md:max-w-[420px] p-3 lg:p-4 rounded-md ${
        workingStatus === 'ACTIVE'
          ? 'bg-gray-650'
          : 'bg-gray-100 border border-gray-50'
      } flex flex-col gap-2 hover:shadow-md transition-all duration-300`}
    >
      {/* Company Name, Role Name and Working Year */}
      <div className="w-full flex flex-col gap-1">
        <h5
          className={`text-body-p2-semibold lg:text-body-p1-semibold ${
            workingStatus === 'ACTIVE' ? 'text-white' : 'text-black'
          } w-full text-left`}
        >
          {roleName}
        </h5>
        <div className="flex flex-row items-center justify-start flex-wrap">
          <p
            className={`text-body-p3-semibold lg:text-body-p2-semibold ${
              workingStatus === 'ACTIVE' ? 'text-white' : 'text-gray-850'
            }`}
          >
            {companyName}
            <span
              className={`text-body-p4-regular lg:text-body-p3-regular ${
                workingStatus === 'ACTIVE' ? 'text-gray-50' : 'text-gray-850'
              } ml-[2px] lg:ml-[4px]`}
            >
              {` - (${startYear} - ${endYear})`}
            </span>
          </p>
        </div>
      </div>
      {/* Responsibilities */}
      <ul
        className={`flex flex-col list-disc list-outside ${
          workingStatus === 'ACTIVE'
            ? 'marker:text-white'
            : 'marker:text-gray-850'
        }`}
      >
        <p
          className={`text-body-p4-semibold lg:text-body-p3-semibold ${
            workingStatus === 'ACTIVE' ? 'text-white' : 'text-gray-850'
          } mb-[2px] lg:mb-[4px]`}
        >
          Key Responsibilities :
        </p>
        {summaries.map((summary, idx) => (
          <li
            className={`text-body-p4-regular lg:text-body-p3-regular ml-4 ${
              workingStatus === 'ACTIVE' ? 'text-gray-50' : 'text-gray-850'
            }`}
            key={`work-responsibility-${idx}`}
          >
            {summary}
          </li>
        ))}
      </ul>

      {/* Tech Stacks */}
      <p
        className={`text-body-p4-semibold lg:text-body-p3-semibold ${
          workingStatus === 'ACTIVE' ? 'text-white' : 'text-black'
        }`}
      >
        {`Tech Stacks : `}
        <span
          className={`text-body-p4-regular lg:text-body-p3-regular ${
            workingStatus === 'ACTIVE' ? 'text-gray-50' : 'text-gray-850'
          }`}
        >
          {generatedTechStacks}
        </span>
      </p>
    </div>
  );
};

export default WorkExperienceCard;
