import React from "react";
import "./UpdatePanel.css";
import { useState } from "react";
import { Data } from "./Data";
function UpdatePanel() {
  const tenderList = [];
  const notificationList = [];
  const conferenceList = [];
  const recruitmentList = [];

  const [displayData, setDisplayData] = useState(notificationList);

  const [activeButton, setActiveButton] = useState("Notifications");

  const buttonStyles = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    margin: "5px",
    border: "none",
    cursor: "pointer",
    borderRadius: "15px",
  };

  const currentDate = new Date();
  const isCurrentMonth = currentDate.getMonth() === Data.month;

  Data.forEach((entry) => {
    if (entry.type === "notifications") {
      notificationList.push(entry);
    } else if (entry.type === "recruitment") {
      recruitmentList.push(entry);
    } else if (entry.type === "tender") {
      tenderList.push(entry);
    } else if (entry.type === "conference") {
      conferenceList.push(entry);
    }
  });

  const handleNotification = (button) => {
    setDisplayData(notificationList);
    setActiveButton(button);
  };
  const handleRecruitment = (button) => {
    setDisplayData(recruitmentList);
    setActiveButton(button);
  };
  const handleTender = (button) => {
    setDisplayData(tenderList);
    setActiveButton(button);
  };
  const handleConference = (button) => {
    setDisplayData(conferenceList);
    setActiveButton(button);
  };

  return (
    <div className="updateComponent">
      <div className="updateButtons">
        <button
          style={{
            ...buttonStyles,
            backgroundColor:
              activeButton === "Notifications" ? "#690001" : "white",
            color: activeButton === "Notifications" ? "white" : "black",
          }}
          onClick={() => handleNotification("Notifications")}
          target="_blank"
        >
          Notifications
        </button>
        <button
          style={{
            ...buttonStyles,
            backgroundColor:
              activeButton === "Recruitment" ? "#690001" : "white",
            color: activeButton === "Recruitment" ? "white" : "black",
          }}
          onClick={() => handleRecruitment("Recruitment")}
        >
          Recruitment 2023
          <img
            src="images/new.gif"
            alt="newimg"
            height="20vh"
            width="50vh"
          ></img>
        </button>
        <button
          style={{
            ...buttonStyles,
            backgroundColor:
              activeButton === "Conferences" ? "#690001" : "white",
            color: activeButton === "Conferences" ? "white" : "black",
          }}
          onClick={() => handleConference("Conferences")}
        >
          Conferences
        </button>
        <button
          style={{
            ...buttonStyles,
            backgroundColor: activeButton === "Tenders" ? "#690001" : "white",
            color: activeButton === "Tenders" ? "white" : "black",
          }}
          onClick={() => handleTender("Tenders")}
        >
          Tenders
        </button>
      </div>
      <div className="updatesContainer">
        {displayData.map((entry) => (
          <a href={entry.link || "#"} target="_blank" rel="noreferrer">
            <div>
              <div className="updateBox">
                <div className="dateTimeContainer">
                  <div className="dateDiv">{entry.date}</div>
                  <div className="monYear">
                    <div className="monthDiv">{entry.month}</div>
                    <div className="yearDiv">{entry.year}</div>
                  </div>
                </div>
                <div className="updateDescription">{entry.description}</div>
                {isCurrentMonth && (
                  <img
                    src="images/new.gif"
                    alt="newimg"
                    height="20vh"
                    width="50vh"
                  />
                )}
              </div>
              <div className="updateDivSeparator"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default UpdatePanel;
