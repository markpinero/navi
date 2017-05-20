import styled, { injectGlobal, css } from 'styled-components';

// eslint-disable-next-line
const medium = (...args) => css`
  @media screen and (min-width: 800px) {
    ${css(...args)}
  }
`;

// eslint-disable-next-line
injectGlobal`

body {
  min-height: 100vh;
}

section.container {
  padding: 2em 0 !important;
}

section.container:after, .event-grid:after {
  clear: both;
  content: '';
  display: table;
}

.signup, .signin {
  max-width: 500px;
}

`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Legend = styled.div`
  display: flex;
  list-style-type: none;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  margin: 40px 0px;
  padding: 20px 30px;

  & li {
    display: flex;
    align-items: center;
    margin-right: 20px;
    list-style-type: none;
  }

  & .sq {
    display: inline-block !important;
    min-width: 40px;
  }
`;
