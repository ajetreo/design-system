import React from 'react'
import { LogoGrid } from './LogoGrid'

export default {
  component: LogoGrid,
  title: 'Components/LogoGrid'
}

const items = Array.from({ length: 15 }, (_, idx) => ({
  image: '/images/logo-brandmark-compact.svg',
  link: '/',
  title: `${idx} logo`
}))

export const Default = () => (
  <div style={{ padding: 64 }}>
    <LogoGrid items={items} />
  </div>
)
