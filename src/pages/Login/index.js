import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalContainer';
import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }
  return (
    <Container>
      <Title isRed>
        Login
        <small>oie</small>
      </Title>
      <p>lorem iContainersum</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
