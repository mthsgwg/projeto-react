import { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/color';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    color: #fff;
    padding: 10px 20px;
    border-radius: 7px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    list-style: none;
  }
`;
