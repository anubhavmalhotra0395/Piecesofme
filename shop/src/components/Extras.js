import React from 'react'
import './Extras.css'
import Marquee from 'react-fast-marquee'

let rows = [], i = 0, len = 20;
  while (++i <= len) rows.push('PiecesOfMe');
function Extras() {
  return (
    <>
 
        <div className='container-fluid  mt-5' style={{backgroundColor:'#f8f8f8'}}>
            <div className='extras-container p-5 '>
                <div className='extras-inner1 col-md-3 '>
                   <h4 className='extras-header'>DISCLAIMER</h4>
                   <p className='extras-text'>Our LUXE Collection items are reworked. Trademarks are owned by the resspective brand owners. Piecesofme has no affiliation or association with these brand owners.</p>
                </div>
                <div className='extras-inner1 col-md-3 '>
                <h4 className='extras-header'>REFUND POLICY</h4>
                   <p className='extras-text'>All our sales are final. We do not accept returns or refunds. Please inspect your order upon reception and contact us immediately if the item is damaged or if you recieve the wrong item, so that we can evaluate the issue and make it right.</p>
                </div>
                <div className='extras-inner1 col-md-3 '>
                <h4 className='extras-header'>SHIPPING</h4>
                   <p className='extras-text'>FREE SHIPPING on all orders above 1599 INR. Each and every order will be packed with love and attention to detail so please allow us upto 4 business days for processing.</p>
                 </div>
                <div className='extras-inner1 col-md-3 '>
                <h4 className='extras-header'>JEWELRY CARE</h4>
                   <p className='extras-text'>All LUXE pendants are gold plated, so say no to excess sweat and water. Store your clean, dry jewelry in a zip bag or pouch. Keep perfume, hairspray and other chemicals off your Jewelry. Take your Jewelry off before bed.</p>
                 </div>
               
            </div>
        </div>
  
    </>
  )
}

export default Extras