import { Link, Outlet, useLocation } from "react-router-dom";
import "./Aboutus.css"; 
const AboutusMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="About-JNTUGV"
          className={`menuButton ${
            location.pathname === "/Aboutus/About-JNTUGV" ? "active" : ""
          }`}
        >
          About JNTUGV
        </Link>
        <Link
          to="Vision"
          className={`menuButton ${
            location.pathname === "/Aboutus/Vision" ? "active" : ""
          }`}
        >
          Vision
        </Link>
        <Link
          to="Mission"
          className={`menuButton ${
            location.pathname === "/Aboutus/Mission" ? "active" : ""
          }`}
        >
          Mission
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutusMain;