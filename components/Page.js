import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

import { GlobalStyle, defaultTheme } from '../css'
import { Meta, NoteProvider, Header } from '.'
import { Main } from './styles'

const Page = ({ children }) => {
  Router.onRouteChangeStart = () => {
    NProgress.start()
  }

  Router.onRouteChangeComplete = () => {
    NProgress.done()
  }

  Router.onRouteChangeError = () => {
    NProgress.done()
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Fragment>
        <Meta />
        <GlobalStyle />
        <Header />
        <NoteProvider>
          <Main>{children}</Main>
        </NoteProvider>
      </Fragment>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Page
