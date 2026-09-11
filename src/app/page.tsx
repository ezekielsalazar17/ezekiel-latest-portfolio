import Body from "../components/body/Body";
import SideBar from "../components/body/SideBar";
import Navigation from "../components/hero/Navigation";
import Skills from "../components/body/Skills";
import Project from "../components/body/Project";
import Contacts from "../components/body/Contacts";
import Services from "../components/body/Services";
import ChatbotButton from "../components/chatbot/ChatbotButton";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto w-full my-8 md:my-16 px-4 sm:px-6 flex flex-col gap-6">
      <Navigation />

      <div className="flex flex-col w-full lg:flex-row lg:items-stretch gap-6">
        <div className="w-full lg:w-2/3 flex flex-col">
          <Body />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <SideBar />
        </div>
      </div>

      <Skills />

      <Project />

      <div className="flex flex-col w-full lg:flex-row lg:items-stretch gap-6">
        <div className="w-full lg:w-2/3 flex flex-col">
          <Services />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <Contacts />
        </div>
      </div>

      <ChatbotButton />
    </div>
  );
}
