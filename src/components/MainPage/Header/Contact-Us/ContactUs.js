import React from "react";
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

      {/* <div className="contact-card-place">
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
      </div> */}
    </div>
  );
}

export default ContactUs;
