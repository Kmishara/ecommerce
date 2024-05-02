import React from 'react'
import './Footer.css'
import footer_logo from '../Assetes/logo_big.png'
import instagram_icon from '../Assetes/instagram_icon.png'
import pinterest from '../Assetes/pintester_icon.png'
import whatsapp from '../Assetes/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo}alt="" />
            <p>SHOOPER</p>
        </div>
        <ul className="footer-links">
            <li>products</li>
            <li>company</li>
            <li>contact</li>
            <li>about</li>
            <li>offices</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2023 -All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer