import Image from "next/image";
import AboutIcon from "@/src/assets/about-icon.svg";

const SideBar = () => {
  return (
    <div className="max-w-4xl bg-primary-foreground flex flex-col gap-4 p-10 rounded-md shadow-sm border border-gray-200 dark:border-accent ">
      <div className="w-full flex flex-row gap-2 align-start">
        <Image
          src={AboutIcon}
          alt="About Icon"
          width={24}
          height={24}
          color=""
        />
        <h1 className="text-2xl font-bold">Experience</h1>
      </div>
      <div>
        <span>*</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate metus quis nunc bibendum aliquam.
        Curabitur est urna, sollicitudin vitae ex a, vestibulum auctor turpis.
      </div>
      <div>
        <span>*</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate metus quis nunc bibendum aliquam.
        Curabitur est urna, sollicitudin vitae ex a, vestibulum auctor turpis.
      </div>
      <div>
        <span>*</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate metus quis nunc bibendum aliquam.
        Curabitur est urna, sollicitudin vitae ex a, vestibulum auctor turpis.
      </div>
    </div>
  );
};

export default SideBar;
