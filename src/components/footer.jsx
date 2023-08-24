import React from 'react'
import {FaLinkedin,FaInstagram} from 'react-icons/fa'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
    <footer>
      <h4>
       A-301, Maxblis White House, Sector 75,<br /> Golf City, Noida, Uttar Pradesh, 201301
      </h4>
      <h4>
        Follow us on 
        <div className='footer-icons'>
          
          <a href="https://www.instagram.com/arkdesign_international/" target='blank'><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/amod-singh-02035636/?originalSubdomain=in" target='blank'><FaLinkedin /></a>
          
        </div>
      </h4>
      <h4>
        @ All Copyrights Reserved
      </h4>
    </footer>
    
    </>
  
  )
}

export default Footer;