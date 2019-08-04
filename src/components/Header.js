import React from 'react';
import HeaderWrap from './styled/HeaderWrap';
import NavBar from './NavBar';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Link to="/">Spokepost.com</Link>
      </HeaderWrap>
    </>
  );
};

export default Header;
