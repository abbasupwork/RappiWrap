import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import ImageCarousel from "../components/ImageCarousel";
import Coffee from "../assets/images/coffee.png";
import Nachos from "../assets/images/nachos.png";
import Noodles from "../assets/images/noodles.png";

const RewindScreen4 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);
  const slidesData = [
    { id: 1, img: Coffee, title: "Slide One" },
    { id: 2, img: Nachos, title: "Slide Two" },
    { id: 3, img: Noodles, title: "Slide Three" },
    { id: 4, img: Coffee, title: "Slide One" },
    { id: 5, img: Nachos, title: "Slide Two" },
    { id: 6, img: Noodles, title: "Slide Three" },
  ];
  return (
    <>
      <BaseRewindScreen className="rewind-screen-4 py-5">
        <div className="w-full">
          <div className="px-6 mb-5">
            <img key={`moustache-${animationKey}`} src={moustache} alt="" className="mb-5 mx-auto animate-fade-in-1" />
            <h3 key={`title1-${animationKey}`} className="font-bold text-[38px] leading-[32px] text-black mb-10 animate-fade-in-2">
              Este año<br></br>agregamos
            </h3>
            <h1 key={`title2-${animationKey}`} className="text-[80px] leading-[74px] font-bold bg-gradient-to-b from-[#FF402D] to-[#FF3335] bg-clip-text text-transparent mb-2 animate-fade-in-3">
              cientos
            </h1>
            <h2 key={`title3-${animationKey}`} className="font-bold text-[50px] leading-[48px] bg-gradient-to-b from-[#FF402D] to-[#FF3335] bg-clip-text text-transparent mb-2 animate-fade-in-4">
              de nuevos restaurantes<br></br>
              <span className="text-black">en tu ciudad</span>
            </h2>
          </div>
          <div key={`carousel-${animationKey}`} className="animate-fade-in-5">
            <ImageCarousel slides={slidesData} />
          </div>
          <div key={`footer-${animationKey}`} className="mt-10 px-6 animate-fade-in-6">
            <p className="text-[30px] leading-[30px]">
              Para que siempre encuentres algo rico y te antojes.
            </p>
          </div>
        </div>
        {/* Page Indicator */}
        <div className="page-indicator">
          <div className="indicator-oval">
            <span>
              {pageNumber}/{totalPages}
            </span>
          </div>
          <div className="indicator-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 10L12 15L17 10"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen4;
