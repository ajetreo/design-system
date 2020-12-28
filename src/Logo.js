import React from 'react'
import PropTypes from 'prop-types'

/**
 * Render Brand Logo component
 *
 * @param {Object} props component props
 * @returns {ReactElement} react element
 */
export function Logo ({ width, height }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height}>
      <text>Brand Logo</text>
    </svg>
  )
}

Logo.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

Logo.defaultProps = {
  height: 100,
  width: 100
}
