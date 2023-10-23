import { Link, Outlet, useLocation } from "react-router-dom";
import './Academics.css'

const AcademicsMain = () => {
  const location = useLocation();

  return (
    <div className="Academicmain-Main">
      <div className="allLeftMenuAOP">
        <Link
          to="/Academics/Programs-Offered"
          className={`menubutton ${
            location.pathname === "/Academics/Programs-Offered" ? "active" : ""
          }`}
        >
          Programs Offered
        </Link>
        <Link
          to="/Academics/Admissions"
          className={`menubutton ${
            location.pathname === "/Academics/Admissions" ? "active" : ""
          }`}
        >
          Admissions
        </Link>
        <Link
          to="/Academics/Constituent-Colleges"
          className={`menubutton ${
            location.pathname === "/Academics/Constituent-Colleges" ? "active" : ""
          }`}
        >
          Constituent Colleges
        </Link>
        <Link
          to="/Academics/Affliated-Colleges"
          className={`menubutton ${
            location.pathname === "/Academics/Affliated-Colleges" ? "active" : ""
          }`}
        >
          Affiliated Colleges
        </Link>
        
      </div>
      <Outlet />
    </div>
  );
};

export default AcademicsMain;
