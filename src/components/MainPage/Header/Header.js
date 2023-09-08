import Dropdown from "./Dropdown";
import myImage from "./jntugvcev.jpg";
import {GrMail} from "react-icons/gr"
import {CgStopwatch} from "react-icons/cg"

import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="logo-container">
          <img src={myImage} alt="JNTUV_LOGO" className="logo" />
          <h1 className="logo-text">
            Jawaharlal Nehru Technological University-Gurajada, Vizianagaram
          </h1>
        </div>

        <div className="item">
          <h11><GrMail/> | Email : support@jntugv.edu.in </h11><br></br>
          <hr/>
          <h11><GrMail/> | Email : enquiry@jntugv.edu.in</h11><br></br><br/>
          <h11><CgStopwatch/> | Office Timings : Mon-Sat : 10:00 AM to 5:00 PM</h11><br></br>
        </div>
      </div>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};
export default Header;
