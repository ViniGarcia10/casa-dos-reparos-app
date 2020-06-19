import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox } from 'react-icons/fa';

import {
  Container,
  Design,
  AtorDesign,
  ContainerOptions,
  ItemsOptions,
  TitleIcon,
} from './styles';

import Fundo from '../../assets/fundo.svg';
import AtorFundo from '../../assets/atorHome.svg';
import Header from '../../components/Header';

function Home() {
  return (
    <Container>
      <Header />
      <ContainerOptions>
        <Link to="/produtos" style={{ textDecoration: 'none', color: '#000' }}>
          <ItemsOptions>
            <FaBox style={{ height: 83, width: 66, color: '#FF9900' }} />
            <TitleIcon>Produtos</TitleIcon>
          </ItemsOptions>
        </Link>
      </ContainerOptions>
      <AtorDesign src={AtorFundo} />
      <Design src={Fundo} />
    </Container>
  );
}

export default Home;
