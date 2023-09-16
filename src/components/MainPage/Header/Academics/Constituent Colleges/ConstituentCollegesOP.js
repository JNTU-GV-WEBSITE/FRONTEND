import "./ConstituentCollegesOP.css";
import { Link, useLocation } from "react-router-dom";

const ConstituentColleges = () => {
  const location = useLocation();
  return (
    <div className="mainContainer">
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
          to="/programsoffered"
          className={`menuButton ${
            location.pathname === "/programsoffered" ? "active" : ""
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
      <div className="allRightContent">
        <div className="clgheaddiv">Constituent Colleges</div>
        <br></br>
          <div className="clgdiv">
            <a
              className="clgnamediv"
              href="https://jntugvcev.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="clgtextdivOP">JNTU-GV College of Engineering, Vizianagaram</div>
            </a>
            <a
              className="clgnamediv"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <div className="clgtextdivOP">JNTU-GV Trible College of Engineering, Kurupam</div>
            </a>
          </div>
      </div>
    </div>
  );
};

export default ConstituentColleges;
