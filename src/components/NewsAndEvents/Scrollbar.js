/* eslint-disable no-restricted-syntax */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useRef} from 'react';
import "./NewsAndEvents.css";

const arr = [
    { hypertext: "https://exams.andhrauniversity.edu.in/FeePay/phd-convoc/guess-pass-req.php", text: "04/09/2023 :: GUEST PASS Registration for Andhra University 87-90 Convacations held on 09-09-2023 || Only one Person allowed from Family " },
    { hypertext: "https://www.andhrauniversity.edu.in/img/nptel.jpg", text: "16/08/2023 :: Andhra University has been awarded as \"Best New LC\" among the top 100 Local Chapters " },
    { hypertext: "https://exams.andhrauniversity.edu.in/FeePay/phd-convoc/homepage.php", text: "11/08/2023 :: Andhra University 87-90 Convacation Online Registration " },
    { hypertext: "https://www.andhrauniversity.edu.in/arirt2023/arirt-brochure-final.pdf", text: "13/07/2023 :: A National Seminar on Recent Trends on Appications of Radio Isotopes and Radiation Technologies ARIRT – 2023 organized by Department of Nuclear Physics, Andhra University.Visakhapatnam || Click Here for more Information" }
]  

function Scrollbar()
{
    //functions used for handling the mouse events onMouseEnter and onMouseLeave
    const marqueeRef = useRef(null);

    const handleMouseEnter = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop();
          }
    };

    const handleMouseLeave = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start();
          }
    };
    return (
        <div className="d1">
            <center><h1 className="h1">NEWS AND EVENTS</h1></center>
            <marquee ref={marqueeRef} direction="up" className="marquee-container" scrollamount={2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {arr.map((item, i) => (
                            <div className='marquee-content'>
                                <a href={item.hypertext}><div>{item.text}<img src="images/new.gif" alt="newimg" height="20vh" width="50vh"></img><hr /></div></a>
                            </div>
                        ))}
            </marquee>
            <button className="btn w-100">Show All...</button>
        </div>
    );
}

export default Scrollbar;