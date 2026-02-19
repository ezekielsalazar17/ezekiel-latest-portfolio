"use client";

import { Button } from "@/components/ui/button";
import logo from "@/src/assets/verified.png";
import file from "@/src/assets/file.svg";
import envelope from "@/src/assets/envelope.svg";
import map from "@/src/assets/map-pin.svg";
import pfp from "@/src/assets/ezekiel2x2.png";
import Image from "next/image";
import { ThemeButton } from "../utils/ThemeButton";
import { BlurFade } from "@/components/ui/blur-fade";

const Navigation = () => {
  return (
    <>
      <BlurFade delay={0.25} blur="10px" inView={true}>
        <div className="fixed top-4 right-4 z-50 md:hidden">
          <ThemeButton />
        </div>
        <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-8 bg-[#f1f1f1] dark:bg-background justify-center items-center md:justify-center md:items-center">
          <div className="shrink-0 rounded-xl overflow-hidden">
            <Image
              src={pfp.src}
              alt="2x2 Profile Picture"
              width={240}
              height={240}
              className="w-32 h-32 md:w-60 md:h-60 object-cover bg-white dark:bg-foreground rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center w-full items-center md:items-start text-center md:text-left">
            <div className="flex items-center w-full justify-center md:justify-between">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-2xl md:text-4xl text-accent-foreground">
                  Ezekiel Salazar
                </h1>
                <Image
                  src={logo.src}
                  alt="logo"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
              </div>
              <div className="hidden md:block">
                <ThemeButton />
              </div>
            </div>

            <h1 className="flex gap-2 mb-4 md:mb-8 text-muted-foreground text-sm md:text-base">
              <Image
                src={map.src}
                alt="location"
                width={20}
                height={20}
                className="color-muted-foreground dark:invert shrink-0"
              />
              Mandaluyong City, Philippines
            </h1>
            <h1 className="text-sm md:text-base">
              BS Information Technology / Web Developer
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:justify-start sm:justify-center">
              <Button className="cursor-pointer w-full sm:w-auto" asChild>
                <a
                  download="Salazar, Ezekiel_RESUME.pdf"
                  href="/NSTP-Letter.pdf"
                >
                  <Image
                    src={file.src}
                    alt="file"
                    width={20}
                    height={20}
                    className="color-muted-foreground dark:invert"
                  />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="secondary"
                className="cursor-pointer w-full sm:w-auto"
              >
                <Image
                  src={envelope.src}
                  alt="envelope"
                  width={20}
                  height={20}
                  className="color-muted-foreground dark:invert"
                />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
};

export default Navigation;
