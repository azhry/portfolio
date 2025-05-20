// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'azhry', // Your GitHub username
  },
  base: '/',
  projects: {
    github: {
      display: true,
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
          title: 'Kubernetes Platform Manager',
          description:
            'A backend platform that programmatically manages Kubernetes clusters using the Kubernetes SDK. Features automation for infrastructure and dev operations.',
          imageUrl:
            'https://cdn-icons-png.flaticon.com/512/919/919836.png',
          link: 'https://github.com/azhry', // Replace with actual repo if available
        },
        {
          title: 'React Dashboard for DevOps',
          description:
            'Frontend dashboard built with React to visualize and manage Kubernetes-based applications and infrastructure in real time.',
          imageUrl:
            'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
          link: 'https://github.com/azhry', // Replace with actual repo
        },
      ],
    },
  },
  seo: {
    title: 'Azhary’s Portfolio',
    description:
      'Experienced in Go, C#, React, and Node.js. Building backend platforms and UIs to manage Kubernetes programmatically.',
    imageURL: '',
  },
  social: {
    linkedin: '', // Add your LinkedIn username
    x: '',
    mastodon: '',
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
    website: '',
    phone: '',
    email: '', // Add your email if you'd like
  },
  resume: {
    fileUrl: '', // Optional resume URL
  },
  skills: [
    'Golang',
    'C#',
    'React.js',
    'Node.js',
    'Kubernetes',
    'Docker',
    'Helm',
    'TypeScript',
    'Express.js',
    'Minimal API (.NET)',
    'MongoDB',
    'PostgreSQL',
    'Azure',
    'Git',
    'CI/CD',
    'Microservices',
    'Tailwind CSS',
  ],
  experiences: [
    {
      company: 'Amman',
      position: 'Software Engineer',
      from: '2021',
      to: 'Present',
      companyLink: 'https://amman.co.id',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Universitas Indonesia',
      degree: "Master's in Computer Science",
      from: '2022',
      to: '2025',
    },
    {
      institution: 'Your Undergraduate Institution',
      degree: 'Bachelor’s Degree',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [], // Add if you want to showcase research
  blog: {
    source: '', // dev | medium
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
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'lofi',
      'dracula',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'business',
      'nord',
    ],
    customTheme: {
      primary: '#0ea5e9',
      secondary: '#64748b',
      accent: '#a3e635',
      neutral: '#1e293b',
      'base-100': '#f1f5f9',
      '--rounded-box': '1rem',
      '--rounded-btn': '1.5rem',
    },
  },
  footer: `Built with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> by Azhary`,
  enablePWA: true,
};

export default CONFIG;
