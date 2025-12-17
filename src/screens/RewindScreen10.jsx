import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Top12 from "../assets/images/top12.png";

const RewindScreen5 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3 py-5 px-6">
        <div className="">
          <img src={moustache} alt="" className="mb-4 mx-auto" />
          <h2 className="font-bold text-[52px] leading-[52px] mb-4">
            Tu propina este año
          </h2>
          <div className="glass-card p-4 rounded-[24px] flex flex-col items-center justify-center mb-5">
            <h3 className="text-[34px] leading-[34px] font-semibold">$2.500</h3>
            <p className="text-regular">Fue tu propina promedio</p>
          </div>
          <h4 className="text-[24px] leading-[30px] text-[#00AE88] mb-4">
            Estás en el:
          </h4>
          <img className="w-[300px] mb-4" src={Top12} alt="" />
          <p className="text-[24px] leading-[30px] text-[#00AE88] mb-5">
            de propinas en Bogotá.
          </p>
          <p className="text-xl">
            El 100% de tu propina va a los repartidores, ayudándolos a cumplir
            sus metas y sueños.{" "}
          </p>
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
