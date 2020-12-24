import React from 'react'

import { ThemeProvider } from 'styled-components'
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons'
import * as defaultTheme from '../src/shared/styles'
import { GlobalStyle } from '../src/shared/global'

const DEFAULT_BRAND_THEME = 'ajetreo-co'
const BRAND_THEMES = ['ajetreo-co', 'communa13-org']

const getTheme = (themeName = DEFAULT_THEME) => {
  console.log(defaultTheme)
  return defaultTheme
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

export const globalTypes = {
  theme: {
    name: 'Ajetreo Brand Themes',
    description:
      'Each Ajetreo brand has a unique theme for expressing style and feel. Select any brand theme to see the differences applied to the Ajetreo Design System.',
    defaultValue: DEFAULT_BRAND_THEME,
    toolbar: {
      icon: 'circlehollow',
      items: BRAND_THEMES
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false
  },
  layout: 'centered'
}
