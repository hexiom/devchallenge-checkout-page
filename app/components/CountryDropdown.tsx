import React, { forwardRef, SelectHTMLAttributes } from 'react';
import countries from "@/app/data/countries.json"

const CountryDropdown = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>((props, ref) => {
  const className = `dropdown ${props.className ?? ''}`
  
  return (
    <div className='select-option'>
      <select aria-label='Dropdown' {...props} ref={ref} className={className.trim()} >
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      <div aria-live="polite"></div>
    </div>
  );
});

CountryDropdown.displayName = 'CountryDropdown';
export default CountryDropdown;