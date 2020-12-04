import React, { useContext, useState, useEffect } from 'react';

import Form from '../../common/Form';
import Input from '../../common/Input';
import { ViewContext } from '../../Main/index';
import ProjectCart from '../../ProjectCart';
import { emptyProject } from '../../Main/store/reducer';
import {
  addProject,
  changeName,
  changeTitle,
  removeProject,
} from '../../Main/store/actions';

import classes from './FormView.module.css';

const FormView = () => {
  const { state, dispatch } = useContext(ViewContext);
  const [projectDetailsArray, setProjectDetailsArray] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('save on BE');
  };

  const onClearHandler = (title) => {
    dispatch(removeProject(title));
    setProjectDetailsArray((prev) => {
      const projectIndex = prev.findIndex((item) => item.title === title);
      return [
        ...prev.slice(0, projectIndex),
        ...prev.slice(projectIndex + 1)
      ]
    });
  };

  const onNewProjectNameHandler = (e, index) => {
    dispatch(addProject(e.target.value));
    setTimeout(() => {
      const inputs = document.querySelector('#inputs').childNodes;
      inputs[index].firstChild.focus();
    }, 0);
  };

  useEffect(() => {
    setProjectDetailsArray(state.projects?.filter(
      project => project.description || project.duration.value
    ) || []);
  }, [state.projects]);

  return (
    <Form onSubmit={onSubmitHandler} id='form'>
      <section className={classes.section}>
        <p className={classes.form_p}>
          Name
        </p>
        <Input
          value={state.name}
          onClear={() => dispatch(changeName(''))}
          onChange={(e) => dispatch(changeName(e.target.value))}
          isRequired
        />
      </section>

      <section className={classes.section}>
        <p className={classes.form_p}>
          Projects
        </p>
        <div className={classes.form_inputs_wrapper} id='inputs'>
          {
            state.projects?.map((project, index) => (
              <React.Fragment key={index}>
                <Input
                  value={project.title}
                  onChange={(e) => dispatch(changeTitle(e.target.value, index))}
                  onClear={() => onClearHandler(project.title)}
                />
                {(index === state.projects?.length - 1) && (
                  <Input
                    value=''
                    onChange={(e) => onNewProjectNameHandler(e, index + 1)}
                  />
                )}
              </React.Fragment>
            ))
          }
          {!state.projects?.length && (
            <Input
              value=''
              onChange={
                (e) => dispatch(addProject(e))
              }
            />
          )}
        </div>
      </section>

      <section className={classes.section}>
        <p className={classes.form_p}>
          Projects Details
          <button
            className={classes.add_project}
            onClick={() => setProjectDetailsArray(
              (prev) => [...prev, emptyProject]
            )}
          >
            +
          </button>
        </p>
        <div className={classes.projects_details_wrapper}>
          {
            projectDetailsArray.map((project, index) => (
              <ProjectCart
                key={index}
                index={index}
                allProjects={state.projects}
                project={project}
                value={project.title}
                dispatch={dispatch}
                setProjectDetailsArray={setProjectDetailsArray}
                projectDetailsArray={projectDetailsArray}
              />
            ))
          }
        </div>
      </section>
    </Form>
  );
};

export default FormView;
