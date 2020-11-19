import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handlerChange, lable, ...otherProps}) => (
  <div className='group'>
    <input className='form-input' onChange={handlerChange} {...otherProps} />
    {lable ? (
      <lable className={`${otherProps.value.length ? 'shrink' : ''} form-input-lable`}>
        {lable}
      </lable>
    ) : null}
  </div>
)

export default FormInput;