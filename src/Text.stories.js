import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Text } from './Text'

export default {
  title: 'Components/Typography/Text',
  component: Text
}

export const defaultStory = () => (
  <Text>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

defaultStory.story = {
  name: 'Default'
}
/*
export const size100 = () => (
  <Text fontSize={number('fontSize', 100)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size100.story = {
  name: 'Size 100'
}

export const size200 = () => (
  <Text fontSize={number('fontSize', 200)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size200.story = {
  name: 'Size 200'
}

export const size300 = () => (
  <Text fontSize={number('fontSize', 300)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size300.story = {
  name: 'Size 300'
}

export const size400 = () => (
  <Text fontSize={number('fontSize', 400)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size400.story = {
  name: 'Size 400'
}

export const size500 = () => (
  <Text fontSize={number('fontSize', 500)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size500.story = {
  name: 'Size 500'
}

export const size600 = () => (
  <Text fontSize={number('fontSize', 600)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size600.story = {
  name: 'Size 600'
}

export const size700 = () => (
  <Text fontSize={number('fontSize', 700)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size700.story = {
  name: 'Size 700'
}

export const size800 = () => (
  <Text fontSize={number('fontSize', 800)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size800.story = {
  name: 'Size 800'
}

export const size900 = () => (
  <Text fontSize={number('fontSize', 900)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size900.story = {
  name: 'Size 900'
}

export const size1000 = () => (
  <Text fontSize={number('fontSize', 1000)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

size1000.story = {
  name: 'Size 1000'
}

export const bold = () => (
  <Text fontWeight={text('fontWeight', 'bold')}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

bold.story = {
  name: 'Bold'
}

export const italicized = () => (
  <Text isItalicized={boolean('isItalicized', true)}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

italicized.story = {
  name: 'Italicized'
}

export const h1Tag = () => (
  <Text as={text('as', 'h1')}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

h1Tag.story = {
  name: 'H1 tag'
}

export const h2Tag = () => (
  <Text as={text('as', 'h2')}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

h2Tag.story = {
  name: 'H2 tag'
}

export const pTag = () => (
  <Text as={text('as', 'p')}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

pTag.story = {
  name: 'P tag'
}

export const spanTag = () => (
  <Text as={text('as', 'span')}>
    {text(
      'children',
      'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
    )}
  </Text>
)

spanTag.story = {
  name: 'Span tag'
}

export const noWordBreak = () => (
  <Text>
    {text('children', '')}
    "Wordsdonotbreak...SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidocious
  </Text>
)

noWordBreak.story = {
  name: 'No word break'
}

export const wordBreak = () => (
  <Text breakWord={text('overflow', 'breakWord')}>
    "Wordsdonotbreak...SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidocious
  </Text>
)

wordBreak.story = {
  name: 'Word break'
}

export const truncated = () => (
  <Text
    fontSize={number('fontSize', 700)}
    truncated={boolean('isTruncated', true)}
  >
    Supercalifragilisticexpialidocious Supercalifragilisticexpialidocious
    Supercalifragilisticexpialidocious Supercalifragilisticexpialidocious
    Supercalifragilisticexpialidocious Supercalifragilisticexpialidocious
  </Text>
)

truncated.story = {
  name: 'Truncated'
}
*/
