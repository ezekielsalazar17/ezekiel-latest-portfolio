"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Folders from "@/src/assets/folders.svg";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

type TProject = {
  title: string;
  description: string;
  details?: string;
  url?: string;
  tags?: string[];
  image?: StaticImageData | string;
  images?: (StaticImageData | string)[];
};

function ProjectPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-400 transition-transform duration-300 group-hover:scale-105 dark:from-neutral-700 dark:to-neutral-900">
      <span className="text-4xl font-bold text-neutral-500 dark:text-neutral-300">{title.charAt(0)}</span>
    </div>
  );
}

function ProjectThumbnail({ project }: { project: TProject }) {
  const thumb = project.image || project.images?.[0];

  if (thumb) {
    return (
      <Image
        src={thumb}
        alt={`${project.title} preview`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    );
  }

  return <ProjectPlaceholder title={project.title} />;
}

function ProjectGallery({ project }: { project: TProject }) {
  const images = project.images ?? [];
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-border">
        <ProjectPlaceholder title={project.title} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-border bg-muted">
        <Image
          key={active}
          src={images[active]}
          alt={`${project.title} screenshot ${active + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, 576px"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View screenshot ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "relative aspect-video w-20 shrink-0 overflow-hidden rounded-sm border transition-all",
                i === active ? "border-foreground" : "border-border opacity-60 hover:opacity-100",
              )}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Project() {
  const projects: TProject[] = [
    {
      title: "My Portfolio",
      description: "My personal portfolio built with Next.js, Tailwind CSS, and TypeScript.",
      details:
        "My personal portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. It features a responsive, card-based layout with light and dark themes, subtle motion, and a built-in AI assistant chatbot.",
      url: "ezekiel-salazar-portfolio.vercel.app/",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Chatbot"],
      images: [],
    },
    {
      title: "Nos Ludere Ut (NLU)",
      description:
        "A community that was made by women that ensures a safe space for individuals in different categories in Call of Duty (Mobile)",
      details:
        "Nos Ludere Ut (NLU) is a community founded by women to ensure a safe space for individuals across different categories in Call of Duty (Mobile). The site presents the community, its values, and its members.",
      url: "https://nlu-two.vercel.app/",
      images: [],
    },
    {
      title: "Iponly",
      description:
        "Iponly is a group savings application built with Next.js, React Native, Node.js, Express and MongoDB.",
      details:
        "Iponly is a group savings application that lets members pool and track shared savings together. It pairs a Next.js web client with a React Native mobile app, backed by a Node.js and Express API and a MongoDB database.",
      url: "https://iponly-nextjs-web-client.vercel.app/",
      tags: ["Next.js", "React Native", "Node.js", "Express", "MongoDB"],
      images: [],
    },
  ];

  return (
    <BlurFade
      inView
      delay={0.4}
      offset={10}
      blur="10px"
    >
      <div className="bg-card border border-border shadow-sm flex flex-col w-full gap-5 p-6 md:p-8">
        <div className="flex items-center gap-2.5">
          <Image
            src={Folders}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="dark:invert opacity-80"
          />
          <h2 className="text-xl font-semibold tracking-tight">Recent Projects</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <div className="group flex h-full flex-col justify-between gap-4 rounded-sm border border-border bg-muted dark:bg-background p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md">
                <div className="flex flex-col gap-4">
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label={`View details for ${project.title}`}
                      className="relative w-full aspect-video overflow-hidden rounded-sm border border-border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ProjectThumbnail project={project} />
                      <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                    </button>
                  </DialogTrigger>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg tracking-tight">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-sm text-xs hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Details
                    </Button>
                  </DialogTrigger>

                  {project.url && (
                    <Button
                      asChild
                      size="sm"
                      className="rounded-sm text-xs"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                        <ExternalLink className="size-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <DialogContent className="rounded-none sm:max-w-lg md:max-w-xl max-h-[85vh] overflow-y-auto">
                <ProjectGallery project={project} />
                <DialogHeader>
                  <DialogTitle className="tracking-tight">{project.title}</DialogTitle>
                  <DialogDescription className="leading-relaxed whitespace-pre-line">
                    {project.details ?? project.description}
                  </DialogDescription>
                </DialogHeader>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-border bg-muted dark:bg-background px-2.5 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {project.url && (
                  <DialogFooter>
                    <Button
                      asChild
                      className="rounded-sm"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                        Visit site
                      </a>
                    </Button>
                  </DialogFooter>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
