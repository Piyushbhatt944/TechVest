import React from 'react';

/**
 * Lo-fi style Loader component.
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.size='md'] - The size of the loader ('sm', 'md', 'lg').
 * @param {string} [props.type='spinner'] - The type of loader ('spinner', 'dots').
 */
function Loader({
  size = 'md',
  type = 'spinner'
}) {
  if (type === 'dots') {
    return (
      <div className={`lofi-loader-text loader-text-${size}`} aria-label="Loading">
        ... [ LOADING ] ...
      </div>
    );
  }

  return (
    <div className={`lofi-loader-box loader-box-${size}`} role="status" aria-label="Loading">
      <div className="lofi-loader-inner"></div>
    </div>
  );
}

export default Loader;
