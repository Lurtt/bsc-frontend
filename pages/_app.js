import App, { Container } from 'next/app'

import { Page } from '../components'

class CustomizeApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default CustomizeApp
