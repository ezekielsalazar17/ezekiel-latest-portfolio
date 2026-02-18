import AboutIcon from "@/src/assets/about-icon.svg";
import Image from "next/image";

const Body = () => {
  return (
    <div className="bg-primary-foreground flex flex-col gap-6 p-10 rounded-md shadow-md border border-gray-200 dark:border-accent">
      <div className="flex flex-row w-full h-full gap-2 align-start">
        <Image
          src={AboutIcon}
          alt="About Icon"
          width={24}
          height={24}
        />
        <h1 className="text-2xl font-bold">About</h1>
      </div>
      <div className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate metus quis nunc bibendum aliquam.
        Curabitur est urna, sollicitudin vitae ex a, vestibulum auctor turpis. Curabitur eget auctor nisi, sodales
        fermentum eros. Vestibulum dapibus ligula porta risus tempor porttitor. In ut interdum sapien.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate metus quis nunc bibendum aliquam.
        Curabitur est urna, sollicitudin vitae ex a, vestibulum auctor turpis. Curabitur eget auctor nisi, sodales
        fermentum eros. Vestibulum dapibus ligula porta risus tempor porttitor. In ut interdum sapien.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate metus quis nunc bibendum aliquam.
        Curabitur est urna, sollicitudin vitae ex a, vestibulum auctor turpis. Curabitur eget auctor nisi, sodales
        fermentum eros. Vestibulum dapibus ligula porta risus tempor porttitor. In ut interdum sapien.
      </div>
    </div>
  );
};

export default Body;
