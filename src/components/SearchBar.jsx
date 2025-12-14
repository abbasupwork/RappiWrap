import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="mb-4">
        <div
          className="flex items-center bg-white shadow-lg rounded-[999px] px-4 py-3 gap-3 border border-[#ECEFF3]"
          style={{ borderWidth: "1px" }}
        >
          <svg
            className="flex-shrink-0"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#9E9E9E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 19L14.65 14.65"
              stroke="#9E9E9E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className="flex-1 border-none bg-transparent outline-none text-base text-black placeholder:text-gray-500 font-golos"
            placeholder="Busca cualquier cosa"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
