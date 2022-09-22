import React from "react";
import "../styles/TokenListModal.css";

const TokenListModal = ({tokens,setIsListModalToggled,isListModalToggled,replaceCurrentToken,option}) => {
  return (
    <div className="modal-overlay token-list-modal">
      <div className="modal-box">
        <div className="modal-title">
            <h4 className="title">Select Token</h4>
          <button className="modal-close" onClick={() => setIsListModalToggled(!isListModalToggled)}>
            <svg
              viewBox="0 0 24 24"
              color="primary"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input
              type="text"
              className="swap-form"
              placeholder="Token address or name"
            />
          </div>
          {tokens.map((token) => 
            (
                <div className="token-list-item" key={token.address} onClick={() => replaceCurrentToken(option,token.address)}>
                  <div className="token-info">
                    <h4 className="token-name">{token.name}</h4>
                    <h5 className="token-symbol">{token.symbol}</h5>
                  </div>
                  <span className="token-balance">0</span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenListModal;
