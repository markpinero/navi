import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <Container>
      <FooterText>
        Made by Mark Pinero · Made with Node and React ·
        {' '}
        <a href="https://github.com/remarks/navi">Github</a>
      </FooterText>
    </Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  align-content: flex-end;
  background: rgba(0, 0, 0, 0.7);
  padding: 80px;
  margin-top: 40px;
`;

const FooterText = styled.div`
  color: #fff;
  text-align: center;

  a:link, a:visited {
    color: #fff;
    border-bottom: 1px #fff solid;
  }

  a:hover {
    color: #2185D0;
    border-bottom-color: #2185D0;
  }
`;

export default Footer;
