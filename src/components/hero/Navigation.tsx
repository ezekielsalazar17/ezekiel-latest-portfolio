"use client";

import { Button } from "@/components/ui/button";
import logo from "@/src/assets/verified.png";
import file from "@/src/assets/file.svg";
import envelope from "@/src/assets/envelope.svg";
import map from "@/src/assets/map-pin.svg";
import pfp from "@/src/assets/ezekiel2x2.png";
import Image from "next/image";
import { ThemeButton } from "../../utils/ThemeButton";
import { BlurFade } from "@/components/ui/blur-fade";

const Navigation = () => {
  return (
    <BlurFade delay={0.25} blur="10px" inView={true}>
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <ThemeButton />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center py-4 md:py-6">
        <div className="shrink-0 rounded-sm overflow-hidden ring-1 ring-border shadow-sm">
          <Image
            src={pfp.src}
            alt="Ezekiel Salazar"
            width={240}
            height={240}
            className="w-44 h-44 md:w-56 md:h-56 object-cover dark:bg-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center w-full items-center md:items-start text-center md:text-left">
          <div className="flex items-center w-full justify-center md:justify-between">
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-3xl md:text-4xl tracking-tight text-accent-foreground">
                Ezekiel Salazar
              </h1>
              <Image
                src={logo.src}
                alt="Verified"
                width={20}
                height={20}
                className="shrink-0"
              />
            </div>
            <div className="hidden md:block">
              <ThemeButton />
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-muted-foreground text-sm md:text-base">
            <Image
              src={map.src}
              alt=""
              aria-hidden
              width={18}
              height={18}
              className="dark:invert shrink-0 opacity-80"
            />
            Mandaluyong City, Philippines
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            BS Information Technology · Web Developer
          </p>

          <div className="flex flex-row gap-3 w-full justify-center md:justify-start">
            <Button
              asChild
              className="cursor-pointer rounded-sm transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <a download="SALAZAR_CV.pdf" href="/SALAZAR_CV.pdf">
                <Image
                  src={file.src}
                  alt=""
                  aria-hidden
                  width={18}
                  height={18}
                  className="dark:invert"
                />
                Download CV
              </a>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="cursor-pointer rounded-sm transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=ezekiel.salazar18@gmail.com&"
                target="_blank"
              >
                <Image
                  src={envelope.src}
                  alt=""
                  aria-hidden
                  width={18}
                  height={18}
                  className="dark:invert"
                />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default Navigation;
