import { useNavigate } from "react-router-dom";

const PromotionalBanner = () => {
  const navigate = useNavigate();

  const handleVerAhora = () => {
    navigate("/rewind-intro");
  };
  return (
    <>
      <div className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-4 mb-6 overflow-hidden relative">
        {/* Left Side - REWIND 2025 */}
        <div className="flex-shrink-0 flex flex-col">
          <div className="relative">
            <h2
              className="text-3xl font-extrabold bg-gradient-to-b from-orange-600 to-rappi-red bg-clip-text text-transparent leading-tight"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF6B35 0%, #E02E24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(255, 107, 53, 0.3)",
                letterSpacing: "-1px",
              }}
            >
              REWIND
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {/* White circle with red dot icon */}
            <div
              className="w-4 h-4 rounded-full bg-white flex items-center justify-center relative"
              style={{
                boxShadow: "0 0 8px rgba(224, 46, 36, 0.4)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-rappi-red"></div>
            </div>
            {/* 2025 Pill */}
            <div className="bg-rappi-red rounded-full px-3 py-1">
              <span className="text-white text-sm font-bold">2025</span>
            </div>
          </div>
        </div>

        {/* Right Side - Icon, Text, Button */}
        <div className="flex-1 flex items-center gap-2 flex-wrap">
          {/* Calendar Icon with Heart and Mustache */}
          <div className="flex-shrink-0 relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="relative z-10"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="18"
                rx="2"
                stroke="#000000"
                strokeWidth="2"
              />
              <path d="M3 9H21" stroke="#000000" strokeWidth="2" />
              <path d="M9 5V9" stroke="#000000" strokeWidth="2" />
              <path d="M15 5V9" stroke="#000000" strokeWidth="2" />
              {/* Heart inside calendar */}
              <path
                d="M12 13C12 13 10.5 14.5 9.5 15.5C8.5 16.5 8 17 8 18C8 19.5 9.5 21 12 21C14.5 21 16 19.5 16 18C16 17 15.5 16.5 14.5 15.5C13.5 14.5 12 13 12 13Z"
                fill="#E02E24"
              />
            </svg>
            {/* Mustache on top */}
            <svg
              width="20"
              height="12"
              viewBox="0 0 40 20"
              fill="none"
              className="absolute -top-1 left-1/2 -translate-x-1/2 z-20"
            >
              <path
                d="M10 10 Q15 5 20 10 Q25 15 30 10"
                stroke="#E02E24"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-[120px] text-sm text-black font-golos">
            <span className="text-black">Este fue tu </span>
            <span className="font-bold text-rappi-red">efecto</span>
            <span className="text-black"> durante el año.</span>
          </div>

          {/* Ver ahora Button */}
          <button
            className="bg-gray-100 border-none rounded-lg px-4 py-2 text-sm font-medium text-black cursor-pointer whitespace-nowrap flex-shrink-0 hover:bg-gray-200 active:scale-98 transition-all font-golos"
            onClick={handleVerAhora}
          >
            Ver ahora
          </button>
        </div>
      </div>
    </>
  );
};

export default PromotionalBanner;
