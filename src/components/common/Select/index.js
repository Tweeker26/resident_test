import React from 'react';

import classes from './Select.module.css';

const Select = ({
  options,
  value,
  onChange,
  disabledOptions,
  isRequired,
  disabled,
}) => {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={onChange}
      required={isRequired}
      disabled={disabled}
    >
      <option hidden disabled value='' />
      {
        options.map((option, index) => !!option && (
          <option
            key={index}
            value={option}
            disabled={disabledOptions?.includes(option)}
          >
            {option}
          </option>
        ))
      }
    </select>
  );
};

export default Select;
