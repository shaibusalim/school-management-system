import { useState, useEffect } from 'react';
import React from 'react'
import NavBar from './NavBar'
import './Home.css'
import image from '../../assets/images/image8.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SectionB from './SectionB';
import LoginForm from '../Login/LoginForm';
import FadeIn from './FadeIn';
import ImageGallary from './ImageGallary';


function Home() {

  const texts = [
    "Welcome to Adminity! Empowering minds through knowledge and innovation.",
    "Discover a world of learning designed to inspire creativity and excellence.",
    "Our dedicated teachers and modern facilities ensure success for every student.",
    "Join Adminity today and be part of a brighter future in education.",
    "Where education meets technology—unlock your potential at Adminity.",
];




const [currentIndex, setCurrentIndex] = useState(0);
const [displayedText, setDisplayedText] = useState("");
const [textIndex, setTextIndex] = useState(0);
const [showLoginForm, setShowLoginForm] = useState(false);

useEffect(() => {
    const typeText = () => {
        if (textIndex < texts[currentIndex].length) {
            setDisplayedText((prev) => prev + texts[currentIndex][textIndex]);
            setTextIndex(textIndex + 1);
        } else {
            setTimeout(() => {
                setTextIndex(0);
                setDisplayedText("");
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }, 2000); // Delay before switching text
        }
    };

    const interval = setTimeout(typeText, 100); // Typing speed
    return () => clearTimeout(interval);
}, [textIndex, currentIndex, texts]);

const handleGetStartedClick = () => {
  setShowLoginForm(true); // Show the login form
};

const handleCloseLoginForm = () => {
  setShowLoginForm(false); // Hide the login form
};
  return (
    <div className='landingpage-container'>
                <div className='landingpage-nav'>
                        <NavBar/>
                </div>
                <div className='first-section' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`}}>
                    <div className='first-section-content'>
                      <FadeIn>
                          <div className='content-1'>
                                <h2>A Journey of Learning and Growth Starts Here.</h2>
                                <p>
                                  {displayedText}
                                </p>
                                <div className='ladingpage-search'>
                                  <input type='search' placeholder='search courses'/>
                                  <button>Search</button>
                                </div>
                                <div className='landingpage-button'>
                                   
                                  <button onClick={handleGetStartedClick}>Get Started</button>
                                  
                                </div>
                            </div>
                            </FadeIn>
                            <FadeIn>
                             <div className='content-2'>
                                          <div className='card-1 cd'>
                                            <i className="fas fa-chalkboard-teacher" style={{ fontSize: '35px', marginTop: '20px'}}></i>
                                            <div>
                                              <h4>New Classes</h4>
                                              <p>
                                                In the history of modern<br/> astronomy, ther is probably no<br/>  one greater leap forward<br/>  building and launch.
                                              </p>
                                            </div>

                                          </div>
                                           <div className='card-2 cd'>
                                           <i className="fas fa-graduation-cap"  style={{ fontSize: '35px', marginTop: '20px'}}></i>
                                            <div>
                                              <h4>Top Courses</h4>
                                              <p>
                                                In the history of modern<br/>  astronomy, ther is probably no<br/>  one greater leap forward<br/>  building and launch.
                                              </p>
                                            </div>
                                          </div>
                                           <div className='card-3 cd'>
                                           <i className="fas fa-book"  style={{ fontSize: '35px', marginTop: '20px'}}></i>
                                            <div>
                                              <h4>New E-Book</h4>
                                              <p>
                                                In the history of modern<br/>  astronomy, ther is probably no<br/>  one greater leap forward<br/>  building and launch.
                                              </p>
                                            </div>
                                          </div>
                                      </div>
                                      </FadeIn>
                    </div>
                </div>
                <FadeIn>
                <div className='content-3'>
                        <SectionB/>
                </div>
                </FadeIn>
                <FadeIn>
        <div className='image-gallery-section'>
          <ImageGallary /> {/* Add the ImageGallery component here */}
        </div>
      </FadeIn>
                {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />} {/* Render the login form */}  
    </div>
  )
}

export default Home;