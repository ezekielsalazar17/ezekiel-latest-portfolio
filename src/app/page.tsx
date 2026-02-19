import Body from "../components/body/Body";
import SideBar from "../components/body/SideBar";
import Navigation from "../components/hero/Navigation";
import Skills from "../components/body/Skills";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full my-6 md:my-20 px-4 sm:px-6 flex flex-col gap-4 md:gap-4">
      <Navigation />

      <div className="flex flex-col lg:flex-row gap-6 lg:w-full mx-auto">
        <div className="w-full lg:w-2/3">
          <Body />
        </div>
        <div className="w-full lg:w-1/3 h-full lg:h-100 md:h-120">
          <SideBar />
        </div>
      </div>
      <div className="w-full h-full mx-auto">
        <Skills />
      </div>
    </div>
  );
}
