import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Lottie from "lottie-react";
import Leaves from "../assets/lotties/LEAVES.json";
import World from "../assets/lotties/WORLD.json";

const RewindScreen5 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
      // Reset counter and animate from 0 to 200
      setCount(0);
      const duration = 2000; // 2 seconds
      const target = 200;
      const steps = 60; // Number of animation steps
      const increment = target / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const counter = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.min(Math.floor(increment * currentStep), target));
        }
      }, stepDuration);

      return () => clearInterval(counter);
    } else {
      setCount(0);
    }
  }, [isActive]);
  return (
    <>
      <BaseRewindScreen className="rewind-screen-9">
        <div className="w-full pt-5 px-6 h-full">
          <img key={`moustache-${animationKey}`} src={moustache} alt="" className="mb-6 mx-auto animate-fade-in-1" />
          <h2 key={`title-${animationKey}`} className="font-bold text-[54px] leading-[52px] text-[#34CE1C] animate-fade-in-2">
            Ahorraste
          </h2>
          <div key={`amount-${animationKey}`} className="flex items-end gap-2 mb-4 animate-fade-in-3">
            <span className="text-[124px] text-[#34CE1C] font-bold leading-[112px]">
              {count}
            </span>
            <div>
              <Lottie animationData={Leaves} loop={true} className="w-[50px]" />
              <span className="text-[46px] font-semibold text-[#34CE1C] leading-[54px]">
                kg
              </span>
            </div>
          </div>
          <p key={`text-${animationKey}`} className="text-[30px] leading-[30px] animate-fade-in-4">
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
