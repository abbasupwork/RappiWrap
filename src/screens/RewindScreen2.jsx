import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Calender from "../assets/images/calender.png";

const RewindScreen2 = ({ pageNumber, totalPages, isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);
  return (
    <>
      <BaseRewindScreen className="rewind-screen-2">
        <div className="overflow-y-auto py-5">
          <div className="w-full px-6">
            <img
              key={`moustache-${animationKey}`}
              src={moustache}
              alt=""
              className="mb-5 mx-auto animate-fade-in-1"
            />
            <h2
              key={`title-${animationKey}`}
              className="font-golos font-bold text-[50px] leading-[52px] text-black animate-fade-in-2"
            >
              Tu primer pedido fue en
            </h2>
            <div
              key={`date-${animationKey}`}
              className="flex items-end mb-4 animate-fade-in-3"
            >
              <img className="w-[80px]" src={Calender} alt="" />
              <span className="font-golos font-bold text-[70px]">2018</span>
            </div>
            <div
              key={`card-${animationKey}`}
              className="pattern-card px-6 py-4 text-white animate-fade-in-4"
            >
              <h2 className="text-[42px] font-bold mb-4">
                7 años <span className="text-[28px] font-normal">después</span>
              </h2>

              <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
                <span className="bg-gradient-to-r from-[#FF7A4D] via-[#FF2526] to-[#FF4583] bg-clip-text text-transparent text-[32px] leading-[32px] font-semibold">
                  3,404 pedidos
                </span>
              </div>

              <p className="text-lg mb-6">
                le dieron ganancias a repartidores, activaron cocinas y más de
                un sueño.
              </p>
            </div>
            <div
              key={`glass-${animationKey}`}
              className="glass-card p-4 rounded-full w-[90%] mx-auto relative top-[-20px] flex flex-col items-center animate-fade-in-5"
            >
              <span className="font-medium text-lg text-center w-full">
                Tu efecto es real. Y es medible.
              </span>
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

export default RewindScreen2;
