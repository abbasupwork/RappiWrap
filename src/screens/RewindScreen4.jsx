import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.png";
import Burger from "../assets/images/burger-image.png";
import ImageCarousel from "../components/imageCarousel";
import Coffee from "../assets/images/coffee.png";
import Nachos from "../assets/images/nachos.png";
import Noodles from "../assets/images/noodles.png";

const RewindScreen4 = ({ pageNumber, totalPages }) => {
  const slidesData = [
    { id: 1, img: Coffee, title: "Slide One" },
    { id: 2, img: Nachos, title: "Slide Two" },
    { id: 3, img: Noodles, title: "Slide Three" },
    { id: 4, img: Coffee, title: "Slide One" },
    { id: 5, img: Nachos, title: "Slide Two" },
    { id: 6, img: Noodles, title: "Slide Three" },
  ];
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3 py-8">
        <div className="w-full">
          <div className="px-6 mb-10">
            <img src={moustache} alt="" className="mb-5 mx-auto" />
            <h3 className="font-bold text-[38px] leading-[32px] text-black mb-10">
              Este año<br></br>agregamos
            </h3>
            <h1 className="text-[96px] leading-[74px] font-bold bg-gradient-to-b from-[#FF402D] to-[#FF3335] bg-clip-text text-transparent mb-2">
              cientos
            </h1>
            <h2 className="font-bold leading-[48px] bg-gradient-to-b from-[#FF402D] to-[#FF3335] bg-clip-text text-transparent mb-2">
              de nuevos restaurantes<br></br>
              <span className="text-black">en tu ciudad</span>
            </h2>
          </div>
          <ImageCarousel slides={slidesData} />
          <div className="mt-10 px-6">
            <p className="text-[30px] leading-[30px]">
              Para que siempre encuentres algo rico y te antojes.
            </p>
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

export default RewindScreen4;
