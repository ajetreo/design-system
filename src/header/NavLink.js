import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { Link } from '../Link'
import { typography } from '../shared/styles'
import { HeaderContext } from './HeaderContext'

const StyledNavLink = styled(Link)`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.extrabold};
`

export const NavLink = forwardRef((props, ref) => {
  const { inverse } = useContext(HeaderContext)
  return (
    <StyledNavLink ref={ref} inverse={inverse} tertiary={!inverse} {...props} />
  )
})
