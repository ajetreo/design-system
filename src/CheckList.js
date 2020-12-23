import React from 'react'
import styled from 'styled-components'
import { Icon, styles } from '@storybook/design-system'
import { Text } from './Text'

const { color } = styles

export const CheckList = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`

export const CheckListItemContainer = styled(Text).attrs({ as: 'li' })`
  margin-bottom: 1.25em;
  list-style: none;
  position: relative;
  padding-left: 32px;

  &:last-of-type {
    margin-bottom: 0;
  }

  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    padding: 4px;
    border-radius: 100%;
    top: 4px;
    left: 0px;
  }
`

const Bullet = styled(Icon).attrs(props => ({
  icon: props.type
}))`
  color: ${color.lightest};

  background: ${props =>
    props.type === 'check' ? color.green : color.negative};
`

export const CheckListItem = ({ type, children, ...props }) => (
  <CheckListItemContainer {...props}>
    <Bullet type={type} />
    {children}
  </CheckListItemContainer>
)
