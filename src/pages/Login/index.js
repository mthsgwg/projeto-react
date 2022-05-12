import React from 'react';

import { Container } from '../../styles/GlobalContainer';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>oie</small>
      </Title>
      <p>lorem iContainersum</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
