import React from 'react';
import MenuWrap from './styled/MenuWrap';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav>
      <MenuWrap>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="one">One</Link>
        </li>
        <li>
          <Link to="two">Two</Link>
        </li> */}
      </MenuWrap>
    </nav>
  );
};

export default NavBar;
