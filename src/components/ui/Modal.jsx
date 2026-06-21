import React, { useEffect } from 'react';

/**
 * Reusable Modal dialog component.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Controls whether the modal is visible.
 * @param {function} props.onClose - Function to trigger when closing the modal.
 * @param {string} [props.title] - The title of the modal header.
 * @param {React.ReactNode} props.children - The body content of the modal.
 * @param {React.ReactNode} [props.footer] - Optional footer content (e.g. actions buttons).
 */
function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer
}) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {title && <h3 className="modal-title">{title}</h3>}
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
