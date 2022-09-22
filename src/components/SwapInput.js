import React from "react";

const SwapInput = ({ name, value, setSwapInput}) => {
  const setValue = (e) => {
    setSwapInput(name,e.target.value)
  }
  return (
    <input
      type="number"
      name={name}
      value={value}
      className="swap-form"
      step={"any"}
      placeholder="0.0"
      onChange={setValue}
    />
  );
};

export default SwapInput;
