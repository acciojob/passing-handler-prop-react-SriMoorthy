import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({ background: '' });

  const handleColorChange = () => {
    const result = applyColor(setSelectionStyle);
    if (result !== 0) {
      console.error('Failed to apply color');
      return -1; // Indicate an error occurred
    }
    return 0; // Success
  };

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={handleColorChange}
    >
      <p className="subheading">Selection</p>
    </div>
  );
};

export default Selection;


