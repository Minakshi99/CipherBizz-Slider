import React, { useState } from 'react';
import './SliderSwitch.css'; // Import your CSS file for styling

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsChecked(!isChecked);
      setIsLoading(false);

      console.log('API call with state:', isChecked ? 'on' : 'off');
    }, 1500); // Simulate a 1.5-second API call
  };

  return (
    <div className={`slider-page ${isChecked ? 'slider-on' : 'slider-off'}`}>
      <div className="loading-text">
        {isLoading && <strong>Loading...</strong>}
      </div>
      <label className={`toy-toggle ${isLoading ? 'loading' : ''}`} onClick={handleToggle}>
        <span className={`handle ${isChecked ? 'handle-on' : 'handle-off'}`}></span>
        <span className={`slider-text ${isChecked ? 'slider-text-on' : 'slider-text-off'}`}>
          {isChecked ? 'Checked In' : 'Checked Out'}
        </span>
      </label>
    </div>
  );
};

export default App;
