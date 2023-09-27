
import { Link, Outlet, useLocation } from "react-router-dom";
import './Academics.css'

const AcademicsMain = () => {
  const location = useLocation();

  return (
    <div>
      <div className="allLeftMenuAOP">

        <Link
          to="/AcademicsMain/ProgramsofferedOP"
          className={`menubutton ${
            location.pathname === "/AcademicsMain/ProgramsofferedOP" ? "active" : ""
          }`}
        >
          Programs Offered
        </Link>
        <Link
          to="/AcademicsMain/AdmissionsOP"
          className={`menubutton ${
            location.pathname === "/AcademicsMain/AdmissionsOP" ? "active" : ""
          }`}
        >
          Admissions
        </Link>
        <Link
          to="/AcademicsMain/ConstituentCollegesOP"
          className={`menubutton ${
            location.pathname === "/AcademicsMain/ConstituentCollegesOP" ? "active" : ""
          }`}
        >
          Constituent Colleges
        </Link>
        <Link
          to="/AcademicsMain/AffliatedCollegesOP"
          className={`menubutton ${
            location.pathname === "/AcademicsMain/AffliatedCollegesOP" ? "active" : ""
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
