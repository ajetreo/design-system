import React from 'react'

import { Navbar } from './Navbar'
import { Backdrop } from '../Backdrop'

export default {
  component: Navbar,
  title: 'Sections/Navbar'
}

export const Default = () => (
  <Backdrop style={{ padding: 64 }}>
    <Navbar
      links={[
        { href: '#intro', title: 'Intro' },
        { href: '#team', title: 'Team' },
        { href: '#about', title: 'About' },
        { href: '#contact', title: 'Contact' }
      ]}
      githubLink={{
        namespace: 'ajetreo',
        repo: 'design-system'
      }}
    />
  </Backdrop>
)
