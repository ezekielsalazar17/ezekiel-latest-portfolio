import { BlurFade } from "@/components/ui/blur-fade";
import AboutMe from "./AboutMe";

const Body = () => {
  return (
    <div className="flex flex-col">
      <BlurFade delay={0.4} inView offset={10} blur="10px">
        <AboutMe />
      </BlurFade>
    </div>
  );
};

export default Body;
