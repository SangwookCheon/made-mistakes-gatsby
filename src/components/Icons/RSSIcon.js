import React from 'react'
import PropTypes from 'prop-types'

import style from '../../styles/Icon.module.css'

function RSSIcon({ className }) {
  return (
    <svg
      viewBox="0 0 16 16"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      className={`${className} ${style.icon}`}
    >
      <path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" />
    </svg>
  )
}

RSSIcon.propTypes = {
  className: PropTypes.string,
}

RSSIcon.defaultProps = {
  className: undefined,
}

export default RSSIcon