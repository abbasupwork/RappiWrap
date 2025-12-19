import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Turbo from "../assets/images/turbo.svg";
import Scott from "../assets/images/scott.png";
import FlagLeft from "../assets/images/flag-left.png";
import FlagRight from "../assets/images/flag-right.png";

const RewindScreen5 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
      // Reset timer and animate from 0:00 to 5:12
      setTimerSeconds(0);
      const targetSeconds = 5 * 60 + 12; // 5 minutes and 12 seconds = 312 seconds
      const duration = 2000; // 2 seconds animation
      const steps = 60;
      const increment = targetSeconds / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const counter = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setTimerSeconds(targetSeconds);
          clearInterval(counter);
        } else {
          setTimerSeconds(
            Math.min(Math.floor(increment * currentStep), targetSeconds)
          );
        }
      }, stepDuration);

      return () => clearInterval(counter);
    } else {
      setTimerSeconds(0);
    }
  }, [isActive]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <>
      <BaseRewindScreen className="rewind-screen-8">
        <div className="overflow-y-auto">
          <div className="w-full">
            <div className="relative bg-[#69bd68] bg-[url('./assets/images/green-lines.png')] bg-top bg-cover bg-no-repeat w-full px-6 pt-8 text-white">
              <div className="relative flex flex-col items-center">
                <img
                  key={`moustache-${animationKey}`}
                  src={moustache}
                  alt=""
                  className="mb-2 mx-auto animate-fade-in-1"
                />
                <h1
                  key={`time-${animationKey}`}
                  className="text-[100px] text-center font-bold leading-[100px] mb-4 animate-fade-in-2"
                >
                  {formatTime(timerSeconds)}
                </h1>
                <p
                  key={`text-${animationKey}`}
                  className="text-[#083410] text-center text-[24px] leading-[20px] font-semibold mb-4 animate-fade-in-3"
                >
                  Tu pedido más rápido de
                </p>
                <img
                  key={`turbo-${animationKey}`}
                  src={Turbo}
                  alt=""
                  className="mb-4 animate-fade-in-4"
                />
                <div
                  key={`card-${animationKey}`}
                  className="glass-card rounded-[24px] p-4 w-full flex items-center gap-4 mb-[-30px] animate-fade-in-5"
                >
                  <img src={Scott} alt="" />
                  <div>
                    Pediste<br></br>
                    <span className="font-bold">
                      Papel higiénico Scott 4 rollos
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={`footer-${animationKey}`}
              className="mt-16 mb-4 px-6 w-full animate-fade-in-6"
            >
              <p className="text-[22px] leading-[24px] mb-4">
                El récord de entrega en Chapinero es una Coca Cola 2L que llegó
                en:
              </p>
              <div className="flex items-center justify-center w-full">
                <img src={FlagLeft} alt="" />
                <span className="text-[32px] leading-[30px] font-semibold">
                  3:12 min
                </span>
                <img src={FlagRight} alt="" />
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

export default RewindScreen5;
