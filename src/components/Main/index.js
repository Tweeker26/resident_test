import React, { createContext, useReducer, useEffect } from 'react';

import JsonView from '../Views/JsonView';
import FormView from '../Views/FormView';
import { initialState, reducer } from './store/reducer';
import { getProjects } from '../../mockData';
import { setProjects } from './store/actions';

import classes from './Main.module.css';

export const ViewContext = createContext(null);

const Main = ({ isJsonView }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getProjects().then((res) => dispatch(setProjects(res)))
  }, []);

  return (
    <ViewContext.Provider
      value={{
        dispatch,
        state,
      }}
    >
      <main className={classes.main}>
        {isJsonView ? <JsonView /> : <FormView />}
      </main>
    </ViewContext.Provider>
  );
};

export default Main;
