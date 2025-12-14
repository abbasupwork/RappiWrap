import React from "react";

const Header = () => {
  return (
    <>
      <div className="mb-4">
        <div className="w-full">
          <p className="text-xs text-gray-500 mb-1 font-golos">
            Calle 92 # 11-45
          </p>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-bold text-black m-0 font-golos">
              Casa de Mamá
            </h1>
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#9E9E9E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
