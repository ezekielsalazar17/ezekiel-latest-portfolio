import Image from "next/image";
import Contact from "@/src/assets/user-round.svg";
import Github from "@/src/assets/github.svg";
import Email from "@/src/assets/mail.svg";
import LinkedIn from "@/src/assets/linkedin.svg";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Contacts() {
  const contacts = [
    {
      name: "Email",
      icon: Email,
      url: "https://mail.google.com/mail/?view=cm&to=ezekiel.salazar18@gmail.com&",
    },
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/ezekielsalazar17",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      url: "https://linkedin.com/in/",
    },
  ];
  return (
    <BlurFade
      inView
      delay={0.2}
      offset={10}
      blur="10px"
      className="flex-1 flex flex-col"
    >
      <div className="bg-card border border-border shadow-sm w-full h-full flex flex-col gap-5 p-6 md:p-8 flex-1">
        <div className="flex items-center gap-2.5">
          <Image
            src={Contact}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="dark:invert opacity-80"
          />
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center gap-3 rounded-sm border border-border bg-muted dark:bg-background px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-sm"
            >
              <Image
                src={contact.icon}
                alt=""
                aria-hidden
                width={20}
                height={20}
                className="dark:invert opacity-80"
              />
              <span className="font-medium">{contact.name}</span>
              <ArrowUpRight className="ml-auto size-4 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
            </a>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
