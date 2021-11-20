import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Button = ({ text, path }) => {
    return (
        <Link href={path} passHref>
            <a className="bg-black py-4 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer">
                {text}
            </a>
        </Link>
    )
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default Button
