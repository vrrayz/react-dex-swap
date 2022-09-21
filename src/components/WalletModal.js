import React from "react";

const WalletModal = ({isModalToggled,setIsModalToggled,walletOptions,connectDapp}) => {
    const modalToggle = () => {
        setIsModalToggled(!isModalToggled)
    }
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-title">
          <h3>Connect Wallet</h3>
          <button className="modal-close" onClick={modalToggle}>
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
          <div className="h-100 d-flex contents-center flex-column">
            <div className="row">{walletOptions.map((wallet) => {
            const { id, name, img } = wallet;
            return (
              <div className="col-6 mb-3" key={id}>
                <button className="wallet-option-btn" onClick={() => connectDapp(name)}>
                  <img src={img} className="wallet-logo" alt={name} />
                  <span className="wallet-name">{name}</span>
                </button>
              </div>
            );
          })}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
