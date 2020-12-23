import styled, { css } from 'styled-components'
import { color, typography, spacing } from '../shared/styles'
import { inlineGlow } from '../shared/animation'

function randomString (min, max) {
  const length = Math.random() * (max - min) + min
  return Math.round(36 ** length + 1 - Math.random() * 36 ** length)
    .toString(36)
    .slice(1)
}

export const TagItem = styled.div.attrs(({ isLoading, children }) => ({
  children: isLoading ? randomString(5, 12) : children,
  ...(isLoading && { 'aria-label': 'Loading tag' })
}))`
  display: inline-block;
  background: ${color.secondary};
  border-radius: ${spacing.borderRadius.small}px;
  padding: 6px 10px 4px 10px;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.extrabold};
  line-height: ${typography.size.m1}px;
  position: relative;
  color: ${color.lightest};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  white-space: nowrap;

  ${props =>
    props.isLoading &&
    css`
      cursor: progress !important;
      ${inlineGlow};
      &:hover {
        color: transparent;
      }
    `}
`

TagItem.defaultProps = {
  isLoading: false
}
