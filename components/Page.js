import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, defaultTheme } from '../css'
import { Meta, NoteProvider } from '.'
import { Main } from './styles'

class Page extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={defaultTheme}>
        <Fragment>
          <Meta />
          <GlobalStyle />
          <NoteProvider>
            <Main>{children}</Main>
          </NoteProvider>
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default Page
