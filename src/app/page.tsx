import Body from "../components/body/Body";
import SideBar from "../components/body/SideBar";
import Navigation from "../components/hero/Navigation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full my-6 md:my-20 px-4 sm:px-6 flex flex-col gap-6 md:gap-10">
      <Navigation />

      <div className="flex flex-col md:flex-row gap-6 md:w-8xl mx-auto">
        <div className="w-full md:w-2/3">
          <Body />
        </div>
        <div className="w-full md:w-1/3">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
