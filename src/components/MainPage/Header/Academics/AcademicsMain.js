import { Link, useLocation } from "react-router-dom";

const AcademicsMain = () => {
  const location = useLocation;

  return (
    <div>
      <div className="allLeftMenu">
        <Link
          to="/programsoffered"
          className={`menuButton ${
            location.pathname === "/programsoffered" ? "active" : ""
          }`}
        >
          Programs Offered
        </Link>
        <Link
          to="/AdmissionsOP"
          className={`menuButton ${
            location.pathname === "/AdmissionsOP" ? "active" : ""
          }`}
        >
          Admissions
        </Link>
        <Link
          to="/ConstituentCollegesOP"
          className={`menuButton ${
            location.pathname === "/ConstituentCollegesOP" ? "active" : ""
          }`}
        >
          Constituent Colleges
        </Link>
        <Link
          to="/programsofferedOP"
          className={`menuButton ${
            location.pathname === "/programsofferedOP" ? "active" : ""
          }`}
        >
          Affiliated Colleges
        </Link>
      </div>
    </div>
  );
};

export default AcademicsMain;
