import React, { useEffect, useState } from "react";
import TokenButton from "./TokenButton";
import SwapInput from "./SwapInput";
import SwitchToken from "./SwitchToken";
import TokenListModal from "./TokenListModal";
import "../styles/Swap.css";
const Swap = () => {
  const [isListModalToggled, setIsListModalToggled] = useState(false);
  return (
    <>
    <div className="swap-container">
      <div className="swap-box">
        <div className="swap-title">
          <h4>Swap</h4>
          <p className="subtitle">Trade your tokens</p>
        </div>
        <div className="swap-body">
          <div className="form-group">
            <TokenButton setIsListModalToggled={setIsListModalToggled} isListModalToggled={isListModalToggled}/>
            <SwapInput />
            <button className="max-swap-btn">MAX</button>
          </div>
          <SwitchToken />
          <div className="form-group">
            <TokenButton  setIsListModalToggled={setIsListModalToggled} isListModalToggled={isListModalToggled}/>
            <SwapInput />
          </div>
          <div className="form-group">
            <button className="swap-btn">Swap</button>
          </div>
        </div>
      </div>
    </div>
    {isListModalToggled && (<TokenListModal setIsListModalToggled={setIsListModalToggled} isListModalToggled={isListModalToggled}/>)}
    </>
  );
};

export default Swap;
