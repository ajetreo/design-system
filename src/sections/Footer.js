import React from 'react'
import styled from 'styled-components'
import { typography } from '../shared/styles'
import { Text } from '../Text'
import { Link } from '../Link'

const FooterContainer = styled(Text).attrs({ as: 'footer' })`
  color: #586368;
  padding-bottom: 3rem;
  text-align: center;
`

const FooterLink = styled(Link).attrs({ tertiary: true })`
  color: #586368;
  font-weight: ${typography.weight.bold};
`

export const Footer = () => (
  <FooterContainer>
    Maintained by <FooterLink href='https://ajetreo.co/'>Ajetreo</FooterLink>{' '}
    and the amazing open source community.{' '}
    <FooterLink href='https://github.com/ajetreo/design-system'>
      Pull requests welcome!
    </FooterLink>
  </FooterContainer>
)
