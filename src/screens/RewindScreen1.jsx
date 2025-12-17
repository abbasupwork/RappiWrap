import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import rappiLogo from "../assets/images/rappi-logo.svg";
import Lottie from "lottie-react";
import Dominos from "../assets/lotties/DOMINO.json";

const RewindScreen1 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-1 pt-5">
        <div className="w-full px-6">
          <img src={moustache} alt="" className="mb-4 mx-auto" />
          <h2
            className="font-golos font-bold text-[64px] leading-[60px] bg-gradient-to-r from-[#FF7E42] via-[#FF2827] to-[#FF3A64]
  bg-clip-text text-transparent mb-4"
          >
            El efecto
          </h2>
          <span className="font-golos text-[32px] leading-[32px] font-bold">
            “María Camila”
          </span>
          <div className="flex items-center mt-4">
            <span className="text-[30px] leading-[36px] font-golos">
              10 años de
            </span>
            <img src={rappiLogo} alt="" className="" />
          </div>
          <span className="text-[30px] font-medium font-golos leading-[36px]">
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
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen1;
