import React, { useEffect } from 'react';

/**
 * Reusable Toast notification component.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.message - The notification message content.
 * @param {string} [props.type='info'] - The toast variant ('success', 'error', 'info').
 * @param {number} [props.duration=3000] - Duration in milliseconds before auto-closing.
 * @param {function} props.onClose - Dismiss callback triggered when timer expires or closed manually.
 * @param {boolean} props.visible - Controls whether the toast is visible.
 */
function Toast({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  visible
}) {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [visible, duration, onClose]);

  if (!visible) return null;

  return (
    <div className="toast-container">
      <div className={`toast toast-${type}`}>
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose} aria-label="Dismiss notification">
          &times;
        </button>
      </div>
    </div>
  );
}

export default Toast;
