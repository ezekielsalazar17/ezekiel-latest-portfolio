import { Button } from "@/components/ui/button";
import logo from "@/src/assets/verified.png";
import file from "@/src/assets/file.svg";
import envelope from "@/src/assets/envelope.svg";
import map from "@/src/assets/map-pin.svg";
import pfp from "@/src/assets/ezekiel2x2.png";
import Image from "next/image";
import { ThemeButton } from "../utils/ThemeButton";

const Navigation = () => {
  return (
    <div className="w-min-screen h-full flex gap-8 bg-background">
      <div className="min-w-fit h-60 bg-gray-200 rounded-lg justify-center items-center lg:w-fit lg:h-fit md:w-stretch md:h-fit">
        <Image
          src={pfp.src}
          alt="2x2 Profile Picture"
          width={240}
          height={240}
          className="lg:w-full lg:h-full rounded-lg bg-[#ffffff] md:w-stretch md:h-fit"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center w-full">
        <div className="flex justify-between">
          <h1 className="font-bold flex text-4xl w-full items-center">
            Ezekiel Salazar&nbsp;
            <span>
              <Image
                src={logo.src}
                alt="logo"
                width={20}
                height={20}
              />
            </span>
          </h1>
          <ThemeButton />
        </div>

        <h1 className="flex text-gray-600 gap-2 mb-8 ">
          <Image
            src={map.src}
            alt="location"
            width={20}
            height={20}
          />
          Mandaluyong City, Philippines
        </h1>
        <h1 className="text-md">BS Information Technology / Web Developer</h1>
        <div className="flex gap-4 w-full">
          <Button className="cursor-pointer">
            <span>
              <Image
                src={file.src}
                alt="file"
                width={20}
                height={20}
              />
            </span>
            View Resume
          </Button>
          <Button
            variant="secondary"
            className="cursor-pointer bg-[#ffffff] hover:bg-[#f0f0f0]"
          >
            <span>
              <Image
                src={envelope.src}
                alt="envelope"
                width={20}
                height={20}
              />
            </span>
            Send Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
