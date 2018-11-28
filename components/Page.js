import { Component } from 'react'
import PropTypes from 'prop-types'

import { Header, Meta } from '.'

class Page extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Meta />
        <Header />
        {children}
      </div>
    )
  }
}

export default Page
