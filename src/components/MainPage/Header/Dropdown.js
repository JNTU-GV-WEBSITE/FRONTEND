import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";
import LoginIcon from "@mui/icons-material/Login";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";

const Dropdown = () => {
  const navigate = useNavigate();

  const contactHandler = () => {
    navigate("/ContactUs");
  };
  return (
    <div class="topnav" id="myTopnav">
      <div class="dropdown">
        <div class="dropbtn">
          <Link className="drop-icon" to="/">
            <HomeIcon />
            HOME
          </Link>
        </div>
      </div>
      <div class="dropdown">
        <div class="dropbtn">
          <ApartmentIcon /> ABOUT US
        </div>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/AboutJNTUGV">
              About JNTU-GV
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Vision">
              Vision
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Mission">
              Mission
            </Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <div class="dropbtn">
          <SchoolIcon /> ACADEMICS
        </div>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/AcademicsMain/ProgramsofferedOP">
              Programs offered
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/AcademicsMain/AdmissionsOP">
              {" "}
              Admissions
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/AcademicsMain/ConstituentCollegesOP"
            >
              Constituent Colleges
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/AcademicsMain/ConstituentCollegesOP"
            >
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
        <div class="dropdown-content">
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/AdministrationMain/Chancellor"
              target="_self"
            >
              Chancellor
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/AdministrationMain/ViceChancellor"
              target="_self"
            >
              Vice Chancellor
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/AdministrationMain/Registrar"
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
        <div class="dropdown-content">
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/AcademicAudit"
              target="_self"
            >
              Academic Audit
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/AcademicPlanning"
              target="_self"
            >
              Academic Planning
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/Admissions"
              target="_self"
            >
              Admissions
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/AlumniRelations"
              target="_self"
            >
              Alumni Relations
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/Empowerment"
              target="_self"
            >
              Empowerment of Women & Grievances
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/Evaluation"
              target="_self"
            >
              Evaluation
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/FacultyDevelopmentCell"
              target="_self"
            >
              Faculty Development Cell
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/ForeignUniversityRelations"
              target="_self"
            >
              Foreign University Relations
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/IQAC"
              target="_self"
            >
              IQAC
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/Placements"
              target="_self"
            >
              IIIT & Placements
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/Research"
              target="_self"
            >
              Research & Development
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/DirectoratesMain/SportsAdministration"
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
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/ExaminationMain/EvaluationExam">
              Director of Evaluation
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ExaminationMain/Controller">
              Controller of Examinations
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ExaminationMain/ControllerSDC">
              Additional Controller of Examinations-SDC
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ExaminationMain/Controller1">
              Additional Controller of Examinations-1
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ExaminationMain/Controller2">
              Additional Controller of Examinations-2
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ExaminationMain/Controller3">
              Additional Controller of Examinations-3
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ExaminationMain/ControllerPG">
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
      </div>
      <div class="dropdown">
        <div className="dropbtn" onClick={contactHandler}>
          <DraftsIcon /> CONTACTUS
        </div>
      </div>
      <div class="dropdown">
        <div class="dropbtn">
          <LoginIcon />
          LOGIN
        </div>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">
              Link 1
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">
              Link 2
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">
              Link 3
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
