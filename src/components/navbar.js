import React, { useRef } from 'react';

function Sidepanel({ categories, isOpen, onClose }) {
  const sidepanelRef = useRef(null);

  const handleClose = () => {
    onClose();
  }

  return (
    <div className={`sidepanel ${isOpen ? 'open' : ''}`} ref={sidepanelRef}>
      <div className="header">
        <button className="close-btn" onClick={handleClose}>Close</button>
      </div>
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidepanel;
