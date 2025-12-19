import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PromotionalBanner from "../components/PromotionalBanner";
import BottomNavigation from "../components/BottomNavigation";
import BurgerImage from "../assets/images/burger-image1.png";
import TurboImage from "../assets/images/turbo-image.png";
import Mercado from "../assets/images/mercado.png";
import FirstAid from "../assets/images/firstaid.png";
import Rewind from "../assets/images/rewind-2025.png";
import ArrowRight from "../assets/images/arrow-right.png";
import RappiCard from "../assets/images/rappi-card.png";
import RappiCuenta from "../assets/images/rappi-cuenta.png";

const HomeScreen = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white pb-20">
        <div className="flex-1 px-6 pt-10">
          <Header />
          <SearchBar />
          <PromotionalBanner />
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#FFF6F1] p-4 rounded-[28px] flex flex-col items-center">
              <img src={BurgerImage} alt="" />
              <span className="text-xl text-[#8C2424]">Restaurantes</span>
            </div>
            <div className="bg-[#E9F9E1] p-4 rounded-[28px] flex flex-col items-center">
              <img src={TurboImage} alt="" />
              <span className="text-xl text-[#177749]">Turbo</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#F7F8F9] p-2 rounded-[20px] flex flex-col items-center">
              <img src={Mercado} alt="" />
              <span className="text-regular">Mercado</span>
            </div>
            <div className="bg-[#F7F8F9] p-2 rounded-[20px] flex flex-col items-center">
              <img src={FirstAid} alt="" />
              <span className="text-regular">Farmacia</span>
            </div>
            <div className="bg-[#F7F8F9] p-2 rounded-[20px] flex flex-col items-center">
              <img src={Rewind} alt="" />
              <span className="text-regular">Tu 2025</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#ECEFF3] my-6"></div>
          <div className="mb-6">
            <div className="flex gap-2">
              <div className="flex-1 bg-[#F7F8F9] rounded-[20px] p-2 flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <img className="ml-[-5px] mr-[-5px]" src={RappiCard} alt="" />
                  <span className="text-regular font-medium text-black font-golos">
                    RappiCard
                  </span>
                </div>
                <img src={ArrowRight} alt="" />
              </div>
              <div className="flex-1 bg-[#F7F8F9] rounded-[20px] p-2 flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <img
                    className="ml-[-5px] mr-[-5px]"
                    src={RappiCuenta}
                    alt=""
                  />
                  <span className="text-regular font-medium text-black font-golos">
                    RappiCard
                  </span>
                </div>
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation activeTab="inicio" />
      </div>
    </>
  );
};

export default HomeScreen;
