import React from 'react';

interface TicketPopupProps {
  ticket: any; // Replace with your ticket type if available
  onClose: () => void;
}

const TicketPopup: React.FC<TicketPopupProps> = ({ ticket, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '440px',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
        display: 'flex', // Flex container
      }}
    >
      {/* Gradient Bar */}
      <div
        style={{
          width: '50px',
          background: 'linear-gradient(to bottom, #00ff00, #0000ff)',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#004B8D',
            color: '#fff',
            padding: '16px',
            borderTopRightRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Ticket #</h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            aria-label="Close"
          >
            ✖
          </button>
        </div>

        {/* Content Section */}
        <div
          style={{
            padding: '16px',
            overflowY: 'auto',
            maxHeight: '50vh', // Makes it scrollable if content exceeds
          }}
        >
          <p>
            <strong>Status:</strong>
          </p>
          <p>
            <strong>Priority:</strong>
          </p>
          <p>
            <strong>Summary:</strong>
          </p>
          <p>
            <strong>Created At:</strong>
          </p>
          <p>
            <strong>Property:</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketPopup;
