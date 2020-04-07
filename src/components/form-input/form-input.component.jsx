import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...restOfTheProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...restOfTheProps} />
        {
            label ?
                (<label className={`${
                    restOfTheProps.value.length ? 'shrink' : ""
                    } form-input-label`}
                >
                    {label}
                </label>)
                : null
        }
    </div>
)

export default FormInput