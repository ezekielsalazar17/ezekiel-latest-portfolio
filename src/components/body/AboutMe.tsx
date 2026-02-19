import AboutIcon from "@/src/assets/about-icon.svg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="bg-background dark:bg-primary-foreground flex flex-col gap-6 p-6 md:p-8 rounded-md shadow-md border border-[#f1f1f1] dark:border-accent">
      <div className="flex flex-row w-full h-full gap-2 align-start">
        <Image
          src={AboutIcon}
          alt="About Icon"
          width={24}
          height={24}
          className="dark:invert"
        />
        <h1 className="text-2xl font-bold">About</h1>
      </div>
      <div className="flex-wrap">
        I am a passionate web developer with experience in building responsive and user-friendly web applications.I am
        proficient in HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and improve my
        skills. I am a team player and I enjoy collaborating with others to create innovative solutions. I am excited to
        contribute my skills and knowledge to a dynamic and forward-thinking organization.
      </div>
      <div>
        I also do Wordpress Web Development and also doing some Video editing for fun because that is also a creative
        outlet for me. I have experience in using video editing software such as Adobe Premiere Pro and I enjoy creating
        engaging and visually appealing videos. Whether it&apos;s for personal projects or professional work, I am
        always looking for ways to improve my video editing skills and create content that resonates with my audience.
      </div>
    </div>
  );
}
