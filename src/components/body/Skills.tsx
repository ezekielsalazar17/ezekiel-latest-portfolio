import { BlurFade } from "@/components/ui/blur-fade";
import Braces from "@/src/assets/braces.svg";
import { m } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const Frontend = [
    "HTML",
    "CSS",
    "React.Js",
    "Next.Js",
    "Tailwind CSS",
    "Wordpress",
  ];
  const Backend = ["Node.Js", "Express.Js"];
  const Frameworks = ["Next.Js", "Bootstrap", "Material UI", "Shadcn UI"];
  const Tools = ["VSCode", "Github", "Figma"];

  return (
    <BlurFade inView delay={0.8} offset={10} blur="10px">
      <div className="bg-background dark:bg-primary-foreground flex flex-col gap-6 p-6 md:p-8 rounded-md shadow-md border border-[#f1f1f1] dark:border-accent">
        <div className="flex flex-row w-full h-full gap-2 align-start">
          <Image
            src={Braces.src}
            alt="Skills Icon"
            width={24}
            height={24}
            className="dark:invert"
          />
          <h1 className="text-2xl font-bold">Tech Stack</h1>
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Frontend</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Frontend.map((frontend, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#f1f1f1] dark:bg-background p-2 border border-neutral-300 dark:border-accent rounded-md gap-2"
                  >
                    <h1 className="text-md font-bold">{frontend}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Backend</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Backend.map((backend, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#f1f1f1] dark:bg-background p-2 border border-neutral-300 dark:border-accent rounded-md gap-2"
                  >
                    <h1 className="text-md font-bold">{backend}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Frameworks</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Frameworks.map((framework, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#f1f1f1] dark:bg-background p-2 border border-neutral-300 dark:border-accent rounded-md gap-2"
                  >
                    <h1 className="text-md font-bold">{framework}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Tools</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Tools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#f1f1f1] dark:bg-background p-2 border border-neutral-300 dark:border-accent rounded-md gap-2"
                  >
                    <h1 className="text-md font-bold">{tool}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
