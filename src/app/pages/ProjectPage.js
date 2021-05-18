import {
  useParams
} from "react-router-dom";

import { BaseLayout } from '../layouts';

const ProjectPage = () => {
  let { id } = useParams();

  return (
    <BaseLayout>
      PROJECT PAGE: { id }
    </BaseLayout>
  );
};

export default ProjectPage;