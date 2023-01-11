import React,{ useState} from 'react'
import Slider from "react-slick";
import './Rings.css'
import HoverImage from "react-hover-image";
import { Products } from './Products';
import { HashLink as Link } from 'react-router-hash-link';

function Rings() {
    const [data,setData] = useState([...Products])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
    <div className='container mt-5'>
     <h4 className='slider-header'>RINGS</h4>
   
        <Slider {...settings}>
    {data.filter((item, index) => index>12 && index <16).map((filteredItem,ind) =>{
        return (<Link to={'/items'} 
        state= {{
        id:filteredItem.id,
        img:filteredItem.image,
        img2:filteredItem.image2,
        title:filteredItem.title,
        price:filteredItem.price,
        description:filteredItem.description
    }}  
       className='nav-links'><div key={filteredItem.id}>
            <div className='col-md-4'>
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

export default Rings