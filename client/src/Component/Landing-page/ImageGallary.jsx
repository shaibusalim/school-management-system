
import React from 'react';
import './ImageGallary.css'; 
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpg';

const images = [
    image1, 
    image2, 
    image3, 
    image4, 
    image5,
    image6, 
    image7, 
    image8, 
    image9,
];

const ImageGallary = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallary;