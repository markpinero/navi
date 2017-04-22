import styled, { injectGlobal } from 'styled-components';
import { Segment } from 'semantic-ui-react';

// eslint-disable-next-line
injectGlobal`
  html, body {
    background: #D8D8D8;
  }
  .masthead .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  .react-datepicker__input-container {
    display: block !important;
  }
`;

export const HeaderSegment = styled(Segment)`
  background: #FFF !important;
  margin-bottom: 1em !important;
`;
