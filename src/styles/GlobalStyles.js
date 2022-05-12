import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
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
  // toastify succes
  body .Toastify .Toastify__toast-container .Toastify__toast--success {

  }

  // toastify error
  body .Toastify .Toastify__toast-container .Toastify__toast--error {

  }
`;
