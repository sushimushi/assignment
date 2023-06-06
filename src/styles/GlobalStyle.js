import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body{
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: var(--white);
    font-family: var(--font);
    font-size: var(--fs-md);
  }

  h1,h2,h3,h4,h5,h6{
    letter-spacing: .04em;
    margin:0 0 1rem;
  }

  a,
  button{
    transition: all 0.3 ease;
    color: inherit;
  }

  a{
    text-decoration: none;
    
    &:hover,  
    &:focus{
      ${'' /* text-decoration: underline; */}
    }
  }
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  
  main {
    position: relative;
    padding: var(--spacing-xxl) 0;
    @media (min-width: 768px) {
      padding-left: 10rem;
    }
  }
  .app {
    min-height: 100vh;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .pull-right{
    float: right;
  }
  .overflow-ellipsis {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: unset;
    word-break: break-all;
  }
  .empty-notice {
    color: var(--grey);
    font-size: var(--fz-lg);
    text-align: center;
    padding: var(--spacing-xxl);
  }
  ul{
    list-style: none;
  }
  h5{
    text-align: center;
    font-size: clamp(3rem, 8vw, 7rem);
    margin-top: 30vh;
  }
  span,div{
    cursor: default;
  }
  .grid{
    display: grid;
    padding: 0 2rem;
    margin-bottom: var(--spacing-xxl);
    gap: 4rem;
  }
  .wrapper-class{
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
  @media (min-width: 768px){
    .grid{
      margin-left: min(10rem, 100%);
      & > div{
        padding-left:20px;
      }
    }
  }
`;

export default GlobalStyle;