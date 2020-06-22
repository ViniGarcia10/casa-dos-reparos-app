import React from 'react';
import { MdBuild } from 'react-icons/md';

import { Header, TitleTopo } from './styles';
import { Link } from 'react-router-dom';

function components() {
  return (
    <Header>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <MdBuild color="#FF9900" size={40} />
        <TitleTopo>Casa dos Reparos</TitleTopo>
      </Link>
    </Header>
  );
}

export default components;
