import { useEffect, useState } from "react";
import BaseRewindScreen from "../components/BaseRewindScreen";
import moustache from "../assets/images/moustache.svg";
import Girl1 from "../assets/images/girl1.svg";
import Bag from "../assets/images/bag-rt.svg";
import Trophy from "../assets/images/trophy.svg";
import Time from "../assets/images/time_history.svg";
import Home from "../assets/images/home-rappi.svg";
import Motorcycle from "../assets/images/motorcycle.svg";
import confetti from "../assets/lotties/CONFETTI.json";
import Lottie from "lottie-react";

const RewindScreen5 = ({ isActive }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);
  return (
    <>
      <BaseRewindScreen className="rewind-screen-3">
        <Lottie
          animationData={confetti}
          loop={true}
          className="absolute top-0 left-0"
        />
        <div className="w-full h-full bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] py-5 px-6">
          <div
            key={`header-${animationKey}`}
            className="flex justify-between items-start mb-4 animate-fade-in-1"
          >
            <h3 className="text-[28px] font-bold leading-[30px] text-white">
              El efecto<br></br>"María Camila"
            </h3>
            <img src={moustache} alt="" />
          </div>
          <div className="w-full flex flex-col justify-center">
            <img
              key={`girl-${animationKey}`}
              className="w-[224px] mx-auto animate-fade-in-2"
              src={Girl1}
              alt=""
            />
            <div
              key={`card-${animationKey}`}
              className="bg-white rounded-[24px] flex flex-col items-center p-4 mt-[-50px] mb-5 animate-fade-in-3"
            >
              <h4 className="text-[24px] leading-[20px] text-[#D9682F] font-semibold mb-4">
                Compradora de impacto
              </h4>
              <div className="bg-[#CB32DC] w-full p-2 rounded-full relative overflow-hidden">
                <div
                  className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] absolute left-0 top-0
                  -inset-[1px] rounded-2xl
                  border border-white/20
                  blur-[5px] opacity-90"
                ></div>
                <h4 className="text-[34px] text-center text-white font-semibold leading-[34px] z-10">
                  Eres Top 15%
                </h4>
              </div>
            </div>
            <div
              key={`stats-${animationKey}`}
              className="flex flex-col gap-3 mb-4 animate-fade-in-4"
            >
              <div className="flex items-center gap-4 text-white">
                <img src={Bag} alt="" />
                <div>
                  <p className="text-lg font-medium">87 pedidos</p>
                  <p className="text-sm">que generaron trabajo real</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <img src={Trophy} alt="" />
                <div>
                  <p className="text-lg font-medium">La hamburguesería</p>
                  <p className="text-sm">fue tu top restaurante</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <img src={Motorcycle} alt="" />
                <div>
                  <p className="text-lg font-medium">187 km</p>
                  <p className="text-sm">ahorrados en trancones</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <img src={Time} alt="" />
                <div>
                  <p className="text-lg font-medium">72 horas</p>
                  <p className="text-sm">recuperadas para hacer lo que amas</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <img src={Home} alt="" />
                <div>
                  <p className="text-lg font-medium">47 comercios</p>
                  <p className="text-sm">impactados directamente</p>
                </div>
              </div>
            </div>

            <button className="bg-white rounded-full p-2 mb-2">
              <span className="bg-gradient-to-br from-[#FF7A4D] via-[#FF2526] to-[#FF4583] bg-clip-text text-transparent text-[24px] font-medium">
                Compartir mi efecto
              </span>
            </button>
            <div className="w-[80%] flex justify-between items-center gap-4 text-white/70 mx-auto">
              <span className="text-xs">#ElEfectoMariaCamila</span>
              <div className="h-[10px] w-[1px] bg-white/70"></div>
              <span className="text-xs">#RappiWrap2025</span>
            </div>
          </div>
        </div>
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen5;
