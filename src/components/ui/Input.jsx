import React from 'react';

/**
 * Reusable Input field component.
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.label] - Optional label text to display above the input.
 * @param {string} [props.type='text'] - The HTML input type ('text', 'password', 'email', 'number', etc.).
 * @param {string} props.value - The current value of the input.
 * @param {function} props.onChange - The change event handler callback.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string} [props.error] - Error message to display below the input (indicates error state).
 * @param {string} [props.name] - The name attribute for the input.
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
    <div className="input-container">
      {label && <label className="input-label" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`custom-input ${error ? 'input-error' : ''}`}
      />
      {error && <span className="input-error-msg">{error}</span>}
    </div>
  );
}

export default Input;
