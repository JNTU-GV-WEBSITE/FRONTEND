import "./Dropdown.css";
import { Link } from "react-router-dom";
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
  return (
    <div class="topnav" id="myTopnav">
      <div class="dropdown">
        <div class="dropbtn">
          <HomeIcon />
          HOME
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
            <Link className="link-btn" to="/programsoffered">
              Programs offered
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/AdmissionsOP">
              {" "}
              Admissions
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ConstituentCollegesOP">
              Constituent Colleges
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">
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
            <Link className="link-btn" to="/chancellor" target="_self">
              chancellor
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ViceChancellor" target="_self">
              Vice Chancellor
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Registrar" target="_self">
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
            <Link className="link-btn" to="/AcademicAudit" target="_self">
              Academic Audit
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/AcademicPlanning" target="_self">
              Academic Planning
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Admissions" target="_self">
              Admissions
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/AlumniRelations" target="_self">
              Alumni Relations
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Empowerment" target="_self">
              Empowerment of Women & Grievances
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Evaluation" target="_self">
              Evaluation
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/FacultyDevelopmentCell"
              target="_self"
            >
              Faculty Development Cell
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/ForeignUniversityRelations"
              target="_self"
            >
              Foreign University Relations
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/IQAC" target="_self">
              IQAC
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Placements" target="_self">
              IIIT & Placements
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Research" target="_self">
              Research & Development
            </Link>
          </button>
          <button>
            {" "}
            <Link
              className="link-btn"
              to="/SportsAdministration"
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

      <div class="dropdown">
        <div class="dropbtn">
          <GridViewRoundedIcon />
          JNTUGV UNITS
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
      <div class="dropdown">
        <div class="dropbtn">
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
