import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li>
          <Link to={Routes.WORK}>Work</Link>
        </li>
        <li>
          <Link to="{Routes.CONTACT}">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;