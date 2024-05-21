// import React from 'react'
import { assets } from "../../assets/assets"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} color={"#000000"} fill={"none"}>
    <path d="M6.5 17.3306C7.78183 18.9563 9.76903 20 12 20C13.9587 20 15.7295 19.1955 17 17.8989M8.5 6.93647C9.52961 6.34088 10.725 6 12 6C13.9587 6 15.7295 6.80446 17 8.10101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 13C16 15.2091 14.2091 17 12 17C9.79085 17 8 15.2091 8 13C8 10.7909 9.79085 9 12 9C14.2091 9 16 10.7909 16 13Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 7C6 8.38067 5.10457 9 4 9C2.89543 9 2 8.38067 2 7C2 5.61928 2.89543 4 4 4C5.10457 4 6 5.61928 6 7Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19.5 13V4H20C21.1046 4 22 4.89543 22 6V13H19.5ZM19.5 13V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 9V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
            <p>Experience quick and reliable food delivery with our app. Browse diverse cuisines, track your order in real-time, and enjoy exclusive deals, all at your fingertips. Delicious meals delivered fast!</p>
            <div className="social-icons">
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedln" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>FoodieHub</h2>
            <ul>
                <li>Home</li>
                <li>AboutUs</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+12-345678910</li>
                <li>FoodieHub@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {/* Copyright 2024   &copy;   FoodieHub.com -     All rights reserved */}
        <img src="https://forthebadge.com/images/badges/built-with-love.png" alt="badge" /> - By Jasmeet
      </p>
    </div>
  )
}

export default Footer
