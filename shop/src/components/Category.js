import React from 'react'
import './Category.css'
import RingCategory from '../images/ring1.webp'
import BraceletCategory from '../images/honeybracelet.webp'

function Category() {
  return (
    <>
    <div className='container mt-5'>
        <div className='category-container col-md-12'>
            <div className='category-inner1 col-7 col-md-4'>
            <img src={RingCategory} className='img-fluid'/>
            </div>

            <div className='category-inner2 col-md-4 col-2'>
               <p className='category-inner2-text'>Shop by Category</p>
               <p className='category-inner2-textrest'>EARRINGS</p>
               <p className='category-inner2-textrest'>RINGS</p>
               <p className='category-inner2-textrest'>BRACELETS</p>
               <p className='category-inner2-textrest'>NECKLACES</p>
               <p className='category-inner2-textrest'>LUXE ITEMS</p>
            </div>

            <div className='category-inner3 col-3 col-md-4'>
            <img src={BraceletCategory} className='img-fluid'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Category