import React, { useEffect, useState } from "react";
import TokenButton from "./TokenButton";
import SwapInput from "./SwapInput";
import SwitchToken from "./SwitchToken";
import "../styles/Swap.css";
const url = "https://api.pancakeswap.info/api/v2/tokens";
const Swap = () => {
  const [tokens, setToken] = useState([]);
  const getTokens = () => {
    fetch(url)
      .then((res) => res.json())
      .then((tokens) => {
        setToken(
          Object.keys(tokens.data).map(key => {
            return {token: key,...tokens.data[key]}
          }).filter((key, index) => {
            return index < 20;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTokens();
  }, [tokens]);
  return (
    <div className="swap-container">
      <div className="swap-box">
        <div className="swap-title">
          <h4>Swap</h4>
          <p className="subtitle">Trade your tokens</p>
        </div>
        <div className="swap-body">
          <div className="form-group">
            <TokenButton tokens={tokens}/>
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
