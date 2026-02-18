import Body from "../components/body/Body";
import SideBar from "../components/body/SideBar";
import Navigation from "../components/hero/Navigation";

export default function Home() {
  return (
    <div className="my-20 mx-60 flex flex-col gap-10">
      <Navigation />

      <div className="flex flex-row gap-6">
        <Body />
        <SideBar />
      </div>
    </div>
  );
}
