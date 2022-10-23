import React from "react";

const TokenButton = ({ token, toggleListModal, option,tokenBalance }) => {
  const { symbol, img, address } = token;
  const checkLoadedImage = (e) => {
    const isLoaded = e.target.complete && e.target.naturalHeight !== 0;
    if (!isLoaded) {
      e.target.src = "/img/logos/randomtoken.svg";
      // console.log("Picture not complete")
    }
    // console.log(e.target.complete)
  };
  return (
    <div className="d-flex justify-content-between">
      <button
        className="swap-select-btn"
        onClick={() => toggleListModal(option)}
      >
        <img src={img} alt={address} width="24" onError={checkLoadedImage} />
        <span className="token">{symbol}</span>
        <svg
          viewBox="0 0 24 24"
          className="caret-down"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
        </svg>
      </button>
      <span className="text-light token-balance">{tokenBalance}</span>
    </div>
  );
};

export default TokenButton;
