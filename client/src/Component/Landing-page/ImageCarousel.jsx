
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'; 

import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpg';
import { SamplePrevArrow, SampleNextArrow } from './CustomArrow';

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

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='gallery-container'>
            <h3>IMAGE GALLERY</h3>
                 <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id} className="carousel-item">
                        <img src={image} alt={image}  />
                    </div>
                ))}
            </Slider>
        </div>
        </div>
       
    );
};

export default ImageCarousel;