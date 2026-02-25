import Body from "../components/body/Body";
import SideBar from "../components/body/SideBar";
import Navigation from "../components/hero/Navigation";
import Skills from "../components/body/Skills";
import Project from "../components/body/Project";
import Contacts from "../components/body/Contacts";
import Gallery from "../components/body/Gallery";
import ChatbotButton from "../components/chatbot/ChatbotButton";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full my-6 md:my-20 px-4 sm:px-6 flex flex-col gap-4">
      <Navigation />

      <div className="flex flex-col w-full lg:flex-row lg:items-stretch gap-4 lg:w-full mx-auto">
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

      <div className="flex flex-col w-full lg:flex-row lg:items-stretch gap-4 lg:w-full mx-auto">
        <div className="w-full lg:w-1/3 flex flex-col">
          <Contacts />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col">
          <Project />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <Gallery />
      </div>
      <ChatbotButton />
    </div>
  );
}
