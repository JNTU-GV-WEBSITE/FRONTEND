import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import  'jquery.marquee';
import "./NewsAndEvents.css";
import CampaignIcon from '@mui/icons-material/Campaign';

const arr = [
    { hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1696407000-20501AC for I Year MBA and MCA .pdf", text: "Academic Calendar for I Year MBA and MCA " },
    { hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1696406940-1250AC for I Year M.pdf", text: "Academic Calendar for I Year M. Tech and M. Pharmacy " },
    { hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1695812280-34056APSCHE UNICEF Launched P2E Program.pdf", text: "APSCHE-BCDE-UNICEF-P2E Program " },
    { hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1695790980-78550Academic Calander for II year B.pdf", text: "Academic Calender for II year B. Pharmacy AY 2023-24 " },
    { text: "Ph.D-Tution Fee-Application.", hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1695715440-1649125-09-2023-Ph.pdf" },
    { text: "Ph.D-Tution Fee-Circular.", hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1695715260-5663525-09-2023-Ph.pdf" },
    { text: "IEEE Vizag Bay COMSOC/SPS Distinguished Lecture by Dr.Sudhir Dixit, San\u00a0Francisco,\u00a0USA.", hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1695449340-12470Distinguished Lecture on 29 Sep' 2023.pdf" },
    { text: "Most Urgent: Appointment of Student Grievances Redressal Committee (SGRC) and Ombud Persons in Constituent and Affiliated Colleges",hypertext: "https://jntugv.edu.in/updates/9266a0f9fc226ffbf57a3beb4c6b6388/notifications/1695383340-65872sgrc.pdf"}
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