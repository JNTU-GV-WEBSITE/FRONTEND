import "./UpdatePanel.css";
import { useEffect, useState } from "react";
import { Data } from "./Data";
import { Button } from "@mui/material";
import axios from "axios";

function UpdatePanel() {
  const examinationList = [];
  const notificationList = [];
  const workshopList = [];
  const recruitmentList = [];
  const tendersList = [];
  const sportsList = [];
  
  const examinationApiList = [];
  const notificationApiList = [];
  const workshopApiList = [];
  const recruitmentApiList = [];
  const sportsApiList = [];
  const tendersApiList = [];

  const [displayData, setDisplayData] = useState(notificationList);

  const [apiData, setApiData] = useState(notificationApiList);

  const [activeButton, setActiveButton] = useState("Notifications");

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://api.jntugv.edu.in/api/updates/allnotifications"
      );
      const result = await response.data;
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const buttonStyles = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    margin: "5px",
    border: "none",
    cursor: "pointer",
    borderRadius: "15px",
  };

  data.forEach((entry) => {
    if (entry.update_type === "notification") {
      notificationApiList.push(entry);
      console.log(notificationApiList);
    } else if (entry.update_type === "recruitment") {
      recruitmentApiList.push(entry);
    } else if (entry.update_type === "examination") {
      examinationApiList.push(entry);
    } else if (entry.update_type === "workshop") {
      workshopApiList.push(entry);
    } else if (entry.update_type === "sports") {
      sportsApiList.push(entry);
    } else if (entry.update_type === "tender") {
      tendersApiList.push(entry);
    }
  });
 
  Data.forEach((entry) => {
    if (entry.type === "notifications") {
      notificationList.push(entry);
    } else if (entry.type === "recruitment") {
      recruitmentList.push(entry);
    } else if (entry.type === "examination") {
      examinationList.push(entry);
    } else if (entry.type === "workshop") {
      workshopList.push(entry);
    } else if (entry.type === "sports") {
      sportsList.push(entry);
    }
  });

  const handleNotification = (button) => {
    setApiData(notificationApiList);
    setDisplayData(notificationList);
    setActiveButton(button);
  };
  const handleRecruitment = (button) => {
    setApiData(recruitmentApiList);
    setDisplayData(recruitmentList);
    setActiveButton(button);
  };
  const handleexamination = (button) => {
    setApiData(examinationApiList);
    setDisplayData(examinationList);
    setActiveButton(button);
  };
  const handleWorkshop = (button) => {
    setApiData(workshopApiList);
    setDisplayData(workshopList);
    setActiveButton(button);
  };
  const handleSports = (button) => {
    setApiData(sportsApiList);
    setDisplayData(sportsList);
    setActiveButton(button);
  };

  const handleTenders = (button) => {
    setApiData(tendersApiList);
    setDisplayData(tendersList);
    setActiveButton(button);
  };

  useEffect(() => {
    fetchData();

    // handleNotification("Notifications");
  }, []);

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
          Recruitment
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
        </button>
        <button
          style={{
            ...buttonStyles,
            backgroundColor:
              activeButton === "Examinations" ? "#690001" : "white",
            color: activeButton === "Examinations" ? "white" : "black",
          }}
          onClick={() => handleexamination("Examinations")}
        >
          Exams
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
        <button
          style={{
            ...buttonStyles,
            backgroundColor: activeButton === "Tenders" ? "#690001" : "white",
            color: activeButton === "Tenders" ? "white" : "black",
          }}
          onClick={() => handleTenders("Tenders")}
        >
          Tenders
        </button>
      </div>

      <div className="updatesContainer">
        {apiData.map((entry) => (
          <a href={entry.file_link || "#"} target="_blank" rel="noreferrer">
            <div>
              <div className="updateBox">
                <div className="dateTimeContainer">
                  <div className="dateDiv">{entry.day}</div>
                  <div className="monYear">
                    <div className="monthDiv">{entry.month}</div>
                    <div className="yearDiv">{entry.year}</div>
                  </div>
                </div>
                <div className="updateDescription">
                  {entry.title}
                  <div>
                    <Button>
                      <a
                        href={entry.external_link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        {entry.external_text}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="updateDivSeparator"></div>
            </div>
          </a>
        ))}
      </div>

      <div className="updatesContainer">
        {displayData.map((entry) => (
          <a href={entry.file_link || "#"} target="_blank" rel="noreferrer">
            <div>
              <div className="updateBox">
                <div className="dateTimeContainer">
                  <div className="dateDiv">{entry.day}</div>
                  <div className="monYear">
                    <div className="monthDiv">{entry.month}</div>
                    <div className="yearDiv">{entry.year}</div>
                  </div>
                </div>
                <div className="updateDescription">
                  {entry.title}
                  <div>
                    <Button>
                      <a
                        href={entry.external_link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        {entry.external_text}
                      </a>
                    </Button>
                  </div>
                </div>
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
