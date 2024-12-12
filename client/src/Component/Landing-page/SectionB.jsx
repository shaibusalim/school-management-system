import React from 'react'
import './SectionB.css'
import image from '../../assets/images/image9.jpg';
import FadeIn from './FadeIn';

function SectionB() {
  return (
    <div className='section-b-container'>
                <div className='section-b-content'>
                  
                         <div className='section-b-form'>
                                <h3>Search your Subject here</h3>
                         
                            <form> 
                                <input type='text' placeholder='Subjext'/>
                                <input type='text' placeholder='Class'/>
                                <input type='text' placeholder='Date'/>
                                <input type='text' placeholder='Teacher'/>
                                <input type='text' placeholder='Fees'/>
                                <button>Search </button>
                            </form>
                         </div>
                        
                            
                            <div className='about-section'>
                                    
                                                <div className='about-1'>
                                                    <h4>Hell0, We are Adminity</h4>
                                                    <p>
                                                    Donec molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus eleifend, et auctor lorem hendrerit. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris. In molestie quis risus commodo gravida.
                                                    </p>
                                                    <p>
                                                    Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris. In molestie quis risus commodo gravida.
                                                    </p>

                                                    <button>Read More</button>
                                                </div>
                                                <div className='about-img'>
                                                        <img src={image}/>
                                                </div>
                                 </div>
                               
                            </div>
               
    </div>
  )
}

export default SectionB