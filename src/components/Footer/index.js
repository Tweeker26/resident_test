import React from 'react';

import Button from '../common/Button';

import classes from './Footer.module.css';

const Footer = ({ isJsonView, setIsJsonView }) => {
  const onViewChangeHandler = () => {
    setIsJsonView((prev) => !prev);
  };

  return (
    <footer className={classes.footer}>
      <Button variant='transparent' onClick={onViewChangeHandler}>
        {isJsonView ? 'Show form' : 'View form JSON'}
      </Button>
      <div className={classes.wrapperBtn}>
        <Button>
          Cancel
        </Button>
        <Button type="submit" form="form">
          Save
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
