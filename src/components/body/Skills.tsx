import { BlurFade } from "@/components/ui/blur-fade";
import Braces from "@/src/assets/braces.svg";
import Image from "next/image";

export default function Skills() {
  const Frontend = ["Frontend", "React.Js", "Next.Js", "Tailwind CSS", "Wordpress"];
  const Backend = ["Node.Js", "Express.Js"];
  const Frameworks = ["Next.Js", "Bootstrap", "Material UI", "Shadcn UI"];
  const Tools = ["VSCode", "Github", "Figma"];

  return (
    <BlurFade delay={0.6}>
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
        <div className="flex w-full gap-4 flex-row lg:flex-row sm:flex-col">
          <div className="flex flex-col gap-2 w-6/12 lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Frontend</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Frontend.map((frontend, index) => {
                return (
                  <div
                    key={index}
                    className="text-foreground bg-[#f1f1f1] dark:invert dark:text-background p-2 rounded-sm border border-neutral-300 font-bold dark:border-neutral-700"
                  >
                    {frontend}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-6/12 lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Backend</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Backend.map((backend, index) => {
                return (
                  <div
                    key={index}
                    className="text-foreground bg-[#f1f1f1] dark:invert dark:text-background p-2 rounded-sm border border-neutral-300 font-bold dark:border-neutral-700"
                  >
                    {backend}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row lg:flex-row sm:flex-col gap-4">
          <div className="flex flex-col gap-4 w-6/12 lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Frameworks</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Frameworks.map((framework, index) => {
                return (
                  <div
                    key={index}
                    className="text-foreground bg-[#f1f1f1] dark:invert dark:text-background p-2 rounded-sm border border-neutral-300 font-bold dark:border-neutral-700"
                  >
                    {framework}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-6/12 lg:6/12 sm:w-full">
            <h1 className="text-lg font-bold">Tools</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {Tools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="text-foreground bg-[#f1f1f1] dark:invert dark:text-background p-2 rounded-sm border border-neutral-300 font-bold dark:border-neutral-700"
                  >
                    {tool}
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
