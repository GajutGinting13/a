import React from "react"
import propTypes from 'prop-types'
export default function Button(props) {
    return (
        <div>
            <button>{props.children}</button>
        </div>
    )
}
Button.propTypes = {
    isPrimary: propTypes.bool,
    isWide: propTypes.bool,
    isSmall: propTypes.bool,
}