import {
  mobile,
  backend,
  creator,
  android,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  java,
  tripguide2,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  carrent2,
  jobit,
  tripguide,
  threejs,
  firebase,
  codeway,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name:"Android",
    icon: android,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name:"Python",
    icon: python,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  // {
  //   title: "Full stack developer",
  //   company_name: "Batalks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "November 2024 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Android Developer Intern",
    company_name: "Tefologic",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Jun 2024",
    points: [
      "Contributed to the development of innovative mobile applications, enhancing user experiences by implementing new features.",
      "Applied advanced knowledge in Android development, utilizing Java and XML to optimize app performance.",
      "Integrated new APIs to expand app functionality and ensure seamless operation.",

    ],
  },
  { 
    title: "Android Developer Intern",
    company_name: "Google",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2024 - Jun 2024",
    points: [
      "Engaged in high-impact Android app development projects, collaborating closely with teams to deliver innovative solutions.",
      "Demonstrated strong problem-solving skills and contributed to technical innovations.",
      "Actively participated in continuous learning and development initiatives."
,
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Codeway Solutions",
    icon: codeway,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Apr 2024",
    points: [
      "Contributed to multiple mobile app development projects, actively engaging in code reviews and collaborating effectively with cross-functional teams.",
      "Engaged in continuous learning through training sessions on the latest technologies.",
      "Contributed to innovation and excellence in a dynamic work environment.",
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
    name: "Blood-Donation",
    description:
      "Developed a blood donation app to connect donors and recipients. Implemented features like user registration, blood group matching, profiles.Focused on performance and usability to deliver a seamless experience.",
    tags: [
      {
        name: "android studio",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/chakri6303/Blood_Bank",
  },
  {
    name: "Public News",
    description:
      "Designed and developed a user-friendly news app with XML and Material Design for smooth navigation and reading. Ensured performance optimization for real-time updates and efficient content delivery.",
    tags: [
      {
        name: "android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent2,
    source_code_link: "https://github.com/chakri6303/Public_news_app",
  },
  {
    name: "Mentor Mate",
    description:
      "Developed an Mentor Mate app to streamline communication within educational institutions.This solution improves classroom interactions, enhances engagement, and simplifies management for all users.",
    tags: [
      {
        name: "android studio",
        color: "blue-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/chakri6303/Public_news_app",
  },
  {
    name: "Nike Store",
    description:
      "The Nike Shoe Store project is a modern and responsive web application that showcases a collection of Nike shoes. It allows users to browse different shoe models and view detailed information about each product.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/chakri6303/Nike-store",
  },
  {
    name: "My portifolio",
    description:
      "I built a responsive portfolio website using React.js to showcase my projects, skills, and achievements. This project highlights my expertise in React.js and modern web development practices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide2,
    source_code_link: "https://github.com/chakri6303/Myportfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
