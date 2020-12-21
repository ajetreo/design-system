import React from 'react'
import seedrandom from 'seedrandom'
import { TagItem } from './TagItem'

seedrandom('chromatic testing', { global: true })

export default {
  component: TagItem,
  title: 'Tag/TagItem'
}

export const Default = () => <TagItem>⚛️ React</TagItem>
export const Loading = () => <TagItem isLoading />
