import styled from 'styled-components'
import { color } from './shared/styles'

export const Tombstone = styled.span`
  background-color: ${color.primary};
  content: '';
  display: inline-block;
  height: 14px;
  margin-left: 10px;
  width: 14px;
`
