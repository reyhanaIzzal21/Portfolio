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
  git,
  figma,
  hummatech,
  bootstrap,
  laravel,
  mysql,
  php,
  canva,
  zentify,
  mycourse,
  getskill,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const tecnologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "PT Humma teknologi Indonesia",
    icon: hummatech,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Assisting in website development using the Laravel framework based on project requirements.",
      "Collaborating with the team to complete web development tasks efficiently and on time.",
      "Performing debugging and fixing issues in the web applications.",
      "Ensuring the produced code meets standards and is easy for the team to understand.",
    ],
  },
];

// const techUsed = [
//   {
//     techUsed:
//       "REACT JS.REACT JS.REACT JS.REACT JS.REACT JS.REACT JS.REACT JS.REACT JS.REACT JS.REACT JS",
//   },
//   {
//     techUsed:
//       "TAILWIND.TAILWIND.TAILWIND.TAILWIND.TAILWIND.TAILWIND.TAILWIND.TAILWIND.TAILWIND",
//   },
//   {
//     techUsed:
//       "GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP.GSAP",
//   },
// ];

const projects = [
  {
    name: "ZENTIFY",
    description:
      "A simple music streaming website for everyone, offering a Spotify-like experience with more minimalist and user-friendly features.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: zentify,
    source_code_link: "https://github.com/reyhanaIzzal21/Zentify",
  },
  {
    name: "MYCOURSE",
    description:
      "An E-Learning platform offering digital technology courses, including web development, blockchain, and more, with subscription packages for premium access.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mycourse,
    source_code_link: "https://github.com/ReyhanRefalda/my-course",
  },
  {
    name: "GETSKILL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis enim quisquam vero alias pariatur non? Deleniti sapiente sit, voluptate eligendi quis nemo.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "AJAX",
        color: "yellow-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: getskill,
    source_code_link: "https://github.com/ReyhanRefalda/my-course",
  },
];

export { services, tecnologies, experiences, projects };
