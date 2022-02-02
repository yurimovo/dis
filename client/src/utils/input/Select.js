import React from 'react'

const Select = (props) => {
    return (
        <select 
            onChange={ (event) => props.setValue(event.target.value) }
            value={ props.value }
            type={ props.type }
            placeholder={ props.placeholder }
            className={'input-select'}
        />
    )
}

export default Select