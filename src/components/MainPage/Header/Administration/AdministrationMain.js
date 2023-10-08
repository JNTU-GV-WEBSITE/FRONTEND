import { Link, Outlet, useLocation } from "react-router-dom";
import "./AdminandDirectorates.css"
const AdministrationMain = () => {
  const location = useLocation();

  return (
    <div className="AD-Main">
      <div className="ADallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="Chancellor"
          className={`menuButton ${
            location.pathname === "/AdministrationMain/Chancellor" ? "active" : ""
          }`}
        >
          Chancellor
        </Link>
        <Link
          to="ViceChancellor"
          className={`menuButton ${
            location.pathname === "/AdministrationMain/ViceChancellor" ? "active" : ""
          }`}
        >
          Vice Chancellor
        </Link>
        <Link
          to="Registrar"
          className={`menuButton ${
            location.pathname === "/AdministrationMain/Registrar" ? "active" : ""
          }`}
        >
          Registrar
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AdministrationMain;