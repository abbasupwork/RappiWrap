import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import BurgerImage from "../assets/images/burger-imagex2.png";
import Basket from "../assets/images/basket-icon.png";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-5">
        <div className="w-full">
          <div className="bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] w-full px-6 pt-5 pb-10 text-white">
            <img src={moustache} alt="" className="mb-4 mx-auto" />
            <h3 className="text-[38px] font-bold leading-[33px] mb-2">
              La Hamburguesería
            </h3>
            <p className="text-xl mb-5">fue donde más pediste este año.</p>
            <img src={BurgerImage} alt="" className="mx-auto mb-2 w-[220px]" />
            <p className="text-xl font-semibold text-center">
              Burger clásica<br></br>triple
            </p>
          </div>
          <div className="relative top-[-30px] mx-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-[34px]">
                <span className="text-[48px] font-bold [text-stroke:1px_white]">
                  8
                </span>
                <p className="text-regular w-[100px]">
                  Pedidos promedio por usuario aquí
                </p>
                <img
                  src={Basket}
                  alt=""
                  className="ml-auto mr-[-10px] mb-[-10px]"
                />
              </div>
              <div className="glass-card p-4 rounded-[34px]">
                <span className="text-[48px] font-bold [text-stroke:1px_white]">
                  23
                </span>
                <p className="text-regular mb-6">Tus pedidos aquí</p>
                <div className="bg-[#FF4D2E] p-2 text-white flex flex-col items-center rounded-full mb-2">
                  <span className="text-center text-[24px] leading-[24px] font-semibold">
                    Top 50%
                  </span>
                </div>
                <span className="text-regular text-center text-[#FF4D2E] flex flex-col items-center">
                  Más leal
                </span>
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
