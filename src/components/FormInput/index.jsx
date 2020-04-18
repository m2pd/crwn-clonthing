import React from 'react';

import './forminput.style.scss';

const FormInput = ({handleChange, label, ...ortherProps}) =>{
    return(
        <div className="group">
            <input type="text" className="form-input" onChange={handleChange} {...ortherProps} />
            {
                label ? 
                (<label className={`${ortherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInput;