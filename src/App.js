import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import WalletModal from "./components/WalletModal";
import Swap from "./components/Swap";

import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { walletConnectRpc } from "./data/rpc";
import { walletOptions } from "./data/walletOptions";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [isModalToggled, setIsModalToggled] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [provider, setProvider] = useState("");
  const [signer, setSigner] = useState("");
  const [wallet, setWallet] = useState("");

  const connectDapp = async (optionSelected) => {
    const wcProvider = new WalletConnectProvider(walletConnectRpc);
    if (optionSelected === "WalletConnect") {
      await wcProvider
        .enable()
        .then(() => {
          setWallet(optionSelected);
          setProvider(new ethers.providers.Web3Provider(wcProvider));
        })
        .catch((err) => {
          throw new Error("Error Connecting to wallet");
        });
    } else {
      console.log("clicked");
      setWallet(optionSelected);
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  };
  const walletRequest = async () => {
    if (provider !== "" && wallet !== "") {
      if (wallet === "Metamask") {
        try {
          await provider
            .send("eth_requestAccounts", [])
            .then(() => setSigner(provider.getSigner()));
        } catch (error) {
          setWallet("");
        }
      } else {
        setSigner(provider.getSigner());
      }
    }
  };
  const connect = async () => {
    const ad = await signer.getAddress();
    setUserAddress(ad);
    setIsModalToggled(!isModalToggled);
    setIsConnected(true);
  };
  useEffect(() => {
    walletRequest();
  }, [provider, wallet]);
  useEffect(() => {
    if (signer !== "") {
      connect();
    }
  }, [signer]);
  return (
    <>
      <Nav
        setIsModalToggled={setIsModalToggled}
        isModalToggled={isModalToggled}
        isConnected={isConnected}
        userAddress={userAddress}
      />
      {isModalToggled && (
        <WalletModal
          setIsModalToggled={setIsModalToggled}
          isModalToggled={isModalToggled}
          walletOptions={walletOptions}
          connectDapp={connectDapp}
        />
      )}
      <Swap
        isConnected={isConnected}
        userAddress={userAddress}
        signer={signer}
      />
    </>
  );
}

export default App;
