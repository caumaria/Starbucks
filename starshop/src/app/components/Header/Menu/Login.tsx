import * as React from 'react';
import styled from 'styled-components';


const LoginContainer = styled.div`

    @media (max-width: 1000px) {
        display: none;
    }
`;


export default function Login () {
  return (
    <LoginContainer>
      <a>Entrar</a>
      <a>Registrar</a>
    </LoginContainer>
  );
}
