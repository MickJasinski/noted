import styled, { css } from 'styled-components';

const Button = styled.button`

  width: ${({ width }) => width || 'auto'};
  border: 2px solid black;
  border-radius: 50px;
  background: white;
  color: black;
  padding: 16px 50px;
  font-weight: 600;
  font-size: 1.2em;
  text-transform: uppercase;

  ${({ secondary }) => (
    secondary && css`

      border: none;
      background: lightgrey;
      color: white;
      font-size: .85em;
    
    `
  )}

`;

export default Button;
