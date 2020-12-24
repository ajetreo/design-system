import React from 'react'
import { Text } from './Text'
import { Tombstone } from './Tombstone'

export default {
  component: Tombstone,
  title: 'Components/Typography/Tombstone'
}

export const Default = () => (
  <Text>
    The quick brown fox. <Tombstone />
  </Text>
)
