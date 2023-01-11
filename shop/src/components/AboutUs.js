import React from 'react'
import './AboutUs.css'
import AboutUsCover from '../images/hercover2.webp'
import Marquee from 'react-fast-marquee'

let rows = [], i = 0, len = 20;
  while (++i <= len) rows.push('PiecesOfMe');

const AboutUs = () => {
  return (
    <>
  
    <div className='container mt-5'>
        <div className='aboutus-container col-md-12'>
            <div className='aboutus-inner1 col-md-4'>
                <h4 className='aboutus-header'>ABOUT US</h4>
                <p className='aboutus-innertext'>
                    Let Our jewelry speak for you !<br/>
                    "Piecesofme" driven by its curator, with a straightforward vision of making our pieces of jewelry a part of your everyday journey. We offer great quality at affordable price. All our pieces are long lasting, hypoallergenic and tarnish free. <br/>
                    We also have LUXE pieces in our collection, sourced and redesigned with the modern babe in mind. All the charms are 100% authentic designer pieces reworked into jewelry. We are not affliated with any of these brands.<br/>
                    I hope you find something you love and come back again.
                </p>
            </div>

            <div className='aboutus-inner2 col-md-8'>
                <img src={AboutUsCover} className='img-fluid'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs