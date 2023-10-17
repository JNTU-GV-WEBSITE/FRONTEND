import "./Footer.css";
import { Link } from "react-router-dom";
import {
  Administration_Wing,
  Central_Facilites,
  Online_Courses,
  University_Hostels,
  Sports,
  JntuGv_Units,
} from "./FooterData.js";

function Footer() {
  return (
    <div className="mainFooter">
      <div className="subcontainer1Footer">
        <div>
          <p className="subFooter subheadingFooter">Admission</p>
        </div>
        <div className="subcontentFooter">
          <p className="headlinksFooter">DIRECTORATE OF ADMISSIONS </p>
          <p>INTERNATIONAL AFFAIRS </p>
        </div>
      </div>
      <div className="subcontainer2Footer">
        {/* Administration_Wing */}
        <div className="container1Footer">
          <p className="subheadingFooter">Administation Wing</p>
          <hr className="subFooter" />
          <div>
            {Administration_Wing.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Central_Facilites */}

        <div className="container2Footer">
          <p className="subheadingFooter">Central Facilities</p>
          <hr className="subFooter" />
          <div>
            {Central_Facilites.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          {/* Sports */}
          <p className="subheadingFooter">Sports</p>
          <hr className="subFooter" />
          <div>
            {Sports.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Online_Courses */}
        <div className="container3Footer">
          <p className="subheadingFooter">Online Courses</p>
          <hr className="subFooter" />
          <div>
            {Online_Courses.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          {/* University_Hostels */}
          <p className="subheadingFooter">University Hostels</p>
          <hr className="subFooter" />
          <div>
            {University_Hostels.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container4Footer">
          {/* JNTU GV UNITS */}
          <p className="subheadingFooter">Jntu-Gv Units</p>
          <hr className="subFooter" />
          <div>
            {JntuGv_Units.map((item, index) => (
              <div key={index}>
                <p>
                  <Link
                    to={item.link}
                    className="sublinksFooter"
                    target="_blankx "
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="footerHr" />
      <div className="subcontainer3Footer">
        {/* Contact Us */}
        <p className="subheadingFooter">Contact Us :</p>
        <p>
          JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY-GURAJADA
          VIZIANAGARAM,DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535 003, Andhra
          Pradesh, INDIA.
        </p>
        <br></br>

        {/* Copyright  */}
      </div>
      <div className="mobilefooter">
        <p>© Copyright 2023 JNTU-GV Vizianagaram. All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
