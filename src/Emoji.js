import React from 'react'

/**
 * <Emoji symbol="🐑" label="sheep"/>
 * <Emoji symbol="🐑"/>
 * See: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7
 */
export const Emoji = props => (
  <span
    className='emoji'
    role='img'
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
)
