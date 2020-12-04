import * as TYPES from './types';
import { getProject, getProjectIndex } from '../../../helpers';

export const initialState = {
  name: '',
  projects: [],
};

export const emptyProject = {
  title: '',
  description: '',
  duration: {
    value: '',
    units: '',
  },
};

export function reducer (state, action) {
  switch (action.type) {
    case TYPES.SET_PROJECTS: {
      return { ...state, projects: action.payload.projects };
    }
    case TYPES.CHANGE_NAME: {
      return { ...state, name: action.payload.name };
    }
    case TYPES.CHANGE_TITLE: {
      let project = getProject(state.projects, action.payload);
      project.title = action.payload.title;

      return {
        ...state,
        projects: [
          ...state.projects.slice(0, getProjectIndex(state.projects, project)),
          project,
          ...state.projects.slice(getProjectIndex(state.projects, project) + 1),
        ],
      };
    }
    case TYPES.ADD_PROJECT: {
      return {
        ...state,
        projects: [
          ...state.projects,
          { ...emptyProject, title: action.payload.title },
        ],
      };
    }
    case TYPES.REMOVE_PROJECT: {
      const project = getProject(state.projects, action.payload);

      return {
        ...state,
        projects: [
          ...state.projects.slice(0, getProjectIndex(state.projects, project)),
          ...state.projects.slice(getProjectIndex(state.projects, project) + 1),
        ],
      };
    }
    case TYPES.CHANGE_DESCRIPTION: {
      let project = getProject(state.projects, action.payload);
      project.description = action.payload.value;

      return {
        ...state,
        projects: [
          ...state.projects.slice(0, getProjectIndex(state.projects, project)),
          project,
          ...state.projects.slice(getProjectIndex(state.projects, project) + 1),
        ],
      };
    }
    case TYPES.CHANGE_DURATION_VALUE: {
      let project = getProject(state.projects, action.payload);
      project.duration.value = action.payload.value;

      return {
        ...state,
        projects: [
          ...state.projects.slice(0, getProjectIndex(state.projects, project)),
          project,
          ...state.projects.slice(getProjectIndex(state.projects, project) + 1),
        ],
      };
    }
    case TYPES.CHANGE_DURATION_UNITS: {
      let project = getProject(state.projects, action.payload);
      project.duration.units = action.payload.value;

      return {
        ...state,
        projects: [
          ...state.projects.slice(0, getProjectIndex(state.projects, project)),
          project,
          ...state.projects.slice(getProjectIndex(state.projects, project) + 1),
        ],
      };
    }
    case TYPES.DETAILS_CLEAR: {
      let project = getProject(state.projects, action.payload);
      project.description = emptyProject.description;
      project.duration = emptyProject.duration;

      return {
        ...state,
        projects: [
          ...state.projects.slice(0, getProjectIndex(state.projects, project)),
          project,
          ...state.projects.slice(getProjectIndex(state.projects, project) + 1),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
