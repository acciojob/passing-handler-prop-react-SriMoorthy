import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { classname, background, label } = config;

  return (
    <button
      className={classname}  // Assign the correct class name
      onClick={() => selectNextBackground({ background })}  // Set the selected background color
    >
      {label}  {/* Display the label of the button */}
    </button>
  );
};

export default ColourSelector;
