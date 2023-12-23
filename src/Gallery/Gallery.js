import React, { useState } from 'react';
import './Gallery.css';
import gal2 from '../assets/Gallery/gal2.jpeg';
import gal4 from '../assets/Gallery/gal4.jpeg';
import gal5 from '../assets/Gallery/gal5.jpeg';
import gal6 from '../assets/Gallery/gal6.jpeg';
import gal7 from '../assets/Gallery/gal7.jpeg';
import gal8 from '../assets/Gallery/gal8.jpg';
import gal9 from '../assets/Gallery/gal9.jpg';
import gal10 from '../assets/Gallery/gal10.jpg';
import gal11 from '../assets/Gallery/gal11.jpeg';

function Gallery() {
  const images = [gal2, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11];
  const totalWidth = images.length * 300; // 300px is the width of each image
  const duplicatedImages = [...images, ...images, ...images];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const isGal11 = selectedImage && selectedImage.image === gal11;

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">GALLERY</h1>
      <div className="image-gallery">
        <div className="image-scroll" style={{ width: totalWidth }}>
          {duplicatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${index}`}
              onClick={() => handleImageClick({ image })}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
  <div className="enlarged-image">
    <img src={selectedImage.image} alt="" />
    {(selectedImage.image === gal11) && (
      <p>During the Smart India Hackathon 2023 - Software Edition Grand Finale held at Veer Surendra Sai University of Technology (VSSUT) in Burla, Sambalpur, Odisha, a talented team from Jawaharlal Nehru Technological University-Gurajada, Vizianagaram, excelled in addressing the problem statement of Sentimental Analysis on Social Media Presence. The team, comprising Bandi Jaya Sai Srikar, Dudekula Meeravali, Aari Eswar, Penagaluru Bhanodhar, Pappala Archana, and Pyla Sandeep from the Information Technology branch, showcased their expertise, dedication, and innovative solutions. Their exceptional efforts resulted in commendable achievements, contributing significantly to the hackathon's success.</p>
    )}
    <button onClick={handleClose}>Back</button>
  </div>
      )}
    </div>
  );
}

export default Gallery;
