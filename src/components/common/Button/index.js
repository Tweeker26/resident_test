import React from 'react';

import classes from './Button.module.css';

const Button = ({
  type = 'button',
  children,
  onClick,
  variant = 'default',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classes[variant]} ${classes.button}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
