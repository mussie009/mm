import React from 'react';
import FooterImg from '../images/powered-by-logo-white.png';


const Footer = () => {
  return(
    <footer className="#37474f blue-grey darken-3 center foot pos">
        <div id="footimg">
        <img src={FooterImg} alt="LOGO"/>
        </div>
    </footer>
  );


};

export default Footer;
