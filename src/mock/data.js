import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brandon Kiel', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Brandon',
  subtitle: 'I design and develop software.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I approach software development with a business mentality. I am a through-and-through IT business professional, motivated and proven to provide results in any situation.',
  paragraphTwo:
    'I have a demonstrated track record of effectively building complex and scalable business applications using industry standard Agile frameworks like scrum, kanban, and SAFe',
  paragraphThree:
    'I have experience managing and build enterprise applications on all 3 major cloud service providers.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'UFOllow',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Minneanimal/u-follow', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Come At Me Bro',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Minneanimal/come-at-me-bro', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Gimli',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Minneanimal/Gimli', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in connecting? Me too!',
  btn: '',
  email: 'brandonrkiel@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brandon-kiel',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Minneanimal',
    },
  ],
};
