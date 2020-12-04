import React from 'react';

import Select from '../common/Select';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import {
  changeDescription,
  changeDurationUnits,
  changeDurationValue,
  detailsClear,
} from '../Main/store/actions';

import classes from './ProjectCart.module.css';

const UNITS = ['year', 'month', 'day'];

const ProjectCart = React.memo(({
  allProjects,
  project,
  value,
  dispatch,
  index,
  setProjectDetailsArray,
  projectDetailsArray,
}) => {
  const options = allProjects.map(project => project.title);

  const onChangeHandler = (e) => {
    setProjectDetailsArray((prev) => {
      const project = allProjects.find(
        project => project.title === e.target.value);
      return [
        ...prev.slice(0, index),
        project,
        ...prev.slice(index + 1),
      ];
    });
  };

  const onDetailsClear = () => {
    const projectIndex = projectDetailsArray.findIndex(
      item => Object.is(item, project)
    );
    dispatch(detailsClear(project.title));
    setProjectDetailsArray(
      (prev) => [
        ...prev.slice(0, projectIndex),
        ...prev.slice(projectIndex + 1),
      ],
    );
  };

  return (
    <div className={classes.cart}>
      <div className={classes.cart_section}>
        <p>
          Project
        </p>
        <Select
          disabledOptions={
            allProjects
              .filter(option => projectDetailsArray.includes(option))
              .map(project => project.title)
          }
          options={options}
          value={value}
          onChange={onChangeHandler}
          isRequired
        />
      </div>
      <div className={classes.cart_section}>
        <p>
          Details
        </p>
        <Textarea
          value={project.description}
          onChange={(e) => dispatch(changeDescription(e.target.value, project.title))}
          disabled={!project.title}
          noResize
          isRequired
        />
      </div>
      <div className={classes.cart_section}>
        <p>
          Duration
        </p>
        <div className={classes.cart_duration}>
          <Input
            type='number'
            min={1}
            value={project.duration?.value}
            onChange={(e) => dispatch(changeDurationValue(e.target.value, project.title))}
            disabled={!project.title}
            isRequired
          />
          <Select
            options={UNITS}
            value={project.duration?.units}
            onChange={(e) => dispatch(changeDurationUnits(e.target.value, project.title))}
            disabled={!project.title}
            isRequired
          />
        </div>
      </div>

      <button
        className={classes.details_clear}
        onClick={onDetailsClear}
      >
        x
      </button>
    </div>
  );
});

export default ProjectCart;
