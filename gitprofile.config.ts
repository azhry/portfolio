// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'azhry', // Your GitHub username
  },
  base: '/portfolio',
  projects: {
    github: {
      display: false,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Lyrid Platform',
          description:
            'Developed multiple services for app.lyrid.io, a serverless platform to deploy and manage cloud-agnostic Kubernetes clusters.',
          imageUrl:
            'https://raw.githubusercontent.com/azhry/azhry/main/assets/lyrid.png',
          link: 'https://app.lyrid.io',
        },
        {
          title: 'Lyrid CLI (LC)',
          description:
            'Contributed to Lyrid CLI, a command-line tool to deploy serverless applications on Lyrid platform.',
          imageUrl:
            'https://raw.githubusercontent.com/azhry/azhry/main/assets/cli.png',
          link: 'https://www.npmjs.com/package/@lyrid/cli',
        },
        {
          title: 'lc-static NPM Package',
          description:
            'Worked on lc-static package to simplify static app deployment in Lyrid ecosystem.',
          imageUrl:
            'https://raw.githubusercontent.com/azhry/azhry/main/assets/lc-static.png',
          link: 'https://www.npmjs.com/package/@lyrid/lc-static',
        },
        {
          title: 'Cluster API on OpenStack',
          description:
            'Built a proof-of-concept using Cluster API for provisioning Kubernetes clusters on Biznet Gio OpenStack infrastructure.',
          imageUrl:
            'https://raw.githubusercontent.com/azhry/azhry/main/assets/openstack.png',
          link: 'https://github.com/azhry/openstack-cluster-api-poc',
        },
        {
          title: 'Oracle Kubernetes Engine SDK (Go)',
          description:
            'Implemented PoC to manage Kubernetes clusters on Oracle Cloud Infrastructure using Go SDK.',
          imageUrl:
            'https://raw.githubusercontent.com/azhry/azhry/main/assets/oke.png',
          link: 'https://github.com/azhry/oracle-kubernetes-sdk-poc',
        },
        {
          title: 'Eventori',
          description:
            'Built the core backend of Eventori, an e-commerce platform for entertainment.',
          imageUrl:
            'https://raw.githubusercontent.com/azhry/azhry/main/assets/eventori.png',
          link: 'https://eventori.id',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Azhary',
    description:
      'I am a software engineer working on Lyrid PaaS with expertise in Go, Kubernetes, and Next.js.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://github.com/azhry',
    phone: '',
    email: 'azhary.arliansyah@gmail.com',
  },
  resume: {
    fileUrl: '', // Add your actual resume URL here if available
  },
  skills: [
    'Go',
    'Kubernetes',
    'Node.js',
    'Next.js',
    'Docker',
    'Git',
    'PostgreSQL',
    'MongoDB',
    'Python',
  ],
  experiences: [
    {
      company: 'Lyrid Inc.',
      position: 'Software Engineer',
      from: '2022',
      to: 'Present',
      companyLink: 'https://lyrid.io',
    },
    {
      company: 'FinAccel',
      position: 'Fullstack Developer',
      from: '2020',
      to: '2022',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of Indonesia',
      degree: "Master's in Computer Science",
      from: '2024',
      to: 'Current',
    },
    {
      institution: 'Sriwijaya University',
      degree: "Bachelor's in Computer Science",
      from: '2014',
      to: '2019',
    },
  ],
  publications: [],
  blog: {
    source: '', // medium | dev
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
