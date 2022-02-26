import { createGlobalStyle } from 'styled-components';
import * as variables from 'variables.js';

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }
  a:focus,
  a:active {
    outline: none;
  }

  nav,
  footer,
  header,
  aside {
    display: block;
  }

  html,
  body {
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: ${variables.FW_LIGHT};
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: ${variables.FS_SMALL};
    transition: all 0.50s linear;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }
  button,
  select {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  ul li {
    list-style: none;
  }
  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 300;
  }

  #root {
    flex: 1 1 auto;
  }

  .linkDiactive {
    font-size: ${variables.FS_REGULAR};
    color: ${({ theme }) => theme.text};
    letter-spacing: 1.4px;
  }

  .linkDiactive.linkActive {
    font-size: ${variables.FS_REGULAR};
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
  }

`;
