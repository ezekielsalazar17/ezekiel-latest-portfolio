import Image from "next/image";
import Contact from "@/src/assets/user-round.svg";

export default function Contacts() {
  return (
    <div className="bg-background dark:bg-primary-foreground flex flex-col gap-6 p-6 md:p-8 rounded-md shadow-md border border-[#f1f1f1] dark:border-accent">
      <div className="flex flex-row w-full h-full gap-2 align-start">
        <Image
          src={Contact}
          alt="Contact Icon"
          width={24}
          height={24}
          className="dark:invert"
        />
        <h1 className="text-2xl font-bold">Contact</h1>
      </div>
      <div></div>
    </div>
  );
}
