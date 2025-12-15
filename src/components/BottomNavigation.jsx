import { useNavigate, useLocation } from "react-router-dom";

import inicioIcon from "../assets/images/inicio.png";
import ofertasIcon from "../assets/images/ofertas.png";
import favoritosIcon from "../assets/images/favoritos.png";
import cuentaIcon from "../assets/images/cuenta.png";

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

  const icons = {
    inicio: inicioIcon,
    ofertas: ofertasIcon,
    favoritos: favoritosIcon,
    cuenta: cuentaIcon,
  };

  const navItems = [
    { id: "inicio", label: "Inicio", path: "/", badge: null },
    { id: "ofertas", label: "Ofertas", path: "/ofertas", badge: null },
    { id: "favoritos", label: "Favoritos", path: "/favoritos", badge: null },
    { id: "cuenta", label: "Cuenta", path: "/cuenta", badge: 2 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white border-t border-gray-200 py-2 pb-[max(8px,env(safe-area-inset-bottom))] z-[1000] shadow-[0_-2px_8px_rgba(0,0,0,0.05)] max-w-full">
      {navItems.map((item) => {
        const isActive = currentActive === item.id;
        return (
          <button
            key={item.id}
            className="flex flex-col items-center justify-center gap-1 bg-none border-none cursor-pointer px-4 py-2 flex-1 transition-opacity duration-200 active:opacity-70"
            onClick={() => navigate(item.path)}
          >
            <div className="relative flex items-center justify-center">
              <img
                src={icons[item.id]}
                alt={item.label}
                className={`transition-all duration-200 ${
                  isActive ? "opacity-100" : ""
                }`}
              />
              {item.badge && (
                <span className="absolute -top-1 -right-2 bg-[#FF441F] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                  {item.badge}
                </span>
              )}
            </div>
            <span
              className={`text-xs transition-colors duration-200 font-golos ${
                isActive ? "text-[#FF441F] font-semibold" : "text-[#464D59]"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
