import React, { useEffect } from 'react';

/**
 * Lo-fi style Modal component.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Controls whether the modal is visible.
 * @param {function} props.onClose - Function to trigger when closing the modal.
 * @param {string} [props.title] - The title of the modal header.
 * @param {React.ReactNode} props.children - The body content.
 * @param {React.ReactNode} [props.footer] - Optional footer content.
 */
function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer
}) {
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
    <div className="lofi-modal-overlay" onClick={onClose}>
      <div className="lofi-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="lofi-modal-header">
          {title && <h3 className="lofi-modal-title">[Modal: {title}]</h3>}
          <button className="lofi-modal-close" onClick={onClose} aria-label="Close modal">
            [ X ]
          </button>
        </div>
        <div className="lofi-modal-body">
          {children}
        </div>
        {footer && <div className="lofi-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
