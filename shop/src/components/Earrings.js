import React from 'react'
import Slider from "react-slick";
import HoverImage from "react-hover-image";
import './Earrings.css'
import { Products } from './Products';
import { HashLink as Link } from 'react-router-hash-link';

function Earrings() {
  console.log(Products)
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
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='container-fluid mt-5'>
     <h4 className='slider-header'>EARRINGS</h4>
   
        <Slider {...settings}>
    {Products.filter((item, index) => index<8).map((filteredItem) =>{
        return (<Link to={'/items'} 
            state= {{
            id:filteredItem.id,
            img:filteredItem.image,
            img2:filteredItem.image2,
            title:filteredItem.title,
            price:filteredItem.price,
            description:filteredItem.description
        }}  
           className='nav-links'><div>
            <div key={filteredItem.id}>
        <HoverImage src={filteredItem.image} hoverSrc={filteredItem.image2} className='brace-img'/>
        </div>
        <div className='earringsinner mt-3'>
            <h6 className='slider-inner-header'>{filteredItem.title}</h6>
            <p className='slider-inner-headerprice'>Price : Rs.{filteredItem.price}/-</p>
        </div>
      </div></Link>)
    }) }
          
          




        </Slider>

      </div>
    </>
  )
}

export default Earrings