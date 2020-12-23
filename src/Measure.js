import styled from 'styled-components'
import { measure } from './shared/styles'

export const Measure = styled.div`
  max-width: ${props => measure[props.variant]}px;
  margin-left: auto;
  margin-right: auto;
`
