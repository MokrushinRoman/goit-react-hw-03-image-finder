import { Global, css } from '@emotion/react';
import 'modern-normalize';

const reset = `
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}

  p,
  b,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      margin: 0;
  }

  ul,
  ol {
      margin: 0;
      padding-left: 0;
  }

  a,
  label,
  span,
  b {
      text-decoration: none;
      display: block;
  }

  button {
      cursor: pointer;
      font-family: inherit;
      padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

const customStyles = `
html.modalOpen {
  overflow: hidden;
}

.header {
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${reset}
        ${customStyles}
      `}
    />
  );
};
