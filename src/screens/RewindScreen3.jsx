import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.png";
import tag15 from "../assets/images/tag15.png";
import Burger from "../assets/images/burger-image.png";

const RewindScreen3 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3 py-8">
        <div className="w-full">
          <div className="px-6">
            <img src={moustache} alt="" className="mb-5 mx-auto" />
            <h2 className="font-golos font-bold text-[54px] leading-[52px] text-black mb-4">
              Tus pedidos de este año
            </h2>
          </div>
          <div className="bg-[url('./assets/images/map-bg.png')] h-[200px] bg-cover bg-center bg-no-repeat text-white p-6">
            <span className="font-semibold text-[24px] leading-[36px]">
              En 2025 hiciste
            </span>
            <h2 className="font-bold leading-[36px] mb-4 mt-2">87 pedidos</h2>
            <p className="mb-10 text-xl ">que ayudaron a mover Bogotá</p>
          </div>
          <div className="glass-card p-4 rounded-[34px] mx-6 relative top-[-25px]">
            <h4 className="text-[30px] font-medium mb-4">Tu posición</h4>
            <img src={tag15} alt="" className="mb-4" />
            <p className="text-xl">de los que piden lo mismo en tú ciudad.</p>
          </div>
          <div className="glass-card p-4 rounded-[34px] mx-6">
            <p className="text-md">Tu categoría dominante:</p>
            <h4 className="text-[30px] font-medium mb-2">Restaurantes</h4>
            <div className="flex items-start w-full">
              <h3 className="text-[42px] bg-gradient-to-b from-[#FF402D] to-[#FF3335] bg-clip-text text-transparent font-semibold leading-[27px]">
                71%
                <span className="text-[28px]"> de tus pedidos.</span>
              </h3>
              <img src={Burger} alt="" />
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

export default RewindScreen3;
