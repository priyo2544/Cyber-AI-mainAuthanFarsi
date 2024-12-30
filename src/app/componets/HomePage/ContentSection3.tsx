"use client";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

interface ContentSection3Props {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  videoUrl: string;
  playButtonText?: string;
}

export default function ContentSection3({
  title,
  imageSrc,
  imageAlt = "video thumbnail",
  videoUrl,
  playButtonText = "Play",
}: ContentSection3Props) {
  const [toggler, setToggler] = useState(false);
  
  return (
    <section id="content-section-3">
      <div className="py-20 xl:pb-[150px] xl:pt-[130px]">
        <div className="global-container">
          <div className="jos mb-10 max-w-[480px] md:mb-16 lg:mb-20 lg:max-w-2xl xl:max-w-[800px]">
            <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
              {title}
            </h2>
          </div>
          <div
            className="jso relative overflow-hidden rounded-[10px]"
            data-jos_animation="zoom"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1296}
              height={600}
              className="h-80 w-full object-cover object-center lg:h-[35rem] "
            />
            <button 
              className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
              onClick={() => setToggler(!toggler)}
              aria-label="Play video"
            >
              <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-colorGreen bg-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300">
                {playButtonText}
                <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-colorGreen opacity-30"></div>
              </div>
            </button>
          </div>
          <FsLightbox toggler={toggler} sources={[videoUrl]} />
        </div>
      </div>
    </section>
  );
}