import "./BelowBar.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function BelowBar() {
  return (
    <div className="BelowBar">
      <div className="BelowBar-links">
        <a
          href="https://www.facebook.com/JNTUGurajada"
          className="Below-Social-links"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/jntugurajada/"
          className="Below-Social-links"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/JNTU_Gurajada"
          className="Below-Social-links"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/jntu_gurajada/"
          className="Below-Social-links"
        >
          {" "}
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@JNTUGV"
          className="Below-Social-links"
        >
          <FaYoutube />
        </a>
      </div>
      <div className="belowbar-seconddiv">
        {/* <a
          href="https://mail.google.com/a/jntugv.edu.in"
          className="Below-Social-links"
        >
          Login
        </a> */}
        <a
          href="https://mail.google.com/a/jntugv.edu.in"
          className="Below-Social-links"
        >
          {" "}
          Students Grievance
        </a>
      </div>
    </div>
  );
}

export default BelowBar;
