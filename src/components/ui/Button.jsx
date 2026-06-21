import React from 'react';

/**
 * Reusable Button component.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {string} [props.variant='primary'] - The style variant ('primary', 'secondary', 'danger', 'outline').
 * @param {string} [props.size='md'] - The size ('sm', 'md', 'lg').
 * @param {function} [props.onClick] - The click handler function.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.type='button'] - The HTML button type ('button', 'submit', 'reset').
 */
function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  type = 'button' 
}) {
  const className = `custom-btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''}`;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
