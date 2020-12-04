import React, { useState } from 'react';

import classes from './Input.module.css';

const Input = ({
  type = 'text',
  value = '',
  placeholder = '',
  onChange,
  onClear,
  isRequired,
  disabled,
  ...props
}) => {
  const [error, setError] = useState(null);

  const onBlurHandler = () => {
    if (isRequired) {
      if (value.trim() === '') {
        setError('Required');
      }
    }
  };

  const onChangeHandler = (e) => {
    if (e.target.value.trim() !== '') {
      setError(null);
    }
    onChange(e);
  };

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        type={type}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        disabled={disabled}
        {...props}
      />
      {
        value.trim() && onClear
          ? (
            <button className={classes.input_clear} onClick={onClear}>
              x
            </button>
          )
          : null
      }
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default Input;
