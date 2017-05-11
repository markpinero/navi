import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import styled from "styled-components";

const Landing = () => (
  <Hero>
    <Container as="section">
      <Header textAlign="center" as="h1">
        What if <span>life</span> was like a game?
      </Header>
      <p>What makes a good life?</p>
      <p>Each row makes up one year.</p>
      <Button primary content="Sign Up" />
    </Container>
  </Hero>
);

const Hero = styled.section`
  font-size: 1.2em;

  & span {
    color: #1678c2;
  }
`;

export default Landing;
