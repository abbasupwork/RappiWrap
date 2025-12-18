import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import GirlImage from "../assets/images/girl-image.svg";
import ArrowUp from "../assets/images/arrow-up.png";

const RewindScreen5 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);
  return (
    <>
      <BaseRewindScreen className="rewind-screen-7 py-5">
        <div className="w-full">
          <div className="flex items-start justify-between pl-6">
            <img key={`moustache-${animationKey}`} src={moustache} alt="" className="animate-fade-in-1" />
            <img key={`girl-${animationKey}`} className="h-[250px] animate-fade-in-2" src={GirlImage} alt="" />
          </div>
          <div className="px-6">
            <div key={`content-${animationKey}`} className="flex flex-col items-start animate-fade-in-3">
              <h4 className="text-[24px] font-semibold">En 2025 fuiste una</h4>
              <h2 className="text-[#0C4E87] font-bold text-[50px] leading-[50px] mb-4">
                Noctámbula resolutiva
              </h2>
              <div className="bg-[#0C4E87] px-3 py-2 rounded-full relative overflow-hidden mb-2">
                <div
                  className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#1A4595] via-[#347BB8] to-[#53A5EB] absolute left-0 top-0
                              -inset-[1px] rounded-2xl
                              border border-white/20
                              blur-[5px] opacity-90"
                ></div>
                <div className="relative flex items-center gap-2 z-10">
                  <img src={ArrowUp} alt="" />
                  <h4 className="text-[26px] text-center text-white font-semibold leading-[34px] z-10">
                    Top 8%
                  </h4>
                </div>
              </div>
              <p className="text-xl text-[#0C4E87] mb-4">de noctámbulos</p>
              <p className="text-xl font-semibold">25 pedidos</p>
              <p className="text-xl">los hiciste después de las 10pm</p>
            </div>
            <div key={`stats-${animationKey}`} className="grid grid-cols-2 gap-4 mt-6 animate-fade-in-4">
              <div className="glass-card rounded-[24px] flex flex-col items-center justify-center p-4">
                <span className="text-[34px] font-semibold">5</span>
                <p className="text-center text-regular leading-[16px]">
                  promedio pedidos nocturnos
                </p>
              </div>
              <div className="glass-card rounded-[24px] flex flex-col items-center justify-center p-4">
                <span className="text-[34px] font-semibold">20</span>
                <p className="text-center text-regular leading-[16px]">
                  pedidos más que el promedio
                </p>
              </div>
            </div>
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

export default RewindScreen5;
