import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-main'>
      <div className='footer-upper'>
        <img src="https://primundus.de/wp-content/uploads/2021/04/Footer-Logo.svg" alt="footer-img" />
        <nav className='footer-nav'>
          <ul>
            <li>Why PRIMUNDUS</li>
            <li>costs</li>
            <li>procedure</li>
            <li>Care Guide</li>
          </ul>
        </nav>
        <p><span>SECURE A NURSE NOW</span></p>
        <p>089 200 000 830</p>
      </div>
      <div className='line-wrapper'>
        <p className='line'></p>
      </div>
      <div className='footer-lower'>
        <p>Copyright 2021 Primundus.de All rights reserved.</p>
        <p>imprint privacy</p>
      </div>
    </div>
  );
}

export default Footer;