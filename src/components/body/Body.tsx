import AboutMe from "./AboutMe";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="flex flex-col gap-6">
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Body;
