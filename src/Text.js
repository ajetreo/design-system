import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { color, typography } from './shared/styles'

export const Text = styled.p`
  letter-spacing: -0.33px;
  font-size: ${typography.size.m1}px;
  line-height: ${typography.size.m3}px;
  color: ${color.darkest};
  margin-top: 0;
  margin-bottom: 0;

  ${props =>
    props.variant === 'emphasis' &&
    css`
      color: inherit;
      font-weight: ${typography.weight.extrabold};
    `}
`

Text.propTypes = {
  /**
   Use variants to render a unique version of the component.
  */
  variant: PropTypes.string // `emphasis`
}
