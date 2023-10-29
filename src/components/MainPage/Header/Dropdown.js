import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";
// import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Dropdown = () => {
  const navigate = useNavigate();

  const [menuState, setMenuState] = useState(false);

  const homeHandler = () => {
    navigate("/");
  };

  const contactHandler = () => {
    navigate("/ContactUs");
  };
  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"} >
        <div class="dropdown">
          <div class="dropbtn" onClick={homeHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <HomeIcon /> HOME
            </div>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <ApartmentIcon /> ABOUT US
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/Aboutus/About-JNTUGV">
                About JNTU-GV
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Aboutus/Vision">
                Vision
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Aboutus/Mission">
                Mission
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <SchoolIcon /> ACADEMICS
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link className="link-btn" to="/Academics/Programs-Offered">
                Programs offered
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Academics/Admissions">
                {" "}
                Admissions
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Academics/Constituent-Colleges">
                Constituent Colleges
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Academics/Affliated-Colleges">
                {" "}
                Affiliated Colleges
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <GroupsIcon /> ADMINISTRATION
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Administration/Chancellor"
                target="_self"
              >
                Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Administration/ViceChancellor"
                target="_self"
              >
                Vice Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Administration/Registrar"
                target="_self"
              >
                Registrar
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <PersonIcon />
            DIRECTORATES
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/AcademicAudit"
                target="_self"
              >
                Academic Audit
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/AcademicPlanning"
                target="_self"
              >
                Academic Planning
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/Admissions"
                target="_self"
              >
                Admissions
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/AlumniRelations"
                target="_self"
              >
                Alumni Relations
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/Empowerment"
                target="_self"
              >
                Empowerment of Women & Grievances
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/Evaluation"
                target="_self"
              >
                Evaluation
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/FacultyDevelopmentCell"
                target="_self"
              >
                Faculty Development Cell
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/ForeignUniversityRelations"
                target="_self"
              >
                Foreign University Relations
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Directorates/IQAC" target="_self">
                IQAC
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/Placements"
                target="_self"
              >
                IIIT & Placements
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/Research"
                target="_self"
              >
                Research & Development
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/Directorates/SportsAdministration"
                target="_self"
              >
                University Games & Sports Administration
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <DescriptionIcon /> EXAMINATIONS
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link className="link-btn" to="/Examination/EvaluationExam">
                Director of Evaluation
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Examination/Controller">
                Controller of Examinations
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Examination/ControllerSDC">
                Additional Controller of Examinations-SDC
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Examination/Controller1">
                Additional Controller of Examinations-1
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Examination/Controller2">
                Additional Controller of Examinations-2
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Examination/Controller3">
                Additional Controller of Examinations-3
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/Examination/ControllerPG">
                Additional Controller of Examinations-PG
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="https://results.jntugv.edu.in"
                target="_blank"
              >
                Examination Results
              </Link>
            </button>
          </div>
        </div>
        {/* 
      <div class="dropdown">
        <div class="dropbtn">
          <GridViewRoundedIcon />
          JNTUGV UNITS
        </div>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/JntuGvUnits/DMC" target="blank">
              DMC
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/JntuGvUnits/IQACUnits"
              target="blank"
            >
              IQAC{" "}
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/JntuGvUnits/Sports" target="blank">
              Sports{" "}
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/JntuGvUnits/LibraryUnit"
              target="blank"
            >
              Library{" "}
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/JntuGvUnits/IncubationCenter"
              target="blank"
            >
              Incubation Center{" "}
            </Link>
          </button>
        </div>
      </div> */}
        <div class="dropdown">
          <div className="dropbtn" onClick={contactHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <DraftsIcon /> CONTACTUS
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Dropdown;
