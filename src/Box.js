import * as React from 'react'
import Container from './styles'

const Box = React.forwardRef((props, ref) => {
  return <Container {...props} ref={ref} />
})

Box.displayName = 'Box'

export default Box
