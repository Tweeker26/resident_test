export const getProject = (projects, payload) =>  projects?.find(
  (item, index) => index === payload?.index
    || item.title === payload?.title,
);

export const getProjectIndex = (projects, project) =>  projects?.findIndex(
  item => Object.is(item, project)
);
