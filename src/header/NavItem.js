import React, { forwardRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import { HeaderContext } from './HeaderContext'
export const StyledNavItem = styled.div`
  display: inline-flex;
  height: 3rem;
  line-height: 3rem;
  align-items: center;

  svg {
    margin-right: 0;
  }

  ${props =>
    props.showDesktop &&
    css`
      display: none;
      @media (min-width: ${props.navBreakpoint}px) {
        display: inline-flex;
      }
    `}

  ${props =>
    props.showMobile &&
    css`
      @media (min-width: ${props.navBreakpoint}px) {
        display: none;
      }
    `}
`
export const NavItem = forwardRef((props, ref) => {
  const { navBreakpoint } = useContext(HeaderContext)
  return <StyledNavItem ref={ref} navBreakpoint={navBreakpoint} {...props} />
})
