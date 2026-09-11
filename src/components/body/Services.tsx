import { BlurFade } from "@/components/ui/blur-fade";
import { Briefcase, Code2, Globe, Workflow } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web apps with React and Next.js on the front end, Node.js and Express APIs on the back.",
  },
  {
    icon: Globe,
    title: "WordPress",
    description:
      "Custom WordPress sites and themes for content-driven businesses.",
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description:
      "Automated workflows and AI integrations built with n8n to ship faster.",
  },
];

export default function Services() {
  return (
    <BlurFade inView delay={0.2} offset={10} blur="10px">
      <div className="bg-card border border-border shadow-sm flex flex-col gap-6 p-6 md:p-8">
        <div className="flex items-center gap-2.5">
          <Briefcase className="size-5 opacity-80" />
          <h2 className="text-xl font-semibold tracking-tight">What I Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-3 rounded-sm border border-border bg-muted dark:bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md"
              >
                <span className="flex size-10 items-center justify-center rounded-sm border border-border bg-card transition-colors group-hover:border-foreground/25">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-semibold tracking-tight">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </BlurFade>
  );
}
