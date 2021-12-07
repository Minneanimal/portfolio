import { nanoid } from 'nanoid';
import resume from '../bkiel.pdf';

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
  resume: resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pexels-miriam-espacio-365625.jpg',
    title: 'UFOllow WIP',
    info: 'The idea for this project occured to me after reading a reddit post in which the author was asking if anyone had seen strange lights in the sky at a particular location.',
    info2:
      'The goal of this application is to provide a Waze like experience for folks who see unexplaned lights in the sky.',
    url: '',
    repo: 'https://github.com/Minneanimal/u-follow', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pexels-koolshooters-8544675.jpg',
    title: 'Come At Me Bro WIP',
    info: 'I am a compettive person by nature. The idea of a competitive push-up app came after a friend of mine and gym partner wanted to keep track of who had the highest reps in the gym on that particular day.',
    info2:
      'The goal of this application is to provide the mechanisms to track a timed push-up competion in realtime.',
    url: '',
    repo: 'https://github.com/Minneanimal/come-at-me-bro', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pexels-dnd-dice.jpg',
    title: 'Gimli WIP',
    info: 'The idea of Gimli came about after I discovered the concept of play-by-post role playing games. Prior to popularity of tabletop role playing games like Dungeons and Dragons, folks used to use forum posts a means to play DnD',
    info2:
      'The goal of this app is to take the idea of play-by-post and translate it to a modern web stack.',
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
