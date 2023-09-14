import './Footer.css'
import { Link } from 'react-router-dom';
import {Administration_Wing,Central_Facilites,Online_Courses,University_Hostels,Sports} from './FooterData.js';

function Footer(){
    return(
        <div className="main">
            <div className="subcontainer1" >
                <div>
                    <p className="sub subheading">Admission</p>
                </div>
                <div className="subcontent">
                    <p className="headlinks">DIRECTORATE OF ADMISSIONS  </p>
                    <p className="headlinks">INTERNATIONAL AFFAIRS </p>
                    <p>SCHOOL OF DISTANCE EDUCATION</p>
                </div>
               
            </div>
                <div className="subcontainer2">

{/* Administration_Wing */}
                <div className="container1"> 
                <p className="subheading">Administation Wing</p>
                <hr className="subFooter" />
                    <div>
                    {Administration_Wing.map((item, index) => (<div key={index}><p><Link to = {item.link} className="sublinks">{item.title}</Link></p></div>
                    ))}
                    </div>
                    </div>

{/* Central_Facilites */}

                <div className="container2"> 
                    
                    <p className="subheading">Central Facilities</p>
                    <hr className="subFooter" />
                    <div>
                    {Central_Facilites.map((item, index) => (<div key={index}><p><Link to = {item.link} className="sublinks">{item.title}</Link></p></div>
                    ))}
                    </div>
                    
                </div>

{/* Online_Courses */}
                <div className="container3"> 

                <p className="subheading">Online Courses</p> 
                <hr className="subFooter" /><div>
                    {Online_Courses.map((item, index) => (<div key={index}><p><Link to = {item.link} className="sublinks">{item.title}</Link></p></div>
                    ))}
                    </div>
                
                </div>

{/* Sports */}

                           <div className="container4">

                <p className="subheading">Sports</p>
                <hr className="subFooter" />
                <div>
                    {Sports.map((item, index) => (<div key={index}><p><Link to = {item.link} className="sublinks">{item.title}</Link></p></div>
                    ))}
                    </div>

{/* University_Hostels */}

                <p className="subheading">University Hostels</p>
                <hr className="subFooter" />
                <div>
                    {University_Hostels.map((item, index) => (<div key={index}><p><Link to = {item.link} className="sublinks">{item.title}</Link></p></div>
                    ))}
                    </div>
                    
                </div>
            </div>
            <hr className="footerHr" />
            <div className="subcontainer3">

{/* Contact Us */}
                <p className="subheading">Contact Us :</p> 
                <p>JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY-GURAJADA VIZIANAGARAM,DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535 003, Andhra Pradesh, INDIA.</p>
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