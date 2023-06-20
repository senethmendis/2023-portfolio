import { BsCameraFill, BsGithub, BsInstagram } from "react-icons/bs";
import {
  FaBezierCurve,
  FaFacebookSquare,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { SiAdobephotoshop, SiYourtraveldottv, SiYoutubemusic } from "react-icons/si";
import {IoGameController} from 'react-icons/io5'

import Dp1 from "../public/profileIcons/d1.jpg";
import Dp2 from "../public/profileIcons/d2.jpg";
import Dp3 from "../public/profileIcons/d3.jpg";
import Dp4 from "../public/profileIcons/d4.jpg";
import Dp5 from "../public/profileIcons/d5.jpg";

import HTML from "../public/logo/html.png";
import CSS from "../public/logo/css.png";
import JS from "../public/logo/javascript.png";
import NODE from "../public/logo/node.png";
import REACT from "../public/logo/react.png";
import NEXT from "../public/logo/nextjs.png";
import TAIL from "../public/logo/tailwind.png";
import BS5 from "../public/logo/bootstrap.png";
import GIT from "../public/logo/github1.png";
import MONGO from "../public/logo/mongo.png";
import MYSQL from "../public/logo/mysql.png";
import THREEJS from "../public/logo/threejs.png";
import JAVALOGO from '../public/logo/java.webp'

import Intellij from "../public/logo/intel.png";
import VSCODE from "../public/logo/vscode.png";
import NET from "../public/logo/netbeans.png";
import Windows from "../public/logo/windows.png";
import Ubuntu from "../public/logo/ubuntu.png";
import Figma from "../public/logo/figma.png";
import Draw from "../public/logo/draw.png";
import Adobe from "../public/logo/adobe.png";

export const NavbarItems = [
  {
    id: 1,
    name: "home",
    link:"#Home"
  },
  {
    id: 2,
    name: "blog",
    link:"#Blog"
  },
  {
    id: 3,
    name: "work",
    link:"#Work"
  },
  {
    id: 4,
    name: "contact",
    link:"#Contact"
  },
  {
    id: 5,
    name: "tech",
    link:"#Tech"
  },
];

export const SocialIcon = [
  {
    id: 1,
    icon: <BsInstagram />,
    profileUrl:
      "https://www.instagram.com/mendis4k/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 2,
    icon: <BsGithub />,
    profileUrl: "https://github.com/wolfy-six",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    profileUrl: "https://www.linkedin.com/in/seneth-mendis-466958198/",
  },
];

export const ExpertList = [
  {
    id: 1,
    name: "UX/UI Design",
    icon: <FaBezierCurve size={60} />,
    dis: "User Friendly creative beautifull interfaces",
  },
  {
    id: 2,
    name: "Web Development",
    icon: <MdWeb size={60} />,
    dis: "Responsive Modern Designs",
  },
  {
    id: 3,
    name: "Creative Design",
    icon: <SiAdobephotoshop size={60} />,
    dis: "Unique Elements and artworks",
  },
  {
    id: 4,
    name: "Research",
    icon: <FaSearch size={60} />,
    dis: "",
  },
];

export const ProjectList = [
  {
    id: 1,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp1,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
  {
    id: 2,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp2,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
  {
    id: 3,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp3,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
  {
    id: 4,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp4,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
  {
    id: 5,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp5,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
  {
    id: 6,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp5,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
  {
    id: 7,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp5,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
  {
    id: 8,
    creator: "Seneth Menidis",
    name: "Three.js portfolio with 3D Elements.",
    projectIcon: Dp5,
    subText: "Created in 2022 Dec",
    langs: ["Next.js | ", "Three.js | ", "TailWind"],
  },
];

export const TechList = [
  {
    id: 1,
    name: "HTML",
    logo: HTML,
  },
  {
    id: 2,
    name: "CSS",
    logo: CSS,
  },
  {
    id: 3,
    name: "Javascript",
    logo: JS,
  },
  {
    id: 4,
    name: "Node.js",
    logo: NODE,
  },
  {
    id: 5,
    name: "React.js",
    logo: REACT,
  },
  {
    id: 6,
    name: "Next.js",
    logo: NEXT,
  },
  {
    id: 7,
    name: "Three.js",
    logo: THREEJS,
  },
  {
    id: 8,
    name: "TailWind",
    logo: TAIL,
  },
  {
    id: 9,
    name: "Bootstrap",
    logo: BS5,
  },
  {
    id: 10,
    name: "JAVA",
    logo: JAVALOGO,
  },
  {
    id: 11,
    name: "MongoDB",
    logo: MONGO,
  },
  {
    id: 12,
    name: "MySQL",
    logo: MYSQL,
  },
  {
    id: 12,
    name: "GitHub",
    logo: GIT,
  },
];

export const ToolsList = [
  {
    id: 1,
    name: "Figma",
    icon: Figma,
  },
  {
    id: 2,
    name: "Draw.io",
    icon: Draw,
  },
  {
    id: 3,
    name: "Adobe XD",
    icon: Adobe,
  },
];

export const ToolsList2 = [
  {
    id: 1,
    name: "Intellij",
    icon: Intellij,
  },
  {
    id: 2,
    name: "Vscode",
    icon: VSCODE,
  },
  {
    id: 3,
    name: "Netbeans",
    icon: NET,
  },
  {
    id: 4,
    name: "Windows",
    icon: Windows,
  },
  {
    id: 5,
    name: "Ubuntu",
    icon: Ubuntu,
  },
];

export const InterestsList = [
  {
    id: 1,
    name: "gaming",
    icon: <IoGameController size={50}/>,
  },

  {
    id: 2,
    name: "travel",
    icon: <SiYourtraveldottv size={50}/>,
  },

  {
    id: 3,
    name: "music",
    icon: <SiYoutubemusic size={50}/>,
  },

  {
    id: 4,
    name: "photography",
    icon: <BsCameraFill size={50}/>,
  },
];
