import React, { InputHTMLAttributes } from 'react';

function InputField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={`input-field${props.className ? ' ' + props.className : ''}`} />
  );
}

export default InputField;