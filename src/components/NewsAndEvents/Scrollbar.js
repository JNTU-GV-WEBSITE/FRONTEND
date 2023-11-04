import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery.marquee";
import "./NewsAndEvents.css";
import CampaignIcon from "@mui/icons-material/Campaign";

const arr = [
  {
    hypertext:
      "https://drive.google.com/file/d/18rWsMfC8RGnEugCcDhP3h5wnpj4sxS4o/view?usp=share_link",
    text: "IV B.Tech - I Sem Reg & Supple Exams Notification-December-2023",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1dqy_rgi86_u9CMydWSrV50LO65Ddy4Xz/view?usp=share_link",
    text: "IV B.Pharmacy - I Sem Reg & Supple Exams Notification-December-2023",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1kEWYzYKvIU7mupDJ37AJARETVZ1aD3vN/view?usp=share_link",
    text: "List of Examiners for Spot Valuation of MBA- IV Semester Regular & Supply-July-2023",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1KTU0LGyTzSQN6SwKRTiUoCC8HYkxP56H/view?usp=share_link",
    text: "Academic Calander for III Pharm D Academic Year 2023-24",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1C98jPJyDk3AY9ZgcZ0l2YCfmxzBIq9y5/view?usp=share_link",
    text: "Academic Calander for II Pharm D Academic Year 2023-24",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1kEWYzYKvIU7mupDJ37AJARETVZ1aD3vN/view?usp=share_link",
    text: "MBA -III Sem Reg & Supply Exams Notification,Dec 2023",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1yp_Kqj8nPwu2hdmUg38SQ-BWkqWwf1u3/view?usp=share_link",
    text: "MTECH -III Sem Reg & Supply Exams Notification,Dec 2023",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1VSTiSf7kSLO0bszctgAEmxKHN_znYMfS/view?usp=share_link",
    text: "MCA -III Sem R&S Notification , Dec 2023",
  },
];

const recruitment = [
  {
    hypertext:
      "https://drive.google.com/file/d/1SXtfk8ZVcFUZr9wHGHquhwNBiHtuBsZg/view?usp=sharing",
    text: "RRM Notification for AY 2019-20 & Ealier Batches",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1MkePk2qr6fExE33Wp1L8SwMH5q9NtEaq/view?usp=sharing",
    text: "RRM-Application Format",
  },

  {
    hypertext:
      "https://drive.google.com/file/d/1vD1BH9VNxFZ3660Tq9TYUWAp8fHMhrXE/view?usp=sharing",
    text: "Limited Recruitment notification for SC/ST Backlog Vacancies",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1ZVrwi5iApIEZr5-2eg9MAeXgijEBWcKp/view?usp=sharing",
    text: `Recruitment notification for Assistant Professors and Academic Non-Vacation Positions
    (BC Backlog and Regular Vacancies)`,
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1BqL8z-1_G_bR-9qjz5SQrF3ItE-nnMdw/view?usp=sharing",
    text: "JNTUGV-Detailed Notification for Associate Professors",
  },
  {
    hypertext:
      "https://drive.google.com/file/d/1LkPzCEEBGsK6xVvva3uXtDGEv9hEmHu1/view?usp=sharing",
    text: "JNTUGV-Detailed Notification for Professors",
  },
];

function Scrollbar() {
  const el = useRef();

  useEffect(function () {
    const $el = $(el.current);

    $el.marquee({
      duration: 10000,
      gap: 50,
      delayBeforeStart: 0,
      direction: "up",
      pauseOnHover: true,
    });
  });

  //The Scrollbar component
  return (
    <div className="d1">
      <center>
        <h1 className="h1">
          <CampaignIcon
            sx={{ fontSize: "45px", transform: "scaleX(-1)" }}
          ></CampaignIcon>{" "}
          NEWS AND EVENTS{" "}
          <CampaignIcon sx={{ fontSize: "45px" }}></CampaignIcon>
        </h1>
      </center>
      <div className="m1" ref={el}>
        {recruitment.map((item, i) => (
          <div>
            <a href={item.hypertext}>
              <div>
                {item.text}
                <img
                  src="images/new.gif"
                  alt="newimg"
                  height="20vh"
                  width="50vh"
                ></img>
                <hr />
              </div>
            </a>
          </div>
        ))}
        {arr.map((item, i) => (
          <div>
            <a href={item.hypertext}>
              <div>
                {item.text}
                <hr />
              </div>
            </a>
          </div>
        ))}
      </div>
      <button className="scroll-button">Show All...</button>
    </div>
  );
}

export default Scrollbar;
