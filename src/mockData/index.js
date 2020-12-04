const mockData = {
  'name': '',
  'projects': [
    {
      'title': 'Bank',
      'description': 'I worked in the regional bank in IT department',
      'duration': {
        'value': '2',
        'units': 'year',
      },
    },
    {
      'title': 'Tank',
      'description': 'I was a team member of the elite tank',
      'duration': {
        'value': '20',
        'units': 'month',
      },
    },
    {
      'title': 'Sank',
      'description': '',
      'duration': {
        'value': '',
        'units': '',
      },
    },
  ],
};

export const getProjects = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData.projects);
  }, 1e3);
});
