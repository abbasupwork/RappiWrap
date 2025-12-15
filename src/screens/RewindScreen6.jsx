import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.png";
import TimerTag from "../assets/images/timer-tag.png";
import HeartIcon from "../assets/images/heart-icon.png";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3 pt-8">
        <div className="w-full">
          <div className="px-6 mb-10">
            <img src={moustache} alt="" className="mb-5 mx-auto" />
            <h2 className="font-bold leading-[52px] text-black mb-6">
              Ahorraste
            </h2>
            <img src={TimerTag} alt="" className="mb-4" />
            <p className="text-[30px] leading-[30px] mb-6">
              de filas y búsqueda de parqueaderos.
            </p>
            <p className="text-xl leading-[20px]">
              Más tiempo que el promedio de{" "}
              <span className="font-bold">45 horas.</span>
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] px-6 py-10 w-full h-full">
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
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen5;
