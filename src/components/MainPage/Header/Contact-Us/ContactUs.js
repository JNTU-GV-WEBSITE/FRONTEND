/* import React from "react";
import "./ContactUs.css";
// import { Card, CardMedia, Typography } from "@mui/material";
// import { Data } from "./ContactUsData.js";

function ContactUs() {
  return (
    <div>
      <div
        className="mainContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="allRightContentHolderHeading ">Contact Us</div>
        <div className="allRightContentHolderContent centerAlign">
          <p className="centerAlign">
            For any issues/queries write us at registrarpeshi@jntugv.edu.in
          </p>
        </div>
      </div>

      { <div className="contact-card-place">
        {Data.map((item, index) => (
          <Card className="contact-card" key={index}>
            <Typography
              variant="h4"
              className="contact-card-text"
              sx={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {item.title}
            </Typography>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              style={{ width: "300px", height: "300px", objectFit: "contain" }}
            />
            <Typography variant="h6" className="contact-card-text">
              Name:{item.name}
            </Typography>

            <Typography variant="h6" className="contact-card-text">
              Email:{item.email}
            </Typography>
            <Typography variant="h6" className="contact-card-text">
              Contact: {item.contact}
            </Typography>
          </Card>
        ))}
      </div>}
    </div>
  );
}

export default ContactUs;  */

import React , { useEffect } from 'react';
import './ContactUs.css';

function ContactUs() {
  useEffect(() => {
    // Add a scroll event listener to handle the appearance of headings
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="contact-page">
      {/* College Section */}
      <div className="contact-details">
        <h2>College Details</h2>
        <p>
          <strong>Location:</strong> JNTU-Gurajada College Engineering Vizianagaram, Nh 43, Dwarapudi (Post), Vizianagaram, Andhra Pradesh, Andhra Pradesh 535003 · ~4.8 km
        </p>
        <p>
          <strong>Contact Number:</strong> 089222 77388
        </p>
        <p>
          <strong>Email:</strong> registrarpeshi@jntugv.edu.in
        </p>
        <p>
          <a href='https://jntugv.edu.in/'>jntugv.edu.in</a>
       </p>
        <div className="map-container">
          <iframe
            title="JNTU Vizianagaram Campus Map"
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20Engineering%20Vizianagaram,%20Nh%2043,%20Dwarapudi%20(Post),%20Vizianagaram,%20Andhra%20Pradesh,%20Andhra%20Pradesh%20535003+(Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20of%20Engineering%20Vizianagaram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>


      <hr className="fade-in" /> {/* Horizontal line between sections */}

      {/* Additional Contact Section */}
      <div className="additional-contact-section fade-in">
        <h2>Additional Contact Details</h2>

        <div className="contact-cards">
          {/* Member 1 */}
          <div className="member zoom-effect">
            <h3>Vice-chancellor Office</h3>
            <p>
              <strong>Contact Number:</strong> +91 89222 22606
            </p>
          </div>

          {/* Member 2 */}
          <div className="member zoom-effect">
            <h3>Registrar Peshi </h3>
            <p>
              <strong>Contact Number:</strong> +91 89222 94316
            </p>
          </div>

          {/* Member 3 */}
          <div className="member zoom-effect">
            <h3>Controller of Examination Office JNTUGV</h3>
            <p>
              <strong>Contact Number:</strong> +91 89222 94997
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default ContactUs;
