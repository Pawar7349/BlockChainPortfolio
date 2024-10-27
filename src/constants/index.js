import {
  mobile,
  backend,
  creator,
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
  nextjs,
  solidity,
  Krypt,
  SkillSyncImage,
  RealEstate,
  threejs,
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
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "solidity",
    icon: solidity,
  },
];


const projects = [
  {
    name: "Krypt",
    description:
      "A decentralized web-based platform that enables users to send Ethereum transactions securely using MetaMask integration, offering a seamless Web3 experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Krypt, // Make sure to replace with the correct image import
    source_code_link: "https://github.com/Pawar7349/Krypt",
  },
  {
    name: "SkillSync",
    description:
      "A web-based platform similar to Skillshare, designed for sharing, discovering, and managing online courses. It provides an intuitive frontend and robust backend for seamless course management and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: SkillSyncImage, 
    source_code_link: "https://github.com/Pawar7349/SkillSyncBack",
  },
  {
    name: "RealEstate",
    description:
      "A real estate dApp built using blockchain technology.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
    ],
    image: RealEstate,
    source_code_link: "https://github.com/Pawar7349/RealEstate",
  },
];

export { services, technologies, projects };
