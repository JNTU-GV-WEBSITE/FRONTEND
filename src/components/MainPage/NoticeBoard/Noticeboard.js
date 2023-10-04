import React from "react";
import Annualday from "./Annualday.jpeg";
import RepublicDay from "./RepublicDay.jpg";
import WomensDay from "./WomensDay.jpg";
import "./Noticeboard.css";
import { Link } from "react-router-dom";

const Noticeboard = () => {
  return (
    <div className="complete">
      <div className="Mainbox">
        <div className="Subbox">
          <div className="image-container">
            <img src={Annualday} alt="Annualday" />
          </div>
          <div>
            <h1>Annual Day</h1>
            <h11>Posted date:13-05-2023</h11>
          </div>
          <p>
            The beginning of a year is an eventful time for schools and
            students. It is also the time when most schools organize the most
            important event of the year, the annual day. Celebrating the
            school's annual day provides the school with an opportunity to
            showcase its achievements. This function also gives students an
            opportunity to showcase their various talents and interact with
            their teachers in a more informal environment.
          </p>
          <br></br>
          <br></br>
          <div>
            <button className="read-more-button">
              <Link className="Linker" to="/readmore">
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="Subbox">
          <div className="image-container">
            <img src={RepublicDay} alt="RepublicDay" />
          </div>
          <div>
            <h1>Republic Day</h1>
            <h11>Posted date:13-05-2023</h11>
          </div>
          <p>
            The 73rd Republic Day is being celebrated on January 26 following
            the COVID-19 safety rules. Universitie will celebrate the Republic
            Day at their institutions following the mandatory Covid-19 SOPs. The
            event will be held in both physical and virtual mode as per the
            direction of the institutions.
          </p>
          <br></br>
          <div>
            <button className="read-more-button">
              <Link className="Linker" to={"/readmore"}>
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="Subbox">
          <div className="image-container">
            <img src={WomensDay} alt="WomensDay" />
          </div>
          <div>
            <h1>Womens Day</h1>
            <h11>Posted date:13-05-2023</h11>
          </div>
          <p>
            Educational institutions including colleges and universities across
            the world will also celebrate International Women's Day today. The
            colleges and universities organise public speeches, rallies,
            exhibitions, workshops and seminars on themes and concepts, debates,
            quiz competitions and lectures to mark the day.
          </p>
          <br></br>
          <br></br>
          <div>
            <button className="read-more-button">
              <Link className="Linker" to={"/readmore"}>
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticeboard;
