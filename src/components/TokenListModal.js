import React, { useEffect, useState } from "react";
import "../styles/TokenListModal.css";

const url = "https://api.pancakeswap.info/api/v2/tokens";

const TokenListModal = () => {
  const [tokens, setToken] = useState([]);
  const getTokens = () => {
    fetch(url)
      .then((res) => res.json())
      .then((tokens) => {
        setToken(
          Object.keys(tokens.data)
            .map((key) => {
              return { token: key, ...tokens.data[key] };
            })
            .filter((key, index) => {
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
    <div className="modal-overlay token-list-modal">
      <div className="modal-box token-list-modal">
        <div className="modal-title token-list-modal"></div>
        <div className="modal-body">
          <div className="form-group">
            <input
              type="text"
              className="swap-form token-list-modal"
              placeholder="Token address or name"
            />
          </div>
          {tokens.map((token) => (
            <div className="token-list-item">
              <div className="token-info">
                <h4 className="token-name">{token.name}</h4>
                <h5 className="token-symbol">USDT</h5>
              </div>
              <span className="token-balance">0</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenListModal;
