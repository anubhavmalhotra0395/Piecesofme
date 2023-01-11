import React, { useContext } from 'react'
import './Items.css'
import { useLocation } from "react-router-dom";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {  faHome, faMoneyCheck,  faTractor } from '@fortawesome/free-solid-svg-icons';
import Extras from './Extras';
import Instagram from './Instagram';
import { ShopContext } from './ShopContext';
import { HashLink as Link } from 'react-router-hash-link';



let rows = [], i = 0, len = 20;
  while (++i <= len) rows.push('PiecesOfMe');
function Items() {
    const location = useLocation();
    const {id,img, img2, title, price,description} = location.state;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    return (
    <>
   
        <div className='container-fluid'>
            <h4 className='items-header mt-2'>{title}</h4>
            <div className='items-container mt-2'>
                <div className='items-inner1'>
                    <img src={img} className='items-img'/>
                    <img src={img2} className='items-img '/>
                </div>
                <div className='items-inner2'>
                    <h4 className='text-items'>{title}</h4>
                    <h3 className='text-items2'>{description}</h3>
                    <p className='text-items3'>Price: Rs {price} /-</p>
                    <button className='w-100 items-btn mt-1' onClick={()=> addToCart(id)}>ADD TO CART {cartItemAmount > 0 &&<> ({cartItemAmount})</>}</button>
                    <Link to={'/cart'}><button className='w-100 items-btn mt-1'>GO TO CART</button></Link>
                    <h3 className='text-items2 mt-2'></h3>
                    <div className='text-inner'>
                        <FontAwesomeIcon icon={faTractor} />
                        <h3 className='text-items3 ml-3'>Free Shipping on orders over Rs. 1500 /-</h3>
                    </div>
                    <div className='text-inner'>
                        <FontAwesomeIcon icon={faHome} />
                        <h3 className='text-items3 ml-3'>No Returns (Read REFUND POLICY Down Below)</h3>
                    </div>
                    <div className='text-inner'>
                        <FontAwesomeIcon icon={faMoneyCheck} />
                        <h3 className='text-items3 ml-3'>No Refunds (Read REFUND POLICY Down Below)</h3>
                    </div>
                    
                   
                        <h4 className='innertextfinal mt-2'>DISCLAIMER</h4>
                        <h3 className='text-items4'>Our LUXE Collection items are reworked. Trademarks are owned by the resspective brand owners. Piecesofme has no affiliation or association with these brand owners.</h3>
                 
                        <h4 className='innertextfinal mt-2'>REFUND POLICY</h4>
                        <h3 className='text-items4'>All our sales are final. We do not accept returns or refunds. Please inspect your order upon reception and contact us immediately if the item is damaged or if you recieve the wrong item, so that we can evaluate the issue and make it right.</h3>

                        <h4 className='innertextfinal mt-2'>SHIPPING</h4>
                        <h3 className='text-items4'>FREE SHIPPING on all orders above 1599 INR. Each and every order will be packed with love and attention to detail so please allow us upto 4 business days for processing.</h3>

                        <h4 className='innertextfinal mt-2'>JEWELRY CARE</h4>
                        <h3 className='text-items4'>All LUXE pendants are gold plated, so say no to excess sweat and water. Store your clean, dry jewelry in a zip bag or pouch. Keep perfume, hairspray and other chemicals off your Jewelry. Take your Jewelry off before bed.</h3>
                </div>
            </div>
        </div>
        <Extras />
        <Instagram />
    </>
  )
}

export default Items