import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="left-footer">
          <h4>
            A-301, Maxblis White House, Sector 75,
             Golf City, Noida, Uttar Pradesh, 201301
          </h4>
        </div>
        <div className="mid-footer">
          <h4>
            Follow us on
            </h4>
            <div>
              <a
                href="https://www.instagram.com/arkdesign_international/"
                target="blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/amod-singh-02035636/?originalSubdomain=in"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </div>
          
        </div>
        <div className="right-footer">
          <h4>@ All Copyrights Reserved</h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
