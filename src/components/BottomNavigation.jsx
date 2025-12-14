import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = ({ activeTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/" || path === "/inicio") return "inicio";
    if (path === "/ofertas") return "ofertas";
    if (path === "/favoritos") return "favoritos";
    if (path === "/cuenta") return "cuenta";
    return activeTab;
  };

  const currentActive = getActiveTab();

  const getIcon = (itemId, isActive) => {
    const strokeColor = isActive ? "#E02E24" : "#9E9E9E";
    const fillColor = isActive && itemId === "inicio" ? "#E02E24" : "none";

    switch (itemId) {
      case "inicio":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fillColor}
            className="transition-all duration-200"
          >
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
            <path
              d="M9 22V12H15V22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
          </svg>
        );
      case "ofertas":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-all duration-200"
          >
            <path
              d="M18 8A6 6 0 0 0 6 8C6 11 3 12 3 12H21C21 12 18 11 18 8Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
            <path
              d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
          </svg>
        );
      case "favoritos":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-all duration-200"
          >
            {/* Shopping bag */}
            <path
              d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
            <path
              d="M3 6H21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
            <path
              d="M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
            {/* Heart on bag */}
            <path
              d="M12 15C12 15 10.5 13.5 9.5 12.5C8.5 11.5 8 11 8 10C8 8.5 9.5 7 12 7C14.5 7 16 8.5 16 10C16 11 15.5 11.5 14.5 12.5C13.5 13.5 12 15 12 15Z"
              fill={strokeColor}
              strokeWidth="0.5"
              stroke={strokeColor}
            />
          </svg>
        );
      case "cuenta":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-all duration-200"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={strokeColor}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio", path: "/", badge: null },
    { id: "ofertas", label: "Ofertas", path: "/ofertas", badge: null },
    { id: "favoritos", label: "Favoritos", path: "/favoritos", badge: null },
    { id: "cuenta", label: "Cuenta", path: "/cuenta", badge: 2 },
  ];
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white border-t border-gray-200 py-2 pb-[max(8px,env(safe-area-inset-bottom))] z-[1000] shadow-[0_-2px_8px_rgba(0,0,0,0.05)] max-w-full md:max-w-[414px] md:left-1/2 md:-translate-x-1/2">
        {navItems.map((item) => {
          const isActive = currentActive === item.id;
          return (
            <button
              key={item.id}
              className={`flex flex-col items-center justify-center gap-1 bg-none border-none cursor-pointer px-4 py-2 flex-1 transition-opacity duration-200 active:opacity-70`}
              onClick={() => navigate(item.path)}
            >
              <div className="relative flex items-center justify-center">
                {getIcon(item.id, isActive)}
                {item.badge && (
                  <span className="absolute -top-1 -right-2 bg-rappi-red text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-xs transition-colors duration-200 font-golos ${
                  isActive ? "text-rappi-red font-semibold" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default BottomNavigation;
