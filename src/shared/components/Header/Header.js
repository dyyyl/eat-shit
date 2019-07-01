import React from 'react';

import Time from '../Time';

import HeaderContainer from './HeaderContainer';
import Logo from './Logo';
import LogoContainer from './LogoContainer';

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo>Eat Shit</Logo>
    </LogoContainer>
    <Time />
  </HeaderContainer>
);

export default Header;
