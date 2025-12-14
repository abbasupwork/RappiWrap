import rappiLogo from "../assets/images/rappiLogo.png";
import rewindTitle from "../assets/images/rewindTitle.png";
import whiteFlower from "../assets/images/whiteFlower.png";
import redFlower from "../assets/images/redFlower.png";
import pill from "../assets/images/pill.png";
import arrows from "../assets/images/arrows.svg";
import Lottie from "lottie-react";
import WhiteFlower from "../assets/lotties/FLOWER_01.json";

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
              className="rewind-title"
            />
            <div className="flex items-center justify-between w-full relative">
              <img src={redFlower} alt="" className="relative left-[-10px]" />
              <div className="flex items-center justify-end relative right-[-65px]">
                <img src={whiteFlower} alt="" className="whiteFlower" />
                <Lottie animationData={WhiteFlower} loop={true} />
                <img className="relative left-[-57px]" src={pill} alt="" />
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
