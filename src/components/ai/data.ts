type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
};

type FullName = {
  firstName: string;
  lastName: string;
};

export type PortfolioData = {
  fullName: FullName;
  about: string;
  location: string;
  age: string;
  school: string;
  skills: string[];
  projects: Project[];
  experiences: Experience[];
};

export const MyPortfolioData: PortfolioData = {
  fullName: {
    firstName: "Ezekiel",
    lastName: "Salazar",
  },
  about: "A web developer with background with node.js and express.js also using figma and github.",
  location: "Mandaluyong City",
  age: "24 Years old",
  skills: ["HTML, CSS, React, Next.Js, Javascript, TypeScript, Node.Js, Express.Js"],
  school: "Rizal Technological University",
  projects: [
    {
      title: "My Portfolio",
      description: "My Personal Portfolio",
      technologies: ["HTML, CSS, React, Next.Js, TypeScript, Node.Js"],
      link: "https://ezekiel-portfolio17.netlify.app/",
    },
  ],
  experiences: [
    {
      company: "Cornersteel Systems Corporation",
      role: "Web Developer",
      period: "2024 - 2026",
    },
  ],
};
