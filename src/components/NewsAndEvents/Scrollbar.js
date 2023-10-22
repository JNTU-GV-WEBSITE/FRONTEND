import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import  'jquery.marquee';
import "./NewsAndEvents.css";
import CampaignIcon from '@mui/icons-material/Campaign';

const arr = [
    { hypertext: "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view?usp=share_link", text: "Academic Calendar for I Year MBA and MCA " },
    { hypertext: "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view?usp=share_link", text: "Academic Calendar for I Year M. Tech and M. Pharmacy " },
    { hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1695812280-34056APSCHE UNICEF Launched P2E Program.pdf", text: "APSCHE-BCDE-UNICEF-P2E Program " },
    { hypertext: "https://drive.google.com/file/d/1IrawmiHcz5rP2le0Q5pXrNyt75psQnzH/view?usp=sharing", text: "Academic Calender for II year B. Pharmacy AY 2023-24 " },
    { hypertext: "https://drive.google.com/file/d/1rCCC2qpgSXno7O-8qpwcr6SUfFHxGDtz/view?usp=sharing", text: "Ph.D-Tution Fee-Application. "},
    { hypertext: "https://drive.google.com/file/d/1tVcX10y17yM0nQHx6a06zkrtQtItclWZ/view?usp=sharing", text: "Ph.D-Tution Fee-Circular. "},
    { hypertext: "https://drive.google.com/file/d/1AGieJ4z5hizI-rPQXyuvgy2pucOFHpRt/view?usp=sharing", text: "IEEE Vizag Bay COMSOC/SPS Distinguished Lecture by Dr.Sudhir Dixit, San\u00a0Francisco,\u00a0USA. "},
    { hypertext: "https://drive.google.com/file/d/164BCaHh39X0JwmkRoQ5HqVUMfqZFGaHV/view?usp=sharing", text: "Most Urgent: Appointment of Student Grievances Redressal Committee (SGRC) and Ombud Persons in Constituent and Affiliated Colleges "}
]  

function Scrollbar()
{

    const el = useRef();

  useEffect(function() {
    const $el = $(el.current);

        $el.marquee({
        duration: 10000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'up',
        pauseOnHover: true
        });
    });
    
    //The Scrollbar component
    return (
        <div className="d1">
            <center><h1 className="h1"><CampaignIcon sx={{fontSize:'45px',transform:'scaleX(-1)'}}></CampaignIcon> NEWS AND EVENTS <CampaignIcon sx={{fontSize:'45px'}}></CampaignIcon></h1></center>
            <div className="m1" ref={el}>
                
                {arr.map((item, i) => (
                    <div>
                        <a href={item.hypertext}><div>{item.text}<img src="images/new.gif" alt="newimg" height="20vh" width="50vh"></img><hr /></div></a>
                    </div>
                ))}
                
            </div>
            <button className="btn w-100">Show All...</button>
        </div>
    );
}

export default Scrollbar;