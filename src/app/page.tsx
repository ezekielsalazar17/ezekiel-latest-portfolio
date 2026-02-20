import Body from "../components/body/Body";
import SideBar from "../components/body/SideBar";
import Navigation from "../components/hero/Navigation";
import Skills from "../components/body/Skills";
import Project from "../components/body/Project";
import Contacts from "../components/body/Contacts";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full my-6 md:my-20 px-4 sm:px-6 flex flex-col gap-4">
      <Navigation />

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:w-full mx-auto">
        <div className="w-full lg:w-2/3 flex flex-col">
          <Body />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <SideBar />
        </div>
      </div>

      <div className="w-full h-full mx-auto">
        <Skills />
      </div>

      <div className="w-full h-full mx-auto flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <Contacts />
        </div>
        <div className="w-full lg:w-2/3">
          <Project />
        </div>
      </div>
      
    </div>
  );
}
