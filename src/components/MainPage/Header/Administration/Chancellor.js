import React from 'react';
import './Chancellor.css'; // Import your CSS file here

function Chancellor() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
        {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
        <a href="https://jntugv.edu.in/chancellor" className="active">Chancellor</a>
        <a href="https://jntugv.edu.in/vice-chancellor">Vice Chancellor</a>
        <a href="https://jntugv.edu.in/registrar">Registrar</a>
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Chancellor
        </div>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="profileImage">
            <img src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/profilephotos/apgoverner.jpeg" alt="Profile" />
          </div>
          <div className="profileName">
            <h3>Shri Justice(Retd.) Syed Abdul Nazeer</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Hon’ble Governor of Andhra Pradesh</h4>
          </div>
          <hr />
          {/* Profile description */}
          <p>Syed Abdul Nazeer (born 5 January 1958) is a former judge of the Supreme Court of India, who is currently serving as the 24th Governor of Andhra Pradesh. He is also former judge of Karnataka High Court. He was appointed as the Governor of Andhra Pradesh on 12 February 2023. </p>
          <p>Syed Abdul Nazeer is a former judge of the Supreme Court of India, who is currently serving as the 3rd Governor of Andhra Pradesh.</p>
        </div>
      </div>
    </div>
  );
}

export default Chancellor;
