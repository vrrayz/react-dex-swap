import React from "react";
import TokenButton from "./TokenButton";
import SwapInput from "./SwapInput";
import SwitchToken from "./SwitchToken";
import "../styles/Swap.css";

const Swap = () => {
  return (
    <div className="swap-container">
      <div className="swap-box">
        <div className="swap-title">
          <h4>Swap</h4>
          <p className="subtitle">Trade your tokens</p>
        </div>
        <div className="swap-body">
          <div className="form-group">
            <TokenButton />
            <SwapInput />
            <button className="max-swap-btn">MAX</button>
          </div>
          <SwitchToken />
          <div className="form-group">
            <TokenButton />
            <SwapInput />
          </div>
          <div className="form-group">
            <button className="swap-btn">Swap</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
