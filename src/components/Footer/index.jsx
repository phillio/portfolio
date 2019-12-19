import React from "react";

import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-box">
        <p className="footer-box-text">Phil Ma's<br></br>Contact Info</p>
        <p className="footer-box-text">Email:<br></br>Phillio411@gmail.com</p>
        <a className="footer-box-text" href="https://www.linkedin.com/in/phil-ma" rel="noopener noreferrer" target="_blank">LinkedIn:<br></br>www.linkedin.com/<br></br>in/phil-ma</a>
        <a className="footer-box-text" href="https://drive.google.com/file/d/14qMmg60oxnPy9CbMKwzp-M6D5RZcvVdZ/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume:<br></br>RESUME</a>
        <p></p>
      </div>
    </footer>
  );
}

export default Footer;
