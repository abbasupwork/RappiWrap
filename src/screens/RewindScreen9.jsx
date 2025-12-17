import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Lottie from "lottie-react";
import Leaves from "../assets/lotties/LEAVES.json";
import World from "../assets/lotties/WORLD.json";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-9">
        <div className="w-full pt-5 px-6 h-full">
          <img src={moustache} alt="" className="mb-6 mx-auto" />
          <h2 className="font-bold text-[54px] leading-[52px] text-[#34CE1C]">
            Ahorraste
          </h2>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-[124px] text-[#34CE1C] font-bold leading-[112px]">
              200
            </span>
            <div>
              <Lottie animationData={Leaves} loop={true} className="w-[50px]" />
              <span className="text-[46px] font-semibold text-[#34CE1C] leading-[54px]">
                kg
              </span>
            </div>
          </div>
          <p className="text-[30px] leading-[30px]">
            de CO2, un impacto real en nuestro planeta.
          </p>
        </div>
        <Lottie animationData={World} loop={true} className="w-full h-full" />

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

export default RewindScreen5;
