import Image from "next/image";
import AboutIcon from "@/src/assets/about-icon.svg";
import Circle from "@/src/assets/circle.svg";

const SideBar = () => {
  const experiences = [
    {
      icon: Circle,
      title: "Web Developer",
      company: "Cornersteel Systems Corporation",
      duration: "2025",
    },
    {
      icon: Circle,
      title: "OJT Internship - ERP Systems",
      company: "Cornersteel Systems Corporation",
      duration: "2023",
    },
  ];

  return (
    <div className="w-full bg-primary-foreground flex flex-col flex-wrap gap-4 p-6 md:p-8 rounded-md shadow-sm border border-gray-200 dark:border-accent">
      <div className="flex gap-2 align-start">
        <Image
          src={AboutIcon}
          alt="Experience Icon"
          width={24}
          height={24}
          className="dark:invert"
        />
        <h1 className="text-xl font-bold">Experience</h1>
      </div>
      <div className="w-full flex flex-col flex-wrap ">
        {experiences.map((experience, index) => (
          <div key={experience.title} className="flex flex-row gap-4">
            <div className="flex flex-col items-center pt-2">
              {index === 0 ? (
                <div className="w-4 h-4 rounded-full bg-foreground shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-muted-foreground shrink-0" />
              )}
              {index < experiences.length - 1 && (
                <div className="w-px flex-1 bg-muted-foreground/40 my-1" />
              )}
            </div>

            <div className="flex flex-row w-full gap-3 pb-6">
              <div className="flex flex-col w-full">
                <h1 className="text-lg font-bold">{experience.title}</h1>
                <div className="flex flex-row justify-between md:flex-col lg:flex-row w-full">
                  <h2 className="text-sm text-muted-foreground">
                    {experience.company}
                  </h2>
                  <h3 className="text-sm text-muted-foreground font-bold">
                    {experience.duration}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
