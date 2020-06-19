import React from 'react';
import { MdBuild } from 'react-icons/md';

import { Header, TitleTopo } from './styles';

function components() {
  return (
    <Header>
      <MdBuild color="#FF9900" size={40} />
      <TitleTopo>Casa dos Reparos</TitleTopo>
    </Header>
  );
}

export default components;
