import React,{ useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Marquee from 'react-fast-marquee'
import { NavLink} from 'react-router-dom'
import './Navbar.css'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/shoplogo.jpeg'

let rows = [], i = 0, len = 20;
  while (++i <= len) rows.push('PiecesOfMe');

const Navbar = () => {

   
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    return (
        <>
        <div className='container-fluid'>
        <Marquee gradient={false} className='marquee2'>
            {rows.map((row,index) => {
                return ( <p key={index} className='marquee-inner2'>{row}</p>)
            })}
        </Marquee>
        </div>
        <div className='container-fluid'>
        <nav className='navbar'>
            <div className='navbar-container'>
               
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                </div>


                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <div className='items'>
                            <li className="nav-item">
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink to='/aboutus' className='nav-links' onClick={closeMobileMenu}>About</NavLink>
                            </li>
                            
                        
                            <li className="nav-item">
                            <Link to="#contact"smooth={true} duration={1000} spy={true} exact='true' offset={-80} className='nav-links' onClick={closeMobileMenu}>Shop</Link>
                            </li>
                    </div>
                    </ul> 
                    
                    
                    <div>
                        <img src={Logo} alt='logo' className='main-logo'/>
                    </div>
                
                    <div className='carticon'>
                        <div className='nav-item'>

                                <FontAwesomeIcon icon={faCartShopping} style={{color:'black',marginTop:'30px'}}/>
                        </div>
                    </div>
            
                   
            </div>
        </nav>
        </div>
        <div className='container-fluid '>
        <Marquee gradient={false} className='marquee2'>
            {rows.map((row,index) => {
                return ( <p key={index} className='marquee-inner2'>{row}</p>)
            })}
        </Marquee>
        </div>
        </>
    );
}

export default Navbar;