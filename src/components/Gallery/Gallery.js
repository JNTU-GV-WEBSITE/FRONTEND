import React, { useState } from "react";
import "./Gallery.css";
import { CG } from "./CG";

function Gallery() {
  const recentImages = CG.slice(-15);
  const [selectedImage, setSelectedImage] = useState(null);
  const duplicatedImages = [
    ...recentImages,
    ...recentImages,
    ...recentImages,
    ...recentImages,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">GALLERY</h1>
      <div className="image-gallery">
        <div className="image-scroll">
          {duplicatedImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`JNTUGV ${image.description}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="enlarged-image">
          <img src={selectedImage.image} alt={`JNTUGV`} />
          <button onClick={handleClose}>Back</button>
        </div>
      )}

      {/* Hyperlink at the bottom right corner */}
      <a
        href="/gallery" // Replace with your desired link
        rel="noopener noreferrer"
        style={{
          color: "#ffffff", // White text color
        }}
      >
        Show All
      </a>
    </div>
  );
}

export default Gallery;
