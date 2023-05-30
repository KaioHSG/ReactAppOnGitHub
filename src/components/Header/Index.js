import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Headers, Itens, Li, Navbar, Profile, ProfileImg, Ul } from './styles';

const Header = ({ img }) => (
  <BrowserRouter>
    <Headers>
      <Navbar id="navbar">
        <Profile>
          <ProfileImg src={img} alt="profile_picture" />
        </Profile>
        <Ul>
          <Li>
            <Itens to="/#about">About</Itens>
          </Li>
          <Li>
            <Itens to="/#experience">Experience</Itens>
          </Li>
          <Li>
            <Itens to="/#skills">Skills</Itens>
          </Li>
          <Li>
            <Itens to="/#projects">Projects</Itens>
          </Li>
        </Ul>
      </Navbar>
    </Headers>
  </BrowserRouter>
);

export default Header;
