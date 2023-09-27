import React from "react";
import top from "../../assets/top.png";
const TopLayer = () => {
  const styles = {
    width: "100%",
    height: "200px",
  };

  return (
    <div>
      <img src={top} alt="University Logo" style={styles} />
    </div>
  );
};

export default TopLayer;
