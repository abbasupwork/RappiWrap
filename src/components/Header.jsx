import ExpandArrow from "../assets/images/expand.png";

const Header = () => {
  return (
    <>
      <div className="mb-6">
        <div className="w-full">
          <p className="text-sm text-black mb-1 font-golos">Calle 92 # 11-45</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-black m-0 font-golos">
              Casa de Mamá
            </span>
            <img src={ExpandArrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
