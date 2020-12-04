import React, { useContext } from 'react';

import { ViewContext } from '../../Main/index';

import classes from './JsonView.module.css';

const JsonView = () => {
  const { state } = useContext(ViewContext);

  return (
    <pre className={classes.json}>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

export default JsonView;
