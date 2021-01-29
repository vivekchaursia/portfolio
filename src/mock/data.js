import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vivek Chaurasia', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

export const heroData = {
  title: 'Hi, my name is',
  name: 'Vivek Chaurasia, and',
  subtitle: "I'm a Full Stack .NET Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I\'m a Software Developer/Architect. I’ve been a professional developer for more than 4 years and have mostly worked professionally with ASP.Net MVC with C#, VB, SQL Server sometimes with React JS, Bootstrap as well.',
  paragraphTwo: ['Use the right tool for the job.', 'A programming language is just a tool.', 'Always try to learn something new.'],
  paragraphThree:
    'Besides programming I\'m interested in sports, adventurous activities, online gaming and stock market. I enjoy meeting new people and finding ways to help them have an uplifting experience.',
  resume: '', // if no resume, the button will not show up
};


// CONTACT DATA
export const contactData = {
  cta: 'chaursiavivek@gmail.com',
  btn: 'connect',
  email: 'chaursiavivek@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vivek-chaurasia-071aa4137/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vivekchaursia',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/vivek.chaursia/?igshid=vtzn8u1tgpyz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
