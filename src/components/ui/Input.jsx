import React from 'react';

/**
 * Lo-fi style Input component.
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.label] - Optional label text to display above the input.
 * @param {string} [props.type='text'] - The HTML input type.
 * @param {string} props.value - The current value.
 * @param {function} props.onChange - The change event handler callback.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string} [props.error] - Error message to display below.
 * @param {string} [props.name] - The name attribute.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled.
 */
function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  name,
  disabled = false
}) {
  return (
    <div className="lofi-input-container">
      {label && <label className="lofi-input-label" htmlFor={name}>[ {label} ]</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`lofi-input ${error ? 'input-error' : ''}`}
      />
      {error && <span className="lofi-input-error-msg">!! {error}</span>}
    </div>
  );
}

export default Input;
