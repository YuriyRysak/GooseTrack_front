import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
    box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.29;
  }
  
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  .list,
  {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
    text-decoration: none;
  }
  
  .list {
    list-style: none;
  }
  
  .link {
    text-decoration: none;
    color: inherit;
  }
  
  a {
    text-decoration: none;
    font-style: normal;
    cursor: pointer;
  }
  
  button {
    padding: 0;
    font-family: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  `;

  export default GlobalStyles;