import { Link, Outlet, useLocation } from "react-router-dom";
import "../Administration/AdminandDirectorates.css";
const DirectoratesMain = () => {
  const location = useLocation();

  return (
    <div className="mainContainer">
      <div className="ADallLeftMenu">
      <Link
          to="AcademicAudit"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/AcademicAudit" ? "active" : ""
          }`}
        >
          Director of Academic Audit
        </Link>
        <Link
          to="AcademicPlanning"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/AcademicPlanning" ? "active" : ""
          }`}
        >
          Director of Academic Planning
        </Link>
        <Link
          to="Admissions"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/Admissions" ? "active" : ""
          }`}
        >
          Director of Admissions
        </Link>
        <Link
          to="AlumniRelations"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/AlumniRelations" ? "active" : ""
          }`}
        >
          Director of Alumni Relations
        </Link>
        <Link
          to="Empowerment"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/Empowerment" ? "active" : ""
          }`}
        >
          Empowerment of Women & Grievances
        </Link>
        <Link
          to="Evaluation"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/Evaluation" ? "active" : ""
          }`}
        >
          Evaluation
        </Link>
        <Link
          to="FacultyDevelopmentCell"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/FacultyDevelopmentCell" ? "active" : ""
          }`}
        >
          Faculty Development Cell
        </Link>
        <Link
          to="ForeignUniversityRelations"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/ForeignUniversityRelations" ? "active" : ""
          }`}
        >
          Foreign University Relations
        </Link>
        <Link
          to="IQAC"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/IQAC" ? "active" : ""
          }`}
        >
          Director of IQAC
        </Link>
        <Link
          to="Placements"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/Placements" ? "active" : ""
          }`}
        >
          Director of IIIT & Placements
        </Link>
        <Link
          to="Research"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/Research" ? "active" : ""
          }`}
        >
          Director of Research & Development
        </Link>
        <Link
          to="SportsAdministration"
          className={`menuButton ${
            location.pathname === "/DirectoratesMain/SportsAdministration" ? "active" : ""
          }`}
        >
          Director of University Games & Sports Administration
        </Link> 
      </div>
      <Outlet />
    </div>
  );
};

export default DirectoratesMain;
