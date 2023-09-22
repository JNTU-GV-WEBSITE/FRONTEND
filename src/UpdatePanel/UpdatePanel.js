import React from 'react';
import './UpdatePanel.css';
import {useState} from "react";
import { Data } from './Data';
function UpdatePanel() {
  const tenderList = [];
  const notificationList = [];
  const conferenceList = [];

  const [notificationButtonColor,setNotificationButtonColor] = useState("#0ead56");
  const [tenderButtonColor,setTenderButtonColor] = useState("white");
  const [conferenceButtonColor,setConferenceButtonColor] = useState("white");
  const [displayData , setDisplayData] = useState(notificationList);
  Data.forEach((entry) => {
    if(entry.type === "notifications")
    {
        notificationList.push(entry);
    }
    else if(entry.type === "tender")
    {
        tenderList.push(entry);
    }
    if(entry.type === "conference")
    {
        conferenceList.push(entry);
    }
  })
  const notificationButtonStyle = {
    backgroundColor : notificationButtonColor,
    color : (notificationButtonColor) ? "black" : ""
  };
  const tenderButtonStyle = {
    backgroundColor : tenderButtonColor,
    color : (tenderButtonColor) ? "black" : ""
  };
  const conferenceButtonStyle = {
    backgroundColor : conferenceButtonColor,
    color : (conferenceButtonColor) ? "black" : ""
  };


  const handleNotification = () => {
    setNotificationButtonColor("#0ead56");
    setTenderButtonColor("white");
    setConferenceButtonColor("white");
    setDisplayData(notificationList);
  }
  const handleTender = () => {
    setNotificationButtonColor("white");
    setTenderButtonColor("#0ead56");
    setConferenceButtonColor("white");
    setDisplayData(tenderList);
  }
  const handleConference = () => {
    setNotificationButtonColor("white");
    setTenderButtonColor("white");
    setConferenceButtonColor("#0ead56");
    setDisplayData(conferenceList);
  }
 
  return (
    <div className='updateComponent'>
      <div className='updateButtons'>
        <button className="updateButton" style={notificationButtonStyle} onClick={handleNotification}>Notifications</button>
        <button className="updateButton" style={tenderButtonStyle} onClick={handleTender}>Tenders</button>
        <button className="updateButton" style={conferenceButtonStyle} onClick={handleConference}>Conferences</button>
      </div>
      <div className='updatesContainer'>
        {
          displayData.map((entry) => (
            <a href= {entry.link || "#"}>
            <div>
            <div className='updateBox'>
              <div className='dateTimeContainer'>
                <div className='dateDiv'>{entry.date}</div>
                <div className='monYear'>
                  <div className='monthDiv'>{entry.month}</div>
                  <div className='yearDiv'>{entry.year}</div>
                </div>
              </div>
              <div className='updateDescription'>
                {entry.description}
              </div>
            </div>
            <div className='updateDivSeparator'></div>
            </div></a>
          ))
        }
      </div>
    </div>
  );
}

export default UpdatePanel;
