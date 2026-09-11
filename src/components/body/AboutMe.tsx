import AboutIcon from "@/src/assets/about-icon.svg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex-1 bg-card border border-border shadow-sm flex flex-col gap-5 p-6 md:p-8">
      <div className="flex items-center gap-2.5">
        <Image
          src={AboutIcon}
          alt=""
          aria-hidden
          width={20}
          height={20}
          className="dark:invert opacity-80"
        />
        <h2 className="text-xl font-semibold tracking-tight">About</h2>
      </div>
      <div className="flex flex-col gap-4 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
        <p>
          I am a passionate web developer with experience in building responsive
          and user-friendly web applications. I am proficient in HTML, CSS,
          JavaScript, and React, and I am always eager to learn new technologies
          and improve my skills. I am a team player and I enjoy collaborating
          with others to create innovative solutions. I am excited to contribute
          my skills and knowledge to a dynamic and forward-thinking organization.
          I also use AI tools to help me build and ship projects faster,
          streamlining my workflow and boosting my productivity.
        </p>
        <p>
          I also do Wordpress Web Development and also doing some Video editing
          for fun because that is also a creative outlet for me. I have
          experience in using video editing software such as Adobe Premiere Pro
          and I enjoy creating engaging and visually appealing videos. Whether
          it&apos;s for personal projects or professional work, I am always
          looking for ways to improve my video editing skills and create content
          that resonates with my audience.
        </p>
      </div>
    </div>
  );
}
