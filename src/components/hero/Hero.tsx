import { Button } from "@/components/ui/button";
import logo from "@/src/assets/verified.png";
import file from "@/src/assets/file.svg";
import envelope from "@/src/assets/envelope.svg";
import map from "@/src/assets/map-pin.svg";
import pfp from "@/src/assets/ezekiel2x2.png";

const Hero = () => {
  return (
    <div className="w-min-screen h-full flex gap-8 my-20 mx-60 bg-[#f7f7f7]">
      <div className="min-w-fit h-60 bg-gray-200 rounded-lg justify-center items-center">
        <img
          src={pfp.src}
          alt="2x2 Profile Picture"
          className="w-full h-full rounded-lg bg-[#f7f7f7]"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center w-full">
        <div className="flex justify-between">
          <h1 className="font-bold flex text-4xl w-full items-center">
            Ezekiel Salazar&nbsp;
            <span>
              <img src={logo.src} alt="logo" className="w-5" />
            </span>
          </h1>
          theme
        </div>

        <h1 className="flex text-gray-600 gap-2 mb-2">
          <img src={map.src} alt="location" className="w-4 " />
          Mandaluyong City, Philippines
        </h1>
        <h1 className="text-md">BS Information Technology / Web Developer</h1>
        <div className="flex gap-4 w-full">
          <Button className="cursor-pointer">
            <span>
              <img src={file.src} alt="file" className="w-4" />
            </span>
            View Resume
          </Button>
          <Button variant="secondary" className="cursor-pointer hover:bg-white">
            <span>
              <img src={envelope.src} alt="envelope" className="w-4" />
            </span>
            Send Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
