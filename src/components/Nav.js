import React from 'react'

const Nav = ({setIsModalToggled,isModalToggled,isConnected,userAddress}) => {
  return (
    <nav className="custom-nav">
        <a href="/h" className="nav-brand">Dapp-Connect</a>
        <button
          className="btn nav-btn"
          onClick={() => setIsModalToggled(!isModalToggled)}
        >
          {isConnected ? `${userAddress.substring(0, 5)}...` : "Connect Dapp"}
        </button>
      </nav>
  )
}

export default Nav