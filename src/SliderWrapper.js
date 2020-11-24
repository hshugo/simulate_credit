import Slider from "rc-slider";
import React from "react";
import 'rc-slider/assets/index.css';


function SliderWrapper({ max, min, handleSlider, value, setInput, marks }) {

  return (
    <>
      <Slider
        onChange={value => { setInput(value); handleSlider(value); } }
        value={value}
        min={min}
        max={max}
        handleStyle={{
          backgroundColor: "white",
          border: 0
        }}
        defaultValue={min}
        marks={marks}
        trackStyle={{
          background: "white"
        }}
      />
    </>
  );
}

export default SliderWrapper;
