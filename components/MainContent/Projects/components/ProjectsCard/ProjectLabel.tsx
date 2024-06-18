import { ProjectType } from '../../data/projectsData';

export const ProjectLabel = ({ projectType }: { projectType: ProjectType }) => {
  return (
    <span
      className={`w-fit px-2 py-[2px] lg:px-4 rounded-sm text-body-p4-regular
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
  );
};
