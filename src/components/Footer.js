import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <span className='name'>
        azNews <span> Your trusted source for breaking news, in-depth analysis, and exclusive stories from around the globe.
      </span>
      </span>
      <hr style={{width: "90%"}} />
      <div className='iconContainer'>
        <a href='https://www.instagram.com/prateekjaiswal.07/' target='__blank'>
        <i className='fab fa-instagram-square fa-2x'></i>
        </a>
        
        <a href='https://www.linkedin.com/in/
        prateekjaiswa/' target='__blank'>
        <i className='fab fa-linkedin fa-2x'></i>
        </a>
        
        <a href='https://www.github.com/prateekjaiswal12/' target='__blank'>
        <i className='fas fa-link fa-2x'></i>
        </a>

      </div>
      <div className='contactContainer'>
      © {2021} azNews.
All rights reserved.
Terms of Service | Privacy Policy
      </div>
    </div>
  )
}

export default Footer
