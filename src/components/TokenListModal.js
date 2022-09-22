import React from "react";
import "../styles/TokenListModal.css";

const TokenListModal = () => {
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
          <div className="token-list-item">
            <div className="token-info">
                <h4 className="token-name">Tether USD</h4>
                <h5 className="token-symbol">USDT</h5>
            </div>
            <span className="token-balance">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenListModal;
