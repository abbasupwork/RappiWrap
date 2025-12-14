import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.png";
import Calender from "../assets/images/calender.png";

const RewindScreen2 = ({ pageNumber, totalPages }) => {
  return (
    <>
      <BaseRewindScreen className="rewind-screen-2 py-8">
        <div className="w-full px-6">
          <img src={moustache} alt="" className="mb-5 mx-auto" />
          <h2 className="font-golos font-bold text-[54px] leading-[52px] text-black mb-4">
            Tu primer pedido fue en
          </h2>
          <div className="flex items-end mb-10">
            <img src={Calender} alt="" />
            <span className="font-golos font-bold text-[70px]">2018</span>
          </div>
          <div className="pattern-card px-6 py-4 text-white">
            <h2 className="text-[44px] font-bold mb-6">
              7 años <span className="text-[28px] font-normal">después</span>
            </h2>

            <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
              <span className="bg-gradient-to-r from-[#FF7A4D] via-[#FF2526] to-[#FF4583] bg-clip-text text-transparent text-[40px] leading-[32px] font-semibold">
                3,404 pedidos
              </span>
            </div>

            <p className="text-xl mb-6">
              le dieron ganancias a repartidores, activaron cocinas y más de un
              sueño.
            </p>
          </div>
          <div className="glass-card p-4 rounded-full w-[90%] mx-auto relative top-[-20px] flex flex-col items-center">
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
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen2;
