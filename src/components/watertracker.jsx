import React, { useState } from "react";

const WaterTracker = () => {
  const [cupsFilled, setCupsFilled] = useState(0);

  const totalCups = 8;
  const oneCupML = 250;
  const goalInLiters = 2;

  const handleCupClick = (index) => {
    if (cupsFilled === index + 1) {
      setCupsFilled(index);
    } else {
      setCupsFilled(index + 1);
    }
  };

  const heightFilled = (cupsFilled / totalCups) * 330;
  const waterLeft = (goalInLiters - (cupsFilled * oneCupML) / 1000).toFixed(2);
  const percentFull = ((cupsFilled / totalCups) * 100).toFixed(0);

  return (
    <div className="container">
      <h1>Drink Water</h1>
      <h3>Goal: {goalInLiters} Liters</h3>

      <div className="cup">
        {cupsFilled > 0 && (
          <div className="percentage" style={{ height: `${heightFilled}px` }}>
            {percentFull}%
          </div>
        )}

        {cupsFilled < totalCups && (
          <div className="remained">
            <span>{waterLeft}L</span>
            <small>Left</small>
          </div>
        )}
      </div>

      <p className="text">Click cups to add how much water you drank.</p>

      <div className="cups">
        {Array.from({ length: totalCups }).map((cup, index) => (
          <div
            key={index}
            className={`cup-small ${index < cupsFilled ? "full" : ""}`}
            onClick={() => handleCupClick(index)}
          >
            250ml
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterTracker;
