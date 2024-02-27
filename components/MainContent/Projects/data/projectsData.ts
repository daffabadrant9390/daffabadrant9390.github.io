type ProjectsDataItem = {
  title: string;
  description: string | JSX.Element;
  imageUrl: string;
  linkToProject: string;
  linkToGithub: string;
  projectType: ProjectType;
  images: string[];
};

type ProjectsData = ProjectsDataItem[];
export type ProjectType =
  | 'web-development'
  | 'data-analytics'
  | 'ui-ux-design'
  | 'mobile-app-development';

export const projectsData: ProjectsData = [
  {
    title: 'Airbnb App Next Js',
    description:
      'Nibh egestas sagittis suspendisse aenean. Vulputate amet suscipit vel sollicitudin turpis egestas. Orci maecenas sed morbi aliquet mi posuere nulla lorem. Fames dui sed amet varius dictum eget praesent. Vel eget vivamus in velit tincidunt bibendum nunc.',
    imageUrl: '/assets/bg-project-1.jpg',
    linkToProject: '', //TODO: TBD
    linkToGithub: '', //TODO: TBD
    projectType: 'web-development',
    images: [
      '/assets/bg-project-1.jpg',
      '/assets/bg-project-2.jpg',
      '/assets/bg-project-3.jpg',
      '/assets/bg-project-4.jpg',
    ],
  },
  {
    title: 'Threads Clone Next Js',
    description:
      'Nibh egestas sagittis suspendisse aenean. Vulputate amet suscipit vel sollicitudin turpis egestas. Orci maecenas sed morbi aliquet mi posuere nulla lorem. Fames dui sed amet varius dictum eget praesent. Vel eget vivamus in velit tincidunt bibendum nunc.',
    imageUrl: '/assets/bg-project-2.jpg',
    linkToProject: '', //TODO: TBD
    linkToGithub: '', //TODO: TBD
    projectType: 'mobile-app-development',
    images: [
      '/assets/bg-project-2.jpg',
      '/assets/bg-project-3.jpg',
      '/assets/bg-project-4.jpg',
      '/assets/bg-project-1.jpg',
    ],
  },
  {
    title: 'Trello V2 Clone Next Js and GPT-4',
    description:
      'Nibh egestas sagittis suspendisse aenean. Vulputate amet suscipit vel sollicitudin turpis egestas. Orci maecenas sed morbi aliquet mi posuere nulla lorem. Fames dui sed amet varius dictum eget praesent. Vel eget vivamus in velit tincidunt bibendum nunc.',
    imageUrl: '/assets/bg-project-3.jpg',
    linkToProject: '', //TODO: TBD
    linkToGithub: '', //TODO: TBD
    projectType: 'ui-ux-design',
    images: [
      '/assets/bg-project-3.jpg',
      '/assets/bg-project-2.jpg',
      '/assets/bg-project-1.jpg',
      '/assets/bg-project-4.jpg',
    ],
  },
  {
    title: 'Marketplace Price Tracker Next Js',
    description:
      'Nibh egestas sagittis suspendisse aenean. Vulputate amet suscipit vel sollicitudin turpis egestas. Orci maecenas sed morbi aliquet mi posuere nulla lorem. Fames dui sed amet varius dictum eget praesent. Vel eget vivamus in velit tincidunt bibendum nunc.',
    imageUrl: '/assets/bg-project-4.jpg',
    linkToProject: '', //TODO: TBD
    linkToGithub: '', //TODO: TBD
    projectType: 'data-analytics',
    images: [
      '/assets/bg-project-4.jpg',
      '/assets/bg-project-2.jpg',
      '/assets/bg-project-3.jpg',
      '/assets/bg-project-1.jpg',
    ],
  },
  {
    title: 'Dropbox 2.0 with Next JS',
    description:
      'Nibh egestas sagittis suspendisse aenean. Vulputate amet suscipit vel sollicitudin turpis egestas. Orci maecenas sed morbi aliquet mi posuere nulla lorem. Fames dui sed amet varius dictum eget praesent. Vel eget vivamus in velit tincidunt bibendum nunc.',
    imageUrl: '/assets/bg-project-4.jpg',
    linkToProject: '', //TODO: TBD
    linkToGithub: '', //TODO: TBD
    projectType: 'web-development',
    images: [
      '/assets/bg-project-4.jpg',
      '/assets/bg-project-3.jpg',
      '/assets/bg-project-1.jpg',
      '/assets/bg-project-2.jpg',
    ],
  },
];
