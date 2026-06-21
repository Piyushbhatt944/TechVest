import React, { useState } from 'react';
import { Button, Input, Modal, Toast, Loader } from '../components/ui';

function ComponentShowcase() {
  // Input state
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toast state
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Input change handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Demonstrate basic error state
    if (value.length < 5 && value.length > 0) {
      setInputError('Input must be at least 5 characters long');
    } else {
      setInputError('');
    }
  };

  // Toast trigger helper
  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setIsToastVisible(true);
  };

  return (
    <div className="showcase-container">
      <h1 className="figma-showcase-title">Component Library Showcase</h1>

      {/* 1. Button Component Section */}
      <section className="showcase-section">
        <h2>Button Component</h2>
        <div className="showcase-row">
          <Button variant="primary" onClick={() => showToast('Primary Button clicked!', 'info')}>
            Primary
          </Button>
          <Button variant="secondary" onClick={() => showToast('Secondary Button clicked!', 'info')}>
            Secondary
          </Button>
          <Button variant="danger" onClick={() => showToast('Danger Button clicked!', 'error')}>
            Danger
          </Button>
          <Button variant="outline" onClick={() => showToast('Outline Button clicked!', 'success')}>
            Outline
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="showcase-row" style={{ marginTop: '10px' }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </section>

      {/* 2. Input Component Section */}
      <section className="showcase-section">
        <h2>Input Component</h2>
        <div style={{ maxWidth: '400px' }}>
          <Input
            label="Interactive Demo (min 5 chars)"
            placeholder="Type something here..."
            value={inputValue}
            onChange={handleInputChange}
            error={inputError}
            name="demo-input"
          />
          <Input
            label="Disabled Input"
            placeholder="Cannot type in here..."
            value=""
            onChange={() => {}}
            disabled
            name="disabled-input"
          />
        </div>
      </section>

      {/* 3. Loader Component Section */}
      <section className="showcase-section">
        <h2>Loader Component</h2>
        <div className="showcase-row" style={{ gap: '30px' }}>
          <div>
            <h4 style={{ marginBottom: '10px' }}>Spinners</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Loader size="sm" type="spinner" />
              <Loader size="md" type="spinner" />
              <Loader size="lg" type="spinner" />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>Dots</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Loader size="sm" type="dots" />
              <Loader size="md" type="dots" />
              <Loader size="lg" type="dots" />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>Custom Color</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Loader size="md" type="spinner" color="var(--primary)" />
              <Loader size="md" type="dots" color="var(--secondary)" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modal Component Section */}
      <section className="showcase-section">
        <h2>Modal Component</h2>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal Dialog
        </Button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Interactive Modal Dialog"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {
                setIsModalOpen(false);
                showToast('Action Confirmed!', 'success');
              }}>
                Confirm
              </Button>
            </>
          }
        >
          <p>This modal matches the clean, rounded prototype panel look. Background body scrolling is locked while visible.</p>
        </Modal>
      </section>

      {/* 5. Toast Component Section */}
      <section className="showcase-section">
        <h2>Toast Component</h2>
        <div className="showcase-row">
          <Button variant="outline" onClick={() => showToast('Success Notification!', 'success')}>
            Show Success Toast
          </Button>
          <Button variant="outline" onClick={() => showToast('Error Notification!', 'error')}>
            Show Error Toast
          </Button>
          <Button variant="outline" onClick={() => showToast('Info Notification!', 'info')}>
            Show Info Toast
          </Button>
        </div>

        <Toast
          visible={isToastVisible}
          message={toastMessage}
          type={toastType}
          duration={3000}
          onClose={() => setIsToastVisible(false)}
        />
      </section>
    </div>
  );
}

export default ComponentShowcase;
