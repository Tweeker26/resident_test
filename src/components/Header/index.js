import React from 'react';

import classes from './Header.module.css';

const Header = ({ title }) => (
  <header className={classes.header}>
    <h1 className={classes.title}>
      {title}
    </h1>
  </header>
);

export default Header;
