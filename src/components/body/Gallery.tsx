import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Image1 from "@/src/assets/profilePhotos/image1.jpg";
import Image2 from "@/src/assets/profilePhotos/image2.jpg";
import Image3 from "@/src/assets/profilePhotos/image3.jpg";
import Image4 from "@/src/assets/profilePhotos/image4.jpg";
import Image5 from "@/src/assets/profilePhotos/image5.jpg";
import Image6 from "@/src/assets/profilePhotos/image6.jpg";
import Image7 from "@/src/assets/profilePhotos/image7.jpg";
import Image8 from "@/src/assets/profilePhotos/image8.jpg";
import Image9 from "@/src/assets/profilePhotos/image9.jpg";
import GallerySvg from "@/src/assets/folders.svg";

const profilePhotos = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

export default function Gallery() {
  return (
    <div className="p-6 md:p-8 bg-background dark:bg-primary-foreground rounded-md shadow-md border border-[#f1f1f1] dark:border-accent">
      <div className="flex flex-row w-full h-full gap-2 align-start">
        <Image
          src={GallerySvg}
          alt="Gallery Image"
          width={24}
          height={24}
          className="dark:invert"
        />
        <h1 className="text-2xl font-bold">Gallery</h1>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-4">
        <Marquee pauseOnHover className="[--duration:40s] py-4">
          {profilePhotos.map((profilePhoto, index) => (
            <div key={index} className="flex shrink-0 p-2">
              <Image
                src={profilePhoto}
                alt={`Profile Photo ${index + 1}`}
                width={180}
                height={180}
                className="rounded-md border border-[#f1f1f1] dark:border-accent object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
