import React from 'react';

import { Description, Container } from './styles';

export default function DescriptionPage(props) {
  return (
    <Container>
      <Description> {props.description} </Description>
    </Container>
  );
}
