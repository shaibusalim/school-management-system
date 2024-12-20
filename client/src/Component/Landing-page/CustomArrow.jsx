
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`}
            style={{ ...style, display: 'block', background: 'lightgray', borderRadius: '50%', padding: '10px' }}
            onClick={onClick}
        >
            <AiOutlineArrowLeft style={{ color: 'black' }} />
        </div>
    );
};

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`}
            style={{ ...style, display: 'block', background: 'lightgray', borderRadius: '50%', padding: '10px' }}
            onClick={onClick}
        >
            <AiOutlineArrowRight style={{ color: 'black' }} />
        </div>
    );
};