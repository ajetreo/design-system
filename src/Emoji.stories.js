import React from 'react'
import { Text } from './Text'
import { Emoji } from './Emoji'

export default {
  component: Emoji,
  title: 'Components/Typography/Emoji'
}

export const Default = () => (
  <Text>
    The quick brown fox. <Emoji symbol='🐑' label='sheep' />
  </Text>
)
