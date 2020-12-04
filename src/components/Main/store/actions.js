import * as TYPES from './types';

export const setProjects = (projects) => ({
  type: TYPES.SET_PROJECTS,
  payload: { projects },
});

export const removeProject = (title) => ({
  type: TYPES.REMOVE_PROJECT,
  payload: { title },
});

export const addProject = (title) => ({
  type: TYPES.ADD_PROJECT,
  payload: { title },
});

export const changeName = (name) => ({
  type: TYPES.CHANGE_NAME,
  payload: { name },
});

export const changeTitle = (title, index) => ({
  type: TYPES.CHANGE_TITLE,
  payload: { title, index },
});

export const detailsClear = (title) => ({
  type: TYPES.DETAILS_CLEAR,
  payload: { title },
});

export const changeDescription = (value, title) => ({
  type: TYPES.CHANGE_DESCRIPTION,
  payload: { value, title },
});

export const changeDurationValue = (value, title) => ({
  type: TYPES.CHANGE_DURATION_VALUE,
  payload: { value, title },
});

export const changeDurationUnits = (value, title) => ({
  type: TYPES.CHANGE_DURATION_UNITS,
  payload: { value, title },
});
