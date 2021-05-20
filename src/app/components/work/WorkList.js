import './WorkList.module.scss';

import React, { useEffect } from 'react';

import Project from './Project';
import { useGdmGent } from '../../services';

const WorkList = () => {
  const {getWork, work} = useGdmGent();

  useEffect(() => {
    const fetchData = async () => {
      await getWork();
    }

    fetchData();
  }, [getWork]);

  return (
    <div className="row work-list">
    {!!work
      ? work.map((project) => {
        return (
          <div className="col-12" key={project.Id}>
            <Project className="row" data={project} />
          </div>
        )
      })
      : <p>No projects</p>
    }
    </div>
  );
};

export default WorkList;