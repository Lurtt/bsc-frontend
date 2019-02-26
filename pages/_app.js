import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import withData from '../lib/withData'
import { Page } from '../components'
import { appWithTranslation } from '../i18n'

class CustomizeApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}
const appWithData = appWithTranslation(CustomizeApp)

export default withData(appWithData)
