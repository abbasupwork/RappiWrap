import SearchIcon from "../assets/images/search-icon.png";

const SearchBar = () => {
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center bg-white shadow-[0_6px_14px_rgba(33,34,36,0.08),inset_0_0_0_1px_#ECEFF3] rounded-[999px] px-4 py-4 gap-3 border border-[#ECEFF3] border-1">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            className="flex-1 border-none bg-white outline-none text-regular text-black placeholder:text-gray-500"
            placeholder="Busca cualquier cosa"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
