import React from 'react'
import Link from 'next/link'

import { HOME, SECOND } from '../../routes'

const Nav = () => (
  <nav>
    <Link href={HOME}>
      <a>Home</a>
    </Link>
    {' | '}
    <Link href={SECOND}>
      <a>Second</a>
    </Link>
  </nav>
)

export default Nav
