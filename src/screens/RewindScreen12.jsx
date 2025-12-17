import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Mute from "../assets/images/mute.svg";
import Resume from "../assets/images/resume.svg";
import Coupon from "../assets/images/coupon-mini.svg";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3">
        <div className="pt-5 px-6 w-full h-[256px] bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583]">
          <img src={moustache} alt="" className="mb-4 mx-auto" />
          <div className="bg-[url('./assets/images/FOTO.jpg')] bg-center bg-cover bg-no-repeat w-full h-[300px] rounded-[32px] p-5">
            <div className="flex justify-between items-end h-full">
              <img
                className="bg-white/5
                backdrop-blur-[30px]
                border border-white/20
                shadow-[0_16px_40px_rgba(0,0,0,0.2)]
                rounded-full p-2"
                src={Resume}
                alt=""
              />
              <img
                className="bg-white/5
                backdrop-blur-[30px]
                border border-white/20
                shadow-[0_16px_40px_rgba(0,0,0,0.2)]
                rounded-full p-2"
                src={Mute}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-6 pt-[130px]">
          <p className="text-xl font-semibold">No eres solo un usuario</p>
          <h3 className="bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] bg-clip-text text-transparent font-bold text-[42px] leading-[42px] mb-2">
            eres el efecto que mueve a Rappi.
          </h3>
          <p className="text-xl font-medium mb-2">
            ¡Gracias! Aquí tienes un regalito:
          </p>
          <img className="w-full ml-[-10px] mr-[-10px]" src={Coupon} alt="" />
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
