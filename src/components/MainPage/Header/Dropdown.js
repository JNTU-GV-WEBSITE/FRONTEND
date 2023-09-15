import "./Dropdown.css";
import { Link } from "react-router-dom";
const Dropdown = () => {
  return (
    <div class="topnav" id="myTopnav">
      <div class="dropdown">
        <button class="dropbtn">HOME</button>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ABOUT US</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ACADEMICS</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/programsoffered">Programs offered</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main"> Admissions</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ConstituentCollegesOP">Constituent Colleges</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">  Affiliated Colleges</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ADMINISTRATION</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/chancellor" target="_self">CHANCELLOR</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ViceChancellor" target="_self">VICE CHANCELLOR</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Registrar" target="_self">REGISTRAR</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">DIRECTORATES</button>
        <div class="dropdown-content">
        <button>
            {" "}
            <Link className="link-btn" to="/AcademicAudit" target="_self">Academic Audit</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/AcademicPlanning" target="_self">Academic Planning</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Admissions" target="_self">Admissions</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/AlumniRelations" target="_self">Alumni Relations</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Empowerment" target="_self">Empowerment of Women & Grievances</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Evaluation" target="_self">Evaluation</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/FacultyDevelopmentCell" target="_self">Faculty Development Cell</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/ForeignUniversityRelations" target="_self">Foreign University Relations</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/IQAC" target='_self'>IQAC</Link>
          </button>
          <button>
          {" "}
            <Link className="link-btn" to="/Placements" target='_self'>IIIT & Placements</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Research" target='_self'>Research & Development</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/SportsAdministration" target='_self'>University Games & Sports Administration</Link>
          </button>

        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">EXAMINATIONS</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">JNTUGV UNITS</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">LOGIN</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link style={{}} className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
