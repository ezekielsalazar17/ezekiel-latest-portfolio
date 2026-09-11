import { BlurFade } from "@/components/ui/blur-fade";
import Braces from "@/src/assets/braces.svg";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiNodedotjs,
  SiExpress,
  SiExpo,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type Skill = { name: string; Icon: IconType };

const groups: { label: string; items: Skill[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "React.Js", Icon: SiReact },
      { name: "React Native", Icon: SiReact },
      { name: "Next.Js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Wordpress", Icon: SiWordpress },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.Js", Icon: SiNodedotjs },
      { name: "Express.Js", Icon: SiExpress },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Next.Js", Icon: SiNextdotjs },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Material UI", Icon: SiMui },
      { name: "Shadcn UI", Icon: SiShadcnui },
      { name: "Expo", Icon: SiExpo },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "VSCode", Icon: VscVscode },
      { name: "Github", Icon: SiGithub },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];

export default function Skills() {
  return (
    <BlurFade inView delay={0.8} offset={10} blur="10px">
      <div className="bg-card border border-border shadow-sm flex flex-col gap-6 p-6 md:p-8">
        <div className="flex items-center gap-2.5">
          <Image
            src={Braces.src}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="dark:invert opacity-80"
          />
          <h2 className="text-xl font-semibold tracking-tight">Tech Stack</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.label}
                </h3>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="group inline-flex items-center gap-2 rounded-sm border border-border bg-muted dark:bg-background px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-sm"
                  >
                    <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
