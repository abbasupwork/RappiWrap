import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import TimerTag from "../assets/images/timer-tag.png";
import HeartIcon from "../assets/images/heart-icon.svg";

const RewindScreen5 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);
  return (
    <>
      <BaseRewindScreen className="rewind-screen-6">
        <div className="overflow-y-auto pt-8">
          <div className="w-full h-full">
            <div className="px-6 mb-10">
              <img
                key={`moustache-${animationKey}`}
                src={moustache}
                alt=""
                className="mb-5 mx-auto animate-fade-in-1"
              />
              <h2
                key={`title-${animationKey}`}
                className="font-bold text-[50px] leading-[52px] text-black mb-6 animate-fade-in-2"
              >
                Ahorraste
              </h2>
              <img
                key={`timer-${animationKey}`}
                src={TimerTag}
                alt=""
                className="mb-4 animate-fade-in-3"
              />
              <p
                key={`text1-${animationKey}`}
                className="text-[30px] leading-[30px] mb-6 animate-fade-in-4"
              >
                de filas y búsqueda de parqueaderos.
              </p>
              <p
                key={`text2-${animationKey}`}
                className="text-xl leading-[20px] animate-fade-in-5"
              >
                Más tiempo que el promedio de{" "}
                <span className="font-bold">45 horas.</span>
              </p>
            </div>
            <div
              key={`card-${animationKey}`}
              className="bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] px-6 py-10 w-full h-full animate-fade-in-6"
            >
              <div className="rounded-[24px] px-6 pb-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] glass-card2 text-white text-center">
                <img src={HeartIcon} alt="" className="mx-auto" />
                <p className="text-xl leading-[20px] mb-4">
                  Y pudiste usarlo para lo que importa:{" "}
                </p>
                <h4 className="text-[30px] leading-[30px] font-bold">
                  Compartir con los<br></br>que amas.
                </h4>
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
