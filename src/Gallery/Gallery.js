import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    'https://th.bing.com/th/id/OIP.D659kgsegljpSGhlpaqeyQHaEc?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.Qxt8gDv3DZVGWQ8RykSt2AHaCk?w=335&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://assets.thehansindia.com/h-upload/2020/08/02/988062-jntu-vizianagaram.jpg',
    'https://th.bing.com/th/id/OIP._KgEoeUCp0qBL0-lpgNXmQHaHi?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.yXsJm3CukglGEU3QW_GcjwHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.AxRTa5iLV4NQrpYo2EGF1QHaEj?w=308&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.RicDyStGse3SuGblE_C-AwHaFj?w=253&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  ];

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
        <img key={index} src={image} alt={'Image ${index}'} onClick={() => handleImageClick({ image, name: 'Image ${index}' })} />
      ))}

        </div>
      </div>
      {selectedImage && (
        <div className="enlarged-image">
          <img src={selectedImage.image} alt={selectedImage.name} />
          <p>{selectedImage.name}</p>
          <button onClick={handleClose}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;