import React from 'react';

import classes from './Input.module.css';

const Form = ({ children, ...props }) => {
  return (
    <form {...props} className={classes.form}>
      {children}
    </form>
  );
};

export default Form;
