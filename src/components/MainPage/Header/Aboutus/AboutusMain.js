import { Link, Outlet, useLocation } from "react-router-dom";
import "./Aboutus.css"; 
const AboutusMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUTmainContainer">
      <div className="ABOUTallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="AboutJNTUGV"
          className={`menuButton ${
            location.pathname === "/AboutusMain/AboutJNTUGV" ? "active" : ""
          }`}
        >
          About JNTUGV
        </Link>
        <Link
          to="Vision"
          className={`menuButton ${
            location.pathname === "/AboutusMain/Vision" ? "active" : ""
          }`}
        >
          Vision
        </Link>
        <Link
          to="Mission"
          className={`menuButton ${
            location.pathname === "/AboutusMain/Mission" ? "active" : ""
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