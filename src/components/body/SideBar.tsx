import Image from "next/image";
import AboutIcon from "@/src/assets/about-icon.svg";
import { BlurFade } from "@/components/ui/blur-fade";

const SideBar = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Cornersteel Systems Corporation",
      duration: "2025",
    },
    {
      title: "OJT Internship - ERP Systems",
      company: "Cornersteel Systems Corporation",
      duration: "2023",
    },
  ];

  return (
    <BlurFade className="flex-1 flex flex-col" delay={0.6}>
      <div className="w-full flex-1 bg-card border border-border shadow-sm flex flex-col gap-5 p-6 md:p-8">
        <div className="flex items-center gap-2.5">
          <Image
            src={AboutIcon}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="dark:invert opacity-80"
          />
          <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        </div>
        <div className="flex flex-col">
          {experiences.map((experience, index) => (
            <div key={experience.title} className="flex gap-4">
              <div className="flex flex-col items-center pt-1.5">
                {index === 0 ? (
                  <span className="w-3 h-3 rounded-full bg-foreground shrink-0 ring-4 ring-foreground/10" />
                ) : (
                  <span className="w-3 h-3 rounded-full border-2 border-muted-foreground shrink-0" />
                )}
                {index < experiences.length - 1 && (
                  <span className="w-px flex-1 bg-border my-1.5" />
                )}
              </div>

              <div className="flex-1 pb-6 last:pb-0">
                <h3 className="font-semibold leading-tight">{experience.title}</h3>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-0.5">
                  <span className="text-sm text-muted-foreground">
                    {experience.company}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {experience.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlurFade>
  );
};

export default SideBar;
