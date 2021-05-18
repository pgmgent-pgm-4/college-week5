import { useHistory } from "react-router-dom";

import * as Routes from '../routes';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <main>
      <div className={styles.fof}>
        <div className={styles.callToActions}>
          <button onClick={() => history.push(Routes.LANDING, { from: "NotFoundPage" })}>Home</button>
          <button onClick={() => history.goBack() }>Back</button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;