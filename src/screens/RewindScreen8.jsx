import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.png";
import GirlImage from "../assets/images/girl2.png";
import Tag8 from "../assets/images/tag8.png";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3 py-8">
        <div className="w-full">
          <div className="flex items-start justify-between pl-6">
            <img src={moustache} alt="" />
            <img src={GirlImage} alt="" />
          </div>
          <div className="px-6">
            <h4 className="text-[24px] font-semibold">En 2025 fuiste una</h4>
            <h2 className="text-[#0C4E87] font-bold leading-[50px] mb-6">
              Noctámbula resolutiva
            </h2>
            <img src={Tag8} alt="" className="mb-2" />
            <p className="text-xl text-[#0C4E87] mb-6">de noctámbulos</p>
            <p className="text-xl font-semibold">25 pedidos</p>
            <p className="text-xl">los hiciste después de las 10pm</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glass-card rounded-[24px] flex flex-col items-center justify-center p-4">
                <span className="text-[34px] font-semibold mb-2">5</span>
                <p className="text-center text-regular leading-[16px]">
                  promedio pedidos nocturnos
                </p>
              </div>
              <div className="glass-card rounded-[24px] flex flex-col items-center justify-center p-4">
                <span className="text-[34px] font-semibold mb-2">20</span>
                <p className="text-center text-regular leading-[16px]">
                  pedidos más que el promedio
                </p>
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
