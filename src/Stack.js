import styled from 'styled-components'
import { margin } from './shared/styles'

const getAlignment = value =>
  value === 'start' || value === 'end' ? 'flex-' + value : value

export const Stack = styled.div`
  display: flex;
  flex-direction: ${props => (props.axis === 'horizontal' ? 'row' : 'column')};
  justify-content: ${props => {
    return props.space === 'evenly'
      ? 'space-between'
      : getAlignment(props.distribution)
  }};
  align-items: ${props => getAlignment(props.alignment)};

  /* higher specificity to target component level margin values */
  && {
    > * {
      ${props => {
        const space = margin[props.space] ? margin[props.space] : props.space

        return space === 'evenly'
          ? {}
          : {
              [props.axis === 'horizontal'
                ? 'marginRight'
                : 'marginBottom']: space
            }
      }}
    }

    > *:last-child {
      ${props => ({
        [props.axis === 'horizontal' ? 'marginRight' : 'marginBottom']: 0
      })}
    }
  }
`

Stack.defaultProps = {
  axis: 'horizontal',
  space: 'small'
}
