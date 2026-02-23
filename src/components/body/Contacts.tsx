import Image from "next/image";
import Contact from "@/src/assets/user-round.svg";
import Github from "@/src/assets/github.svg";
import Email from "@/src/assets/mail.svg";
import LinkedIn from "@/src/assets/linkedin.svg";
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
      <div className="bg-background dark:bg-primary-foreground w-full h-full flex-wrap flex flex-col gap-6 p-6 md:p-8 rounded-md shadow-md border border-[#f1f1f1] dark:border-accent flex-1">
        <div className="flex flex-row w-full gap-2 align-start">
          <Image
            src={Contact}
            alt="Contact Icon"
            width={24}
            height={24}
            className="dark:invert"
          />
          <h1 className="text-2xl font-bold">Contact</h1>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
          {contacts.map((contact, index) => {
            return (
              <div key={index}>
                <a href={contact.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex bg-[#f1f1f1] hover:bg-neutral-200 hover:dark:bg-neutral-800 dark:bg-background p-2 w-full border border-neutral-300 dark:border-accent rounded-md gap-2">
                    <Image
                      src={contact.icon}
                      alt={`${contact.name} Icon`}
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                    <h1 className="font-bold">{contact.name}</h1>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </BlurFade>
  );
}
