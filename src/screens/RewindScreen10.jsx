import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Top12 from "../assets/images/top12.png";

const RewindScreen5 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3 py-5 px-6">
        <div className="">
          <img key={`moustache-${animationKey}`} src={moustache} alt="" className="mb-4 mx-auto animate-fade-in-1" />
          <h2 key={`title-${animationKey}`} className="font-bold text-[52px] leading-[52px] mb-4 animate-fade-in-2">
            Tu propina este año
          </h2>
          <div key={`card-${animationKey}`} className="glass-card p-4 rounded-[24px] flex flex-col items-center justify-center mb-5 animate-fade-in-3">
            <h3 className="text-[34px] leading-[34px] font-semibold">$2.500</h3>
            <p className="text-regular">Fue tu propina promedio</p>
          </div>
          <h4 key={`subtitle-${animationKey}`} className="text-[24px] leading-[30px] text-[#00AE88] mb-4 animate-fade-in-4">
            Estás en el:
          </h4>
          <img key={`top12-${animationKey}`} className="w-[300px] mb-4 animate-fade-in-5" src={Top12} alt="" />
          <p key={`text1-${animationKey}`} className="text-[24px] leading-[30px] text-[#00AE88] mb-5 animate-fade-in-6">
            de propinas en Bogotá.
          </p>
          <p key={`text2-${animationKey}`} className="text-xl">
            El 100% de tu propina va a los repartidores, ayudándolos a cumplir
            sus metas y sueños.{" "}
          </p>
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

export default RewindScreen5;
