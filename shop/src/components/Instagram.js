import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Instagram.css'

const Instagram = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='insta-container mt-5'>
        <div>
                <FontAwesomeIcon icon={faInstagram} size='2x' className='insta-icon'/>
            </div>
        <h4 className='insta-text'>Reach us on Instagram @shoppiecesofme</h4>
        <h4 className='insta-text2'>copyright@ Piecesofme™ 2022</h4>
       
           
        </div>
        </div>
    </>
  )
}

export default Instagram