import { useNavigate } from "react-router-dom";
import PromoImage from "../assets/images/promo-image.png";

const PromotionalBanner = () => {
  const navigate = useNavigate();

  const handleVerAhora = () => {
    navigate("/rewind-intro");
  };
  return (
    <>
      <div className="flex items-start mb-8">
        <img src={PromoImage} alt="" />
        <div className="w-full">
          <p className="font-medium text-lg leading-[20px] mb-4">
            Este fue tu
            <span className="text-[24px] bg-gradient-to-br from-[#FF402D] to-[#FF3335] bg-clip-text text-transparent">
              &nbsp;efecto
            </span>
            <br></br>
            <span className="font-normal">
              &nbsp;&nbsp;&nbsp;durante el año.
            </span>
          </p>
          <div className="flex justify-end">
            <button
              onClick={handleVerAhora}
              className="bg-[#ECEFF3] px-4 py-2 rounded-full font-medium"
            >
              Ver ahora
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionalBanner;
