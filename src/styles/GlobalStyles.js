import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #141414;
    --blackHover: #313131;
    --white: #ffffff;
    --grey: #e3e3e4;
    --accent: #d8bd14;
    --accentHover: #aa9514;
    --green: #73d13d;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }


  body {
    background-color: var(--white);
  }

  hr {
    width: 100%;
    height: 2px;
    background: var(--grey);
    border: none;
    margin: 15px auto;
  }

  /* overrides */

  .cga-button {
    background-color: var(--accent) !important;
    border-color: var(--accent) !important;
    color: var(--black) !important;

    &:hover,
    &:focus {
      background-color: var(--accentHover) !important;
      border-color: var(--accentHover) !important;

    }
  }

  .cga-button_outline {
    background-color: transparent !important;
    color: var(--white) !important;

    &:hover,
    &:focus {
      background-color: var(--accentHover) !important;
      color: var(--black) !important;
    }
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: var(--accent) !important;
  }

  .progressbar {
    margin-top: 30px;
  }

  .selected p {
    border-bottom: solid 8px var(--accent);
  }

`;

export default GlobalStyles;
