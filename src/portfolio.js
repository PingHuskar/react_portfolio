const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'CC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chadin Chaipornpisuth',
  role: 'Web Developer | Data Analyst',
  description:
    '',
  resume: 'https://chadinchaipornpisuth.web.app/resume/',
  social: {
    linkedin: 'https://www.linkedin.com/in/chadin-chaipornpisuth-108529112/',
    github: 'https://github.com/PingHuskar',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Meetup',
    description:
      'Create Website contain a form that append data to online database. In index page, fetch data from online database and display. Dynamic page display each data record with 10-15 second delay.',
    stack: ['NextJS', 'MongoDB', 'React'],
    sourceCode: '#',
    livePreview: 'https://nextjs101-pinghuskar.vercel.app/',
  },
  {
    name: 'Youtube Playlist to Web Slideshow',
    description:
      'Copy Element Code from a Youtube Playlist. Extract vid and title, save in .json. Called data using d3.js and show in SlideShow',
    stack: ['D3', 'RegEx', 'JavaScript','CSS'],
    sourceCode: 'https://github.com/PingHuskar/YoutubePlaylist',
    livePreview: 'https://pinghuskar.github.io/YoutubePlaylist/',
  },
  {
    name: 'Faculty Website without Wordpress',
    description:
      'Create Website for Faculty without Wordpress. It\'s difficult time to choose Laravel (PHP) or Django (Python) Framework for Building a few pages of website without any given resource files, instruction, recommendation and requirement from Client (Lecturer).',
    stack: ['Laravel 8', 'Blade', 'Hasta'],
    sourceCode: 'https://github.com/PingHuskar/dsweb002',
    livePreview: 'https://dsweb002.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'D3',
  'Python 3',
  'RegEx',
  'Web Scraping',
  'Data Visualization',
  'Process Automation',
  'Automation Anywhere',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ping47024@gmail.com',
}

export { header, about, projects, skills, contact }
