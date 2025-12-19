import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import ArrowUp from "../assets/images/arrow-up.png";
import Burger from "../assets/images/burger-icon.svg";

const RewindScreen3 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
      // Reset counter and animate from 0 to 87
      setCount(0);
      const duration = 2000; // 2 seconds
      const target = 87;
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
      <BaseRewindScreen className="rewind-screen-3">
        <div className="overflow-y-auto py-5">
          <div className="w-full">
            <div className="px-6">
              <img
                key={`moustache-${animationKey}`}
                src={moustache}
                alt=""
                className="mb-2 mx-auto animate-fade-in-1"
              />
              <h2
                key={`title-${animationKey}`}
                className="font-golos font-bold text-[50px] leading-[50px] text-black mb-4 animate-fade-in-2"
              >
                Tus pedidos de este año
              </h2>
            </div>
            <div
              key={`map-${animationKey}`}
              className="bg-[url('./assets/images/map-bg.png')] h-[200px] bg-cover bg-center bg-no-repeat text-white p-6 animate-fade-in-3"
            >
              <span className="font-semibold text-[24px] leading-[30px]">
                En 2025 hiciste
              </span>
              <h2 className="font-bold text-[50px] leading-[36px] mb-4 mt-2">
                {count} pedidos
              </h2>
              <p className="mb-10 text-xl ">que ayudaron a mover Bogotá</p>
            </div>
            <div
              key={`position-${animationKey}`}
              className="glass-card p-4 rounded-[34px] mx-6 mt-[-35px] mb-4 flex flex-col items-start animate-fade-in-4"
            >
              <h4 className="text-[30px] font-medium mb-1">Tu posición</h4>
              <div className="bg-[#CB32DC] px-3 py-2 rounded-full relative overflow-hidden mb-2">
                <div
                  className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] absolute left-0 top-0
                  -inset-[1px] rounded-2xl
                  border border-white/20
                  blur-[5px] opacity-90"
                ></div>
                <div className="relative flex items-center gap-2 z-10">
                  <img src={ArrowUp} alt="" />
                  <h4 className="text-[34px] text-center text-white font-semibold leading-[34px] z-10">
                    Top 15%
                  </h4>
                </div>
              </div>
              <p className="text-xl">de los que piden lo mismo en tú ciudad.</p>
            </div>
            <div
              key={`category-${animationKey}`}
              className="glass-card p-4 rounded-[34px] mx-6 animate-fade-in-5"
            >
              <p className="text-md">Tu categoría dominante:</p>
              <h4 className="text-[30px] font-medium mb-2">Restaurantes</h4>
              <div className="flex items-start w-full">
                <h3 className="text-[42px] bg-gradient-to-b from-[#FF402D] to-[#FF3335] bg-clip-text text-transparent font-semibold leading-[27px]">
                  71%
                  <span className="text-[28px]"> de tus pedidos.</span>
                </h3>
                <img className="mb-[-15px]" src={Burger} alt="" />
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
        </div>
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen3;
