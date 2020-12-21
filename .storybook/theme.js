// Custom theme for the docs storybook
// See: https://storybook.js.org/docs/react/configure/theming
import { create } from '@storybook/theming/create'
import logo from '../src/images/logo-full.svg'

export default create({
  base: 'light',
  brandTitle: 'Ajetreo',
  brandUrl: 'https://github.com/ajetreo',
  brandImage: `/${logo}`
})
