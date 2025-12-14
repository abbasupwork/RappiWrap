import React from "react";

const FinancialProducts = () => {
  return (
    <>
      <div className="mb-6">
        <div className="flex gap-3">
          <div className="flex-1 bg-gray-100 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:-translate-y-0.5 active:translate-y-0">
            <span className="text-base font-semibold text-black font-golos">
              RappiCard
            </span>
            <svg
              className="flex-shrink-0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:-translate-y-0.5 active:translate-y-0">
            <span className="text-base font-semibold text-black font-golos">
              RappiCuenta
            </span>
            <svg
              className="flex-shrink-0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialProducts;
