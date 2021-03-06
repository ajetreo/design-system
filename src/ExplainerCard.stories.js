import React from 'react'
import { ExplainerCard } from './ExplainerCard'
import { Backdrop } from './Backdrop'

export default {
  component: ExplainerCard,
  title: 'Components/ExplainerCard'
}

export const Default = () => (
  <Backdrop style={{ padding: 64 }}>
    <ExplainerCard
      illustration={
        <img
          src='https://placeimg.com/640/480/animals'
          alt='I should write something clever and meaningful'
        />
      }
      term='Build one component at a time'
      definition='Build each component in isolation and define its relevant states. Start
        small.'
      examples={['Avatar', 'Button']}
    />
  </Backdrop>
)
