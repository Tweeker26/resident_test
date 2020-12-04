import React, { useState } from 'react';

import classes from './Textarea.module.css';

const Textarea = ({
  value,
  onChange,
  noResize,
  rows = 3,
  isRequired,
  disabled,
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
      <textarea
        disabled={disabled}
        value={value}
        rows={rows}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={`${classes.textarea} ${noResize ? classes.noResize : ''}`}
      />
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default Textarea;
