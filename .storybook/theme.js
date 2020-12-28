// Custom theme for the docs storybook
// See: https://storybook.js.org/docs/react/configure/theming
// See: https://github.com/storybookjs/storybook/blob/next/docs/snippets/common/your-theme.js.mdx
import { create } from '@storybook/theming/create'
import logo from '../src/public/images/logo-full.svg'

export default create({
  base: 'light',
  brandTitle: 'Ajetreo',
  brandUrl: 'https://github.com/ajetreo',
  brandImage: `/${logo}`
  //typography: {
  //  size: '16px'
  //}
})
