import React, { useState } from 'react';
import './Gallery.css';
// import gal1 from '../assets/Gallery/gal1.jpeg';
import gal2 from '../assets/Gallery/gal2.jpeg';
// import gal3 from '../assets/Gallery/gal3.jpeg';
import gal4 from '../assets/Gallery/gal4.jpeg';
import gal5 from '../assets/Gallery/gal5.jpeg';
import gal6 from '../assets/Gallery/gal6.jpeg';
import gal7 from '../assets/Gallery/gal7.jpeg';
import gal8 from '../assets/Gallery/gal8.jpg';
import gal9 from '../assets/Gallery/gal9.jpg';
import gal10 from '../assets/Gallery/gal10.jpg';


function Gallery() {
  const images = [ gal2,  gal4, gal5, gal6, gal7,gal8,gal9,gal10];

  const totalWidth = images.length * 300; // 300px is the width of each image

  // Duplicate the images to create a continuous loop
  const duplicatedImages = [...images, ...images, ...images];

  const [selectedImage, setSelectedImage] = useState(null);

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
        <div className="image-scroll" style={{ width: totalWidth }}>
          {duplicatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${index}`}
              onClick={() => handleImageClick({ image, name: `${index}` })}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="enlarged-image">
          <img src={selectedImage.image} alt={selectedImage.name} />
          {/* Remove the paragraph displaying the selectedImage name */}
          <button onClick={handleClose}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;