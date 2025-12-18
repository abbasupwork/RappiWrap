import { useEffect, useState } from "react";
import rappiLogo from "../assets/images/rappiLogo.svg";
import rewindTitle from "../assets/images/rewindTitle.png";
import pill from "../assets/images/pill.png";
import arrows from "../assets/images/arrows.svg";
import Lottie from "lottie-react";
import WhiteFlower from "../assets/lotties/FLOWER_01.json";
import RedFlower from "../assets/lotties/FLOWER_02.json";

const RewindIntroScreen = ({ isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);
  return (
    <>
      <div className="rewind-intro-screen">
        <div className="intro-content">
          <div className="rappi-logo">
            <img
              src={rappiLogo}
              alt="Rappi Logo"
              className="rappi-logo-image"
            />
          </div>

          <div className="main-content">
            <img
              key={`title-${animationKey}`}
              src={rewindTitle}
              alt="Rewind Title"
              className="rewind-title mb-[-20px] animate-zoom-in"
            />
            <div className="flex items-center justify-between w-full relative">
              <div className="relative">
                <Lottie
                  key={`redFlower-${animationKey}`}
                  className="w-[64px] ml-[-10px] animate-fade-in-left"
                  animationData={RedFlower}
                  loop={true}
                />
              </div>
              <div className="flex items-center justify-end">
                <Lottie
                  key={`whiteFlower-${animationKey}`}
                  className="w-[100px] mr-[-55px] animate-fade-in-right relative z-0"
                  animationData={WhiteFlower}
                  loop={true}
                />
                <img key={`pill-${animationKey}`} src={pill} className="z-10 animate-slide-in-right" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator-bar">
          <div className="scroll-chevrons">
            <img src={arrows} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RewindIntroScreen;
