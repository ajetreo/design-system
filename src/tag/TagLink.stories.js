import React from 'react'
import seedrandom from 'seedrandom'
import { TagLink } from './TagLink'
import { StoryLinkWrapper } from '../StoryLinkWrapper'

seedrandom('chromatic testing', { global: true })

export default {
  component: TagLink,
  title: 'Tag/TagLink'
}

export const Default = () => (
  <TagLink href='https://chromatic.com'>⚛️ React</TagLink>
)

export const WithLinkWrapper = () => (
  <TagLink to='https://chromatic.com' LinkWrapper={StoryLinkWrapper}>
    ⚛️ React
  </TagLink>
)

export const Loading = () => <TagLink isLoading />
