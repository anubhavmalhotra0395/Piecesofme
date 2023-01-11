import React from 'react'
import Slider from "react-slick";
import './Slider.css'
import Image1 from '../images/ring1.webp'
import Image2 from '../images/ring2.webp'
import Image3 from '../images/ring3.webp'
import Image4 from '../images/honey1.webp'
import Image5 from '../images/1.webp'
import Image6 from '../images/2.webp'
import Image7 from '../images/3.webp'
import Image8 from '../images/4.webp'
import Image9 from '../images/5.webp'
import Image10 from '../images/6.webp'
import Image11 from '../images/7.webp'
import Image12 from '../images/8.webp'
import Image13 from '../images/9.webp'
import Image14 from '../images/10.webp'



  



function Sliders() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
     
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='container mt-5'>
     <h4 className='slider-header'>THE GALLERY</h4>
   
        <Slider {...settings}>
        <div >
          <img src={Image11} alt='slider' className='img-fluid' />
          
          </div>
          <div >
          <img src={Image7}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image13}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image14}  alt='slider'  className='img-fluid'/>
          </div>
          <div>
            <img src={Image5}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image12}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image6}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image9}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image8}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image10}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image11}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image7}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image13}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image14}  alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image1} alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image2} alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image3} alt='slider'  className='img-fluid'/>
          </div>
          <div >
          <img src={Image4}  alt='slider' className='img-fluid'/>
          </div>



        </Slider>

      </div>
  )
}

export default Sliders


