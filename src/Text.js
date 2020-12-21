import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
//import { color, typography } from './shared/styles'

const Container = styled.span`
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  font-family: ${props => props.theme.fontFamily};

  ${props =>
    props.truncated &&
    css`
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}

  ${props =>
    props.breakWord &&
    css`
      word-break: break-word;
      hyphens: auto;
    `}
`

/**
 * The Text Component is used to render textual content in various presentations.
 */
export function Text ({ fontSize, children, qa, ...rest }) {
  const qaText = typeof children === 'string' ? children : undefined

  return (
    <Container typeScale={fontSize} data-qa-text={qaText} {...qa} {...rest}>
      {children}
    </Container>
  )
}

Text.propTypes = {
  /** Maps to the typeScale system prop, sets font size and line height using Seeds values */
  fontSize: PropTypes.oneOf([
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    1100,
    1200
  ]),
  /** Controls the CSS word-break property */
  breakWord: PropTypes.bool,
  /** Truncates text into a single line with ellipsis */
  truncated: PropTypes.bool,
  children: PropTypes.node,
  qa: PropTypes.object
}

Text.defaultProps = {
  fontSize: 400,
  breakWord: false,
  truncated: false
}
