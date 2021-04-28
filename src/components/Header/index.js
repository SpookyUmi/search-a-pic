import React from 'react';
import "./styles.scss";
import sunflower from "./sunflower.png";

const Header = () => (
  <header className="header">
    <img src={sunflower} alt="sunflower logo" className="header__logo" />
    <h1 className="header__title" >Search A Pic</h1>
  </header>
);

export default Header;
