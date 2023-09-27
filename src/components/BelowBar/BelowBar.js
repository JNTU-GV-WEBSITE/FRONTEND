import React, { useState, useEffect } from "react";
import "./BelowBar.css";

function BelowBar() {
  return (
    <div className="App">
      <BelowBarComponent />
    </div>
  );
}

function BelowBarComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="BelowBar">
      <div className="BelowBar-content">
        <div className="location">India, Andhra Pradesh, Visakhapatnam.</div>
        <div className="datetime">
          {currentTime.toLocaleString("en-IN", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </div>
      </div>
      <div className="BelowBar-links">
        <a
          href="https://github.com/JNTU-GV-WEBSITE/FRONTEND"
          className="nav-link"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default BelowBar;
