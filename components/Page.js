import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Meta, NoteProvider } from '.'

class Page extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Meta />
        <NoteProvider>
          <main>{children}</main>
        </NoteProvider>
      </Fragment>
    )
  }
}

export default Page
