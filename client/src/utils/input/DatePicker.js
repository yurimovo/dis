import React from 'react'

const DatePicker = (props) => {
    return (
        <input
            onChange={ (event) => props.setValue(event.target.value) }
            value={ props.value }
            type={ props.type }
            placeholder={ props.placeholder }
        />
    )
}

export default DatePicker