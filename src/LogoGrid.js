import React from 'react'
import styled from 'styled-components'
import { styles } from '@storybook/design-system'
import { margin } from './shared/styles'
import { BoxLink } from './BoxLink'

const LogoGridContainer = styled.div`
  display: grid;
  grid-gap: ${margin.xsmall}px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;

  @media (min-width: ${styles.breakpoint * 2}px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`

const LogoItem = styled(BoxLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0;
  padding-bottom: 100%;
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  background-size: 50%;
`

export const LogoGrid = ({ items }) => (
  <LogoGridContainer>
    {items.map(item => (
      <LogoItem
        key={item.title}
        href={item.link}
        target='_blank'
        rel='noopener nofollow'
        title={item.title}
        image={item.image}
      ></LogoItem>
    ))}
  </LogoGridContainer>
)
