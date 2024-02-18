export type WorkExperiencesItem = {
  companyName: string;
  workingType: 'Full-Time' | 'Internship' | 'Freelance';
  roleName: string;
  startYear: string | number;
  endYear: string | number;
  techStacks: string[];
  summaries: string[];
  status: WorkStatus;
};

export type WorkExperiences = WorkExperiencesItem[];
export type WorkStatus = 'ACTIVE' | 'NON-ACTIVE';

export const workExperiencesData: WorkExperiences = [
  {
    companyName: 'PT. Telkom Indonesia',
    roleName: 'Full Stack Developer',
    workingType: 'Internship',
    startYear: 'Dec 2020',
    endYear: 'Jan 2021',
    techStacks: ['Vanilla Javascript, MySQL, PHP, CodeIgniter 3, Bootstrap 3'],
    summaries: [
      'Nunc sit nisl vulputate semper metus amet.',
      'Commodo odio sit sodales rutrum eget.',
    ],
    status: 'NON-ACTIVE',
  },
  {
    companyName: 'PT. Intermedia Multibahasa Indonesia (LingoTalk)',
    roleName: 'Software Engineer (Front End)',
    workingType: 'Internship',
    startYear: 'Jan 2022',
    endYear: 'May 2022',
    techStacks: ['Vanilla Javascript, Svelte JS, React JS, Figma'],
    summaries: [
      'Nunc sit nisl vulputate semper metus amet.',
      'Commodo odio sit sodales rutrum eget.',
    ],
    status: 'NON-ACTIVE',
  },
  {
    companyName: 'Geulis Indonesia',
    roleName: 'Software Engineer Manager',
    workingType: 'Full-Time',
    startYear: 'Feb 2022',
    endYear: 'Sep 2022',
    techStacks: [
      'Vanilla Javascript',
      'React JS',
      'Figma',
      'Tailwind CSS',
      'Mongo DB',
    ],
    summaries: [
      'Nunc sit nisl vulputate semper metus amet.',
      'Commodo odio sit sodales rutrum eget.',
    ],
    status: 'NON-ACTIVE',
  },
  {
    companyName: 'PT. Global Tiket Network',
    roleName: 'Software Engineer (Front End)',
    workingType: 'Full-Time',
    startYear: 'May 2022',
    endYear: 'Present',
    techStacks: [
      'Vanilla Javascript',
      'React JS',
      'Next JS',
      'Typescript',
      'GraphQL',
      'SASS',
      'Mongo DB',
    ],
    summaries: [
      'Nunc sit nisl vulputate semper metus amet.',
      'Commodo odio sit sodales rutrum eget.',
    ],
    status: 'ACTIVE',
  },
];
