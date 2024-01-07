import React from "react";
import "./aboutUs.css";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

import chancellor from "../../assets/AdminDirectoratesImages/chancellor.jpeg";
import vc from "../../assets/AdminDirectoratesImages/vc.png";
import registrar from "../../assets/AdminDirectoratesImages/registrar.jpeg";

const AboutUs = () => {
  const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    background: "linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%)",
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
    width: "370px",
    height: "350px",
    flexShrink: " 0",
    alignItems: "center",
  });
  return (
    <div className="aboutUs">
      <div className="aboutUs-container">
        <StyledCard>
          <img src={chancellor} alt="chancellor" className="aboutUs-image" />
          <Typography className="aboutUs-name">
            Shri Justice(Retd.) S.Abdul Nazeer
          </Typography>
          <Typography className="aboutUs-designation">
            Governor of Andhra Pradesh
          </Typography>
          <Typography className="aboutUs-designation">
            Hon’ble Chancellor
          </Typography>
        </StyledCard>

        <StyledCard>
          <img src={vc} alt="chancellor" className="aboutUs-image" />
          <Typography className="aboutUs-name">
            Shri Justice(Retd.) S.Abdul Nazeer
          </Typography>
          <Typography className="aboutUs-designation">
            Hon’ble Vice Chancellor
          </Typography>
        </StyledCard>

        <StyledCard>
          <img src={registrar} alt="chancellor" className="aboutUs-image" />
          <div>
            <Typography className="aboutUs-name">
              Shri Justice(Retd.) S.Abdul Nazeer
            </Typography>
            <Typography className="aboutUs-designation">
              M.Tech (CS&T), Ph.D(CSE)
            </Typography>
            <Typography className="aboutUs-designation">Registrar </Typography>
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default AboutUs;
