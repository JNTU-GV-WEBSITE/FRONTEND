import { Link, Outlet, useLocation } from "react-router-dom";
import './Examinations.css'; 


const ExaminationMain = () => {
  const location = useLocation();

  return (
    <div style={{display:"flex"}}>
      <div className="allLeftMenuAOP">
        <Link
          to="/ExaminationMain/EvaluationExam"
          className={`menubutton ${
            location.pathname === "/ExaminationMain/EvaluationExam" ? "active" : ""
          }`}
        >
          Director Of Evaluation
        </Link>
        <Link
          to="/ExaminationMain/Controller"
          className={`menubutton ${
            location.pathname === "/ExaminationMain/Controller" ? "active" : ""
          }`}
        >
          Controller Of Examinations
        </Link>
        <Link
          to="/ExaminationMain/ControllerSDC"
          className={`menubutton ${
            location.pathname === "/ExaminationMain/ControllerSDC" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations SDC
        </Link>
        <Link
          to="/ExaminationMain/Controller1"
          className={`menubutton ${
            location.pathname === "/ExaminationMain/Controller1" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 1
        </Link>
        <Link
          to="/ExaminationMain/Controller2"
          className={`menubutton ${
            location.pathname === "/ExaminationMain/Controller2" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 2
        </Link>
        <Link
          to="/ExaminationMain/Controller3"
          className={`menubutton ${
            location.pathname === "/ExaminationMain/Controller3" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 3
        </Link>
        <Link
          to="/ExaminationMain/ControllerPG"
          className={`menubutton ${
            location.pathname === "/ExaminationMain/ControllerPG" ? "active" : ""
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
