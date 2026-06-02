// src/data/skills.js

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaPhp,
  FaVideo,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiTensorflow,
  SiMysql,
  SiLaravel,
  SiBootstrap,
  SiHtml5,
  SiVsco,
  SiCisco,
  SiPytorch,
} from "react-icons/si";

const skills = [  
    {
    name: "Visual Studio Code",
    image: "https://img.icons8.com/color/48/visual-studio-code-2019.png",
    color: "text-cyan-400",
    type: "image",
  },
  {
    name: "Microsoft Office",
    image: "https://img.icons8.com/color/48/microsoft-office-2019.png",
    color: "text-cyan-400",
    type: "image",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
    type: "icon",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    type: "icon",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-blue-500",
    type: "icon",
  },
  {
    name: "Machine Learning",
    icon: SiTensorflow,
    color: "text-orange-500",
    type: "icon",
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    color: "text-pink-500",
    type: "icon",
  },
  {
    name: "NodeJS",
    icon: FaNodeJs,
    color: "text-green-500",
    type: "icon",
  },
  {
    name: "Figma",
    image:
      "https://img.icons8.com/color/96/figma--v1.png",
    type: "image",
  },
  {
    name: "Photoshop",
    image:
      "https://img.icons8.com/color/96/adobe-photoshop--v1.png",
    type: "image",
  },
  {
    name: "Canva",
    image:
      "https://img.icons8.com/fluency/96/canva.png",
    type: "image",
  },
  {
    name: "CapCut",
    icon: FaVideo,
    type: "icon",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "text-indigo-400",
    type: "icon",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-orange-400",
    type: "icon",
  },
  {
    name: "Premiere Pro",
    image:
      "https://img.icons8.com/color/96/adobe-premiere-pro--v1.png",
    type: "image",
  },
  {
    name: "Illustrator",
    image:
      "https://img.icons8.com/color/96/adobe-illustrator--v1.png",
    type: "image",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-orange-400",
    type: "icon",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-orange-400",
    type: "icon",
  },
  {
    name: "Html",
    icon: SiHtml5,
    color: "text-orange-400",
    type: "icon",
  },
  {
    name: "Cisco Packet Tracer",
    icon: SiCisco,
    color: "text-orange-400",
    type: "icon",
  },
  
];

export default skills;