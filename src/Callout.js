import styled from 'styled-components'
import { Text } from './Text'
import { background, spacing, breakpoint, margin } from './shared/styles'

export const Callout = styled(Text)`
  background-color: ${background.app};
  padding: ${spacing.padding.large}px;
  color: #586368;
  margin-top: 48px;
  margin-bottom: 48px;
  margin-left: -${spacing.padding.medium}px;
  margin-right: -${spacing.padding.medium}px;

  @media (min-width: ${breakpoint}px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 40px;
    margin-bottom: ${margin.large}px;
  }
`
