// FadeIn.js
import { useState, useEffect } from 'react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeIn.css'; 

const FadeIn = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0, 
    triggerOnce: false, 
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;