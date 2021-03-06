import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans';
import '@fontsource/open-sans-condensed';

const Typography = createGlobalStyle`
  a, p, li, strong, p > strong, span, input, label {
    font-size: 1rem;
    color: var(--black);
    line-height: 1.2em;
    padding: 10px 0;
    font-family: "Open Sans";
    font-weight: 300;

    @media (min-width: 600px) {
      font-size: 1.3em;
    }
  }

  span {
    padding: 5px;
  }

  span, a {
    font-size: 1rem;

    @media (min-width: 600px) {
      font-size: 1.3em;
    }
  }

  strong, p > strong {
    font-weight: 700;
    font-size: 1rem;

    @media (min-width: 600px) {
      font-size: 1.3rem;
    }
  }

  h1, h2, h3, h4 {
    color: var(--black);
    font-family: "Open Sans Condensed";
    font-weight: 400;
  }

  h1 {
    font-size: 5rem;

    @media (min-width: 600px) {
      font-size: 6.5rem;
    }

    @media (min-width: 1000px) {
      font-size: 7rem;
    }

  }

  h2 {
    font-size: 3rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  a {
    &:hover {
      color: var(--hoverAccent);
    }
  }
`;

export default Typography;
