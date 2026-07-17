import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiRedux,
  SiTypescript,
  SiMui,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
  SiDjango,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  {
  
    items: [
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Material UI", icon: SiMui },
      { name: "Redux Toolkit", icon: SiRedux },
    ],
  },

  {
    
    items: [
      { name: "Django", icon: SiDjango },
      { name: "REST APIs", icon: TbApi },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
    
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vite", icon: SiVite },
    ],
  },

 
];

export default skills;
