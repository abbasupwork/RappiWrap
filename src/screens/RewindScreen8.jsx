import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.png";
import Turbo from "../assets/images/Turbo.png";
import Scott from "../assets/images/scott.png";
import FlagLeft from "../assets/images/flag-left.png";
import FlagRight from "../assets/images/flag-right.png";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3">
        <div className="w-full">
          <div className="relative bg-[#69bd68] bg-[url('./assets/images/green-lines.png')] bg-top bg-cover bg-no-repeat w-full px-6 pt-8 text-white">
            <div className="relative flex flex-col items-center">
              <img src={moustache} alt="" className="mb-2 mx-auto" />
              <h1 className="text-[118px] text-center font-bold leading-[132px] mb-4">
                05:12
              </h1>
              <p className="text-[#083410] text-[24px] leading-[20px] font-semibold mb-8">
                Fue el récord de entrega con
              </p>
              <img src={Turbo} alt="" className="mb-6" />
              <div className="glass-card rounded-[24px] p-4 w-full flex items-center gap-4 mb-[-30px]">
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
          <div className="mt-20 mb-6 px-6 w-full">
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
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen5;
