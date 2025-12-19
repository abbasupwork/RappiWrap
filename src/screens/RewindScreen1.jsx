import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import rappiLogo from "../assets/images/rappi-logo.svg";
import Lottie from "lottie-react";
import Dominos from "../assets/lotties/DOMINO.json";

const RewindScreen1 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      // Increment key to force animation restart
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);

  return (
    <>
      <BaseRewindScreen className="rewind-screen-1">
        <div className="overflow-y-auto pt-5">
          <div className="w-full px-6">
            <img src={moustache} alt="" className="mb-4 mx-auto" />
            <h2
              key={`efecto-${animationKey}`}
              className="font-golos font-bold text-[64px] leading-[60px] bg-gradient-to-r from-[#FF7E42] via-[#FF2827] to-[#FF3A64]
  bg-clip-text text-transparent mb-4 animate-slide-from-top"
            >
              El efecto
            </h2>
            <span
              key={`maria-${animationKey}`}
              className="font-golos text-[32px] leading-[32px] font-bold animate-zoom-in-delayed"
            >
              "María Camila"
            </span>
            <div
              key={`anos-${animationKey}`}
              className="flex items-center mt-4 animate-slide-from-left-delayed-1"
            >
              <span className="text-[30px] leading-[36px] font-golos">
                10 años de
              </span>
              <img src={rappiLogo} alt="" className="" />
            </div>
            <span
              key={`huella-${animationKey}`}
              className="text-[30px] font-medium font-golos leading-[36px] animate-slide-from-left-delayed-2"
            >
              tú llevas 7 dejando huella.
            </span>
          </div>
          <div className="relative">
            <Lottie animationData={Dominos} loop={true} />
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
        </div>
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen1;
