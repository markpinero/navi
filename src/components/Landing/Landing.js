import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import axios from 'axios'
import { API_URL } from '../../actions'

import screenshot from './screenshot.png'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiStatus: undefined
    }
  }
  componentDidMount() {
    // Prime heroku server
    axios.get(API_URL).then(response => {
      this.setState({ apiStatus: response.data.message })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Hero>
          <Container as="section">
            <Header textAlign="center" as="h1">
              Navi: The Life Calendar
            </Header>
            <Text>
              What makes a good life? The fancy things? Diamond rings? <span>Navi</span> helps you remember the most
              important things.
            </Text>
            <img src={screenshot} alt="Navi: The Life Calendar" />
          </Container>
        </Hero>
        <Spiel>
          <Container>
            <Button as={Link} to="/signup" size="huge" primary content="Sign Up" />
            <Button as={Link} to="/demo" secondary size="huge" content="View Demo" />
            <Divider />
            <Header as="h2">What is this?</Header>
            <Text>
              A life calendar that shows you your life, from 0 to 100. It's shorter than you think and longer than you
              expect. Each row is a year, each column is a month. Inspired by Wait But Why's{' '}
              <a href="http://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">
                Your Life By Weeks
              </a>
              , Navi lets you tell your tale, with plot twists and happy endings included. It aims to help you showcase
              your past, present, and future.
            </Text>
            <Divider />
            <Header as="h2">What do I do?</Header>
            <Text>
              Look for events that are significant in your life. Getting married, having a kid, moving, starting a new
              job. These are all special milestones we should remember.
            </Text>
            <Divider />
            <Header as="h2">Why should I do this?</Header>
            <Text>
              Studies show the path to a happy life is through your life experiences. There will always be a new iPhone
              next year and other people with better things than you. By looking at Navi, you can see your life
              objectively and without bias.
            </Text>
            <Quote>
              "Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present." -
              Bill Keane
            </Quote>
          </Container>
        </Spiel>
      </div>
    )
  }
}

const medium = (...args) => css`
  @media screen and (min-width: 600px) {
    ${css(...args)};
  }
`

const Hero = styled.section`
  background: #fff;
  font-size: 1.2em;
  text-align: center;

  & img {
    max-width: 100%;
    margin: 20px auto -200px;
  }

  ${medium`
    font-size: 1.5em;

    & img {
      margin: 0 auto -300px;
    }
  `};
`

const Spiel = styled.section`
  margin-top: 200px;
  text-align: center;
  ${medium` margin-top: 280px; `};
`

const Text = styled.p`
  margin: 20px auto;
  max-width: 680px;
  font-size: 1.2em;
  line-height: 1.7em;
`

const Divider = styled.div`
  margin: 40px auto;
  height: 5px;
  width: 80px;
  background: rgba(0, 0, 0, 0.7);
`

const Quote = styled.h2`
  display: block;
  margin: 40px auto;
  padding: 40px 40px;
  max-width: 680px;
  border: 2px rgba(0, 0, 0, 0.4) solid;
`

export default Landing
