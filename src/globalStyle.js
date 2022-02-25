import styled, { createGlobalStyle } from 'styled-components';

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
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
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
    color: rgb(206, 204, 204);
    letter-spacing: 1.4px;
  }

  .linkDiactive.linkActive {
    color: #fff;
    text-decoration: underline;
  }

`;
