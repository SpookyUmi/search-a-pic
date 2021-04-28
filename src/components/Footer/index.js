import React from 'react';
import "./styles.scss";

const Footer = () => (
  <footer className="footer">
    <p>
      © Spooky Umi {new Date().getFullYear()}
          {` `}
          Built with ❤️ and <a href="https://pixabay.com/">Pixabay</a>
          {` `}
    </p>
  </footer>
);

export default Footer;
