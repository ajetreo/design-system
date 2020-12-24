import PropTypes from 'prop-types'

/**
 * Render Brand Logo component
 *
 * @param {Object} props component props
 * @returns {ReactElement} react element
 */
export function Logo ({ width, height }) {
  return (
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height}>
        <path d='M.8.8H0V0h7.8v.8h-2L10 22.6 14.2.8h-2.5V0h4.8v.8H15l-6 31H7m9.5-10.5h4.7L18.8 9l-2.3 12.3zM12.3 31h1.4l6-31H22l6 31h.7v.7H21V31h2l-1.7-9h-5l-1.7 9H17v.7h-4.7V31zM30 31h1V.8h-2V0h7l7 18.8V.8h-2.2V0h4.7v.8h-1.7v31h-1.4L32 2.2V31h2v.7h-4m17.2 0V31h1.4V.8h-1.4V0H55v.8h-1.5V31H55v.7m6 0V31h1.6V.7c-2.2 0-4.2 2-4.6 11.7h-.7V0H73v12.4h-1C71.8 2.8 69.6.7 67.7.7V31H69v.7h-8zm18 0V31h1.5V17L76 1h-1V0h8v.8h-2.3L85 15.6 88.5.8h-2.3V0h4.4v.8h-1.2l-4 16.2v14h1.3v.7m18.3 0V31h1.2V.7H105V0h13.8v9.5h-.8c-.4-6.7-2.4-8.8-6-8.8h-1V15h.5c2.7 0 3.5-1.2 3.7-5.5h.7v12h-1c0-4.8-1-5.8-3.5-5.8h-.6V31h2v.7h-8zm16.8-10.4h4.8L124.2 9l-2.4 12.3zm-4.2 9.7h1.4l6-31h2.2l6 31h1v.7h-8V31h2.3l-1.8-9h-5l-1.8 9h2.2v.7h-4.8V31zm17.4.7V31h1.3V.8H135V0h7.6v.8h-1.4V31h1.4v.7m8.4-31v13.6h.8c2.4 0 4 .2 4-5.7V7c0-5.5-1.6-6.3-3.7-6.3h-1zm4.6 27V20c0-4.3-1.2-5-3.6-5h-1v16h2v.7h-8V31h1.2V.7H145V0h7c5.3 0 8.6 2.4 8.6 7.8 0 4.8-2.8 6.4-6.4 7 3.7.5 6.3 2 6.3 7.6v7.3c0 1 .3 1.3.8 1.3.4 0 .7-.2 1-.3v.8c-.3.2-1.2.5-2.3.5-2.7 0-4.4-1-4.4-4.4z' />
      </svg>
    </div>
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

module.exports = Log
