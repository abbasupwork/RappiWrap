import rappiLogo from "../assets/images/rappiLogo.png";
import rewindTitle from "../assets/images/rewindTitle.png";
import pill from "../assets/images/pill.png";
import arrows from "../assets/images/arrows.svg";
import Lottie from "lottie-react";
import WhiteFlower from "../assets/lotties/FLOWER_01.json";
import RedFlower from "../assets/lotties/FLOWER_02.json";

const RewindIntroScreen = () => {
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
              src={rewindTitle}
              alt="Rewind Title"
              className="rewind-title mb-[-20px]"
            />
            <div className="flex items-center justify-between w-full relative">
              <Lottie
                className="w-[64px] ml-[-10px]"
                animationData={RedFlower}
                loop={true}
              />
              <div className="flex items-center justify-end">
                <Lottie
                  className="w-[100px] mr-[-55px]"
                  animationData={WhiteFlower}
                  loop={true}
                />
                <img src={pill} className="z-10" alt="" />
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
