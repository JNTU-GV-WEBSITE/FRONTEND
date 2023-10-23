import { Link, Outlet, useLocation } from "react-router-dom";
import './Examinations.css'; 


const ExaminationMain = () => {
  const location = useLocation();

  return (
    <div style={{display:"flex"}}>
      <div className="allLeftMenuAOP">
        <Link
          to="/Examination/EvaluationExam"
          className={`menubutton ${
            location.pathname === "/Examination/EvaluationExam" ? "active" : ""
          }`}
        >
          Director Of Evaluation
        </Link>
        <Link
          to="/Examination/Controller"
          className={`menubutton ${
            location.pathname === "/Examination/Controller" ? "active" : ""
          }`}
        >
          Controller Of Examinations
        </Link>
        <Link
          to="/Examination/ControllerSDC"
          className={`menubutton ${
            location.pathname === "/Examination/ControllerSDC" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations SDC
        </Link>
        <Link
          to="/Examination/Controller1"
          className={`menubutton ${
            location.pathname === "/Examination/Controller1" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 1
        </Link>
        <Link
          to="/Examination/Controller2"
          className={`menubutton ${
            location.pathname === "/Examination/Controller2" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 2
        </Link>
        <Link
          to="/Examination/Controller3"
          className={`menubutton ${
            location.pathname === "/Examination/Controller3" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 3
        </Link>
        <Link
          to="/Examination/ControllerPG"
          className={`menubutton ${
            location.pathname === "/Examination/ControllerPG" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations PG
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ExaminationMain;
