import React, { useEffect } from "react";
import "./UpdatePanel.css";
import { useState } from "react";
import { Data } from "./Data";
function UpdatePanel() {
  const tenderList = [];
  const notificationList = [];
  const workshopList = [];
  const recruitmentList = [];
  const sportsList = [];

  const [displayData, setDisplayData] = useState(notificationList);

  const [activeButton, setActiveButton] = useState("Notifications");

  const [events, setEvents] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://api.jntugv.edu.in/api/updates/getevents"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEvents(data); // Update state with the fetched data
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  Data.forEach((entry) => {
    if (entry.type === "notifications") {
      notificationList.push(entry);
    } else if (entry.type === "recruitment") {
      recruitmentList.push(entry);
    } else if (entry.type === "tender") {
      tenderList.push(entry);
    } else if (entry.type === "workshop") {
      workshopList.push(entry);
    } else if (entry.type === "sports") {
      sportsList.push(entry);
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
  const handleWorkshop = (button) => {
    setDisplayData(workshopList);
    setActiveButton(button);
  };
  const handleSports = (button) => {
    setDisplayData(sportsList);
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
          onClick={() => handleWorkshop("Conferences")}
        >
          Workshops{" "}
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
            backgroundColor: activeButton === "Tenders" ? "#690001" : "white",
            color: activeButton === "Tenders" ? "white" : "black",
          }}
          onClick={() => handleTender("Tenders")}
        >
          Tenders
        </button>
        <button
          style={{
            ...buttonStyles,
            backgroundColor: activeButton === "Sports" ? "#690001" : "white",
            color: activeButton === "Sports" ? "white" : "black",
          }}
          onClick={() => handleSports("Sports")}
        >
          Sports
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
                <div className="updateDescription">
                  {entry.description}
                  <div>
                    <a
                      href={entry.displaylink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.displaytext}
                    </a>
                  </div>
                </div>
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
