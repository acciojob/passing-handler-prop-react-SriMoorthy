import React, { useState } from "react";
import '../styles/App.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

// Color configuration for buttons
const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)',
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)',
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)',
  },
];

// Title for the heading
const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  // State to store the selected background color
  const [nextBackground, selectNextBackground] = useState({ background: "" });

  // Function to apply the selected color to the box
  const applyColor = (updateSelectionStyle) => {
    if (!nextBackground || !updateSelectionStyle) {
      console.error("Invalid color or selection");
      return -1; // Return error code
    }
    updateSelectionStyle({ background: nextBackground.background });
    return 0; // Success code
  };

  return (
    <div id="master">
      <h5 className="heading">{title}</h5> {/* Display the title */}

      <div className="row">
        {/* Map through colourConfig to create buttons */}
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground} // Pass the color update function
          />
        ))}
      </div>

      <div className="row" id="children-wrapper">
        {/* Create the selection boxes */}
        {["selection1", "selection2", "selection3"].map((key) => (
          <Selection key={key} applyColor={applyColor} />
        ))}
      </div>
    </div>
  );
};

export default App;

