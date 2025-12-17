import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import ProBlack from "../assets/images/pro-black.svg";
import DollarIcon from "../assets/images/dollar-icon.svg";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3">
        <div className="bg-gradient-to-br from-[#3C3C3C] to-[#000000] py-5 px-6 w-full h-full flex flex-col items-center">
          <img src={moustache} alt="" className="mb-4 mx-auto" />
          <img className="w-[200px] mb-5" src={ProBlack} alt="" />
          <p className="text-xl text-white mb-5">Ahorraste en total</p>
          <span className="bg-gradient-to-br from-[#FFC87C] to-[#F49502] bg-clip-text text-transparent text-[60px] font-bold mb-4">
            $287.000
          </span>
          <div
            className="bg-white/5
                        backdrop-blur-[30px]
                        border border-white/20
                        shadow-[0_16px_40px_rgba(0,0,0,0.2)]
                        rounded-[24px] w-full p-4 flex flex-col items-center justify-center"
          >
            <div
              className="p-2 bg-white/5
                backdrop-blur-[30px]
                border border-white/20
                shadow-[0_16px_40px_rgba(0,0,0,0.2)]
                rounded-full mb-4"
            >
              <img src={DollarIcon} alt="" />
            </div>
            <div className="flex items-center justify-between gap-4 w-full text-white mb-4">
              <div className="flex flex-col items-center">
                <p>En domicilios</p>
                <span className="text-[28px] font-semibold">$187.000</span>
              </div>
              <div className="w-[1px] h-10 bg-white/30"></div>
              <div className="flex flex-col items-center">
                <p>En descuentos</p>
                <span className="text-[28px] font-semibold">$100.000</span>
              </div>
            </div>
            <div className="text-white text-center">
              <p className="text-lg text-white mb-2">
                Tu suscripción se pagó sola
              </p>
              <span className="text-[54px] leading-[54px] font-bold">3.2</span>
              <p>veces</p>
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
