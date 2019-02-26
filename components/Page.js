import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

import { i18n, withNamespaces } from '../i18n'
import { GlobalStyle, defaultTheme } from '../css'
import { Meta, NoteProvider } from '.'
import { Main } from './styles'

const Page = ({ t, children }) => {
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
        <header>
          <button
            type="button"
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'cs' : 'en')
            }
          >
            {t('change-locale')}
          </button>
        </header>
        <NoteProvider>
          <Main>{children}</Main>
        </NoteProvider>
      </Fragment>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
}

export default withNamespaces('common')(Page)
