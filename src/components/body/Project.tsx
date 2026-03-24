import Image from "next/image";
import Folders from "@/src/assets/folders.svg";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

type TProject = {
  title: string;
  description: string;
  url: string;
};

export default function Project() {
  const projects: TProject[] = [
    {
      title: "My Portfolio",
      description: "My personal portfolio built with Next.js, Tailwind CSS, and TypeScript.",
      url: "https://ezekiel-latest-portfolio.vercel.app/",
    },
    {
      title: "Nos Ludere Ut (NLU)",
      description:
        "A community that was made by women that ensures a safe space for individuals in different categories in Call of Duty (Mobile)",
      url: "https://nlu-two.vercel.app/",
    },
  ];
  return (
    <BlurFade
      inView
      delay={0.4}
      offset={10}
      blur="10px"
    >
      <div className="bg-background dark:bg-primary-foreground flex flex-col w-full gap-6 p-6 md:p-8 rounded-md shadow-md border border-[#f1f1f1] dark:border-accent">
        <div className="flex flex-row w-full h-full gap-2 align-start">
          <Image
            src={Folders}
            alt="Project Icon"
            width={24}
            height={24}
            className="dark:invert"
          />
          <h1 className="text-2xl font-bold">Recent Projects</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="p-4 rounded-md w-full h-full flex flex-col justify-between gap-4 bg-[#f1f1f1] dark:bg-background border border-neutral-300 dark:border-neutral-700"
              >
                <div>
                  <h1 className="font-bold text-xl tracking-tight text-foreground dark:text-foreground">
                    {project.title}
                  </h1>
                  <p className="break-normal tracking-normal text-neutral-700 dark:invert">{project.description}</p>
                </div>

                <Button
                  asChild
                  className="bg-foreground w-fit dark:bg-primary-background dark:bg-foreground text-xs justify-start hover:neutral-700 dark:hover:bg-neutral-300"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </BlurFade>
  );
}
