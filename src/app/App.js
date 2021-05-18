import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import * as Routes from './routes';
import { ContactPage, HomePage, NotFoundPage, ProjectPage, WorkPage } from './pages';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path={Routes.CONTACT}>
            <ContactPage />
          </Route>
          <Route exact path={Routes.WORK}>
            <WorkPage />
          </Route>
          <Route exact path={Routes.PROJECTDETAILS}>
            <ProjectPage />
          </Route>
          <Route exact path={Routes.FOUROFOUR}>
            <NotFoundPage />
          </Route>
          <Redirect from={Routes.HOME} to={Routes.LANDING} />
          <Route exact path={Routes.LANDING}>
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
