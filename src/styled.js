/* eslint-disabled */
import styled, { injectGlobal, css } from 'styled-components';

injectGlobal`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css');

  *, *:before, *:after {
    box-sizing: normal;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1100px;
`;

export const Box = styled.div`
  display: inline-block;
  height: 19px;
  width: 19px;
  margin: 1px;
  background: rgba(0, 0, 0, 0.1);
`;
