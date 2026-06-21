import React from 'react';

/**
 * Reusable Loader/Spinner component.
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.size='md'] - The size of the loader ('sm', 'md', 'lg').
 * @param {string} [props.type='spinner'] - The type of loading animation ('spinner', 'dots').
 * @param {string} [props.color] - Custom CSS color value to override default styles.
 */
function Loader({
  size = 'md',
  type = 'spinner',
  color
}) {
  const style = color ? { borderTopColor: color, borderColor: color } : {};

  if (type === 'dots') {
    return (
      <div className={`loader-dots loader-dots-${size}`} aria-label="Loading">
        <div style={color ? { backgroundColor: color } : {}}></div>
        <div style={color ? { backgroundColor: color } : {}}></div>
        <div style={color ? { backgroundColor: color } : {}}></div>
      </div>
    );
  }

  return (
    <div 
      className={`loader-spinner loader-spinner-${size}`} 
      style={style}
      role="status"
      aria-label="Loading"
    />
  );
}

export default Loader;
