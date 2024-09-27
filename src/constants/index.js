import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  spellbinder,
  gearup,
  webscrape,
  threejs,
  ruby,
  heineken,
  glee,
  turing,
  designdata,
  rails,
  postgres,
  postman,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Rails Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "PostGreSQL",
    icon: postgres,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PostMan",
    icon: postman,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "Turing School of Software and Design",
    icon: turing,
    iconBg: "#383E56",
    date: "2023 - January 2024",
    points: [
      "Used Ruby on Rails to create full-stack applications and APIs.",
      "Designed and created APIs with a focus on creating seamless integrations and user experiences.",
      "Independently learned and incorporated additional techs such as GraphQL, Google oAuth, Heroku, CircleCI, Locust, Redis, and Sidekiq.",
    ],
  },
  {
    title: "End User Support Engineer",
    company_name: "designDATA",
    icon: designdata,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Consistently achieved a 95% first-call resolution rate.",
      "Resolved an average of 30 application and systems access issues daily.",
      "Played a key role in reducing the average resolution time by 20% by improving documentation.",
      "Maintained a 98% positive feedback rating from clients.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Glee Co.",
    icon: glee,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Heineken",
    icon: heineken,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Designed web and print assets using Adobe Illustrator, Photoshop, and InDesign",
      "Designed client slides and presentations based on consumer habits and recycling data",
      "Designed interactive, sustainable solutions to boost consumer recycling.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spellbinder",
    description:
      "SpellBinder is a Ruby on Rails app for MTG enthusiasts. It uses the Magic API with Faraday and JSONAPI, features custom endpoints, a Bootstrap frontend with CORS, Google OAuth for secure user authentication, and a scalable database for users and decks.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spellbinder,
    source_code_link: "https://github.com/Spell-Binder-V1/spellbinder_be",
  },
  {
    name: "Gear Up",
    description:
      "Gear Up leverages cloud infrastructure, secure payment APIs, real-time databases, and user authentication to enable artists to create and share projects. It supports multimedia uploads, community interactions, and seamless funding processes, ensuring a scalable and robust platform for creative collaboration.",
    tags: [
      {
        name: "react/rails",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: gearup,
    source_code_link: "https://github.com/orgs/gearup-2305/repositories",
  },
  {
    name: "Web Scraper",
    description:
      "Job Board includes a Ruby web scraper using Selenium, Rails API, and React frontend as Git submodules. It leverages secure APIs, real-time databases, and a modular architecture for scalable job listing collection and display. WIP.",
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: webscrape,
    source_code_link: "https://github.com/MatthewTLim/Job_Board",
  },
];

export { services, technologies, experiences, testimonials, projects };