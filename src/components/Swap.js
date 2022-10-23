import React, { useEffect, useState } from "react";
import TokenButton from "./TokenButton";
import SwapInput from "./SwapInput";
import SwitchToken from "./SwitchToken";
import TokenListModal from "./TokenListModal";
import "../styles/Swap.css";
import { tokenData, nativeToken } from "../data/tokens";

import { BigNumber, ethers } from "ethers";

// Smart Contract Addresses/ABI imports
import { swapCA, swapABI } from "../data/contractAbi";

const Swap = ({ isConnected, signer, userAddress }) => {
  const [originalTokenList, setOriginalTokenList] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [currentTokenA, setCurrentTokenA] = useState({});
  const [currentTokenB, setCurrentTokenB] = useState({});
  const [tokenABalance, setTokenABalance] = useState(0.0);
  const [tokenBBalance, setTokenBBalance] = useState(0.0);
  const [currentTokenSelected, setCurrentTokenSelected] = useState("");
  const [tokenAInput, setTokenAInput] = useState(0.0);
  const [tokenBInput, setTokenBInput] = useState(0.0);
  const [isListModalToggled, setIsListModalToggled] = useState(false);

  const [swapContract, setSwapContract] = useState("");

  // Store all tokens from the original list
  const storeOriginalList = async () => {
    const tokenList = await tokenData();
    setOriginalTokenList(tokenList);
  };

  // Get and filter all tokens
  const getTokens = () => {
    setTokens(
      originalTokenList.filter((token, index) => {
        if (token.address === nativeToken) {
          setCurrentTokenA(token);
        }
        if (token.address === "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7") {
          setCurrentTokenB(token);
        }
        // ************* Mainnet code below *************************

        // if (token.address === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
        //   setCurrentTokenA(token);
        // }
        // if (token.address === "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377") {
        //   setCurrentTokenB(token);
        // }
        return index < 20;
      })
    );
  };
  const toggleListModal = (option) => {
    if (option === "A" || option === "B") {
      setCurrentTokenSelected(option);
    }
  };
  const replaceCurrentToken = (option, address) => {
    if (option === "A" || option === "B") {
      const newCurrentToken = originalTokenList.filter(
        (token) => token.address === address
      )[0];
      if (option === "A") {
        setCurrentTokenA(newCurrentToken);
        // setTokenAInput(calculateSwap(currentTokenB,currentTokenA,tokenBInput))
      } else {
        setCurrentTokenB(newCurrentToken);
        // setTokenBInput(calculateSwap(currentTokenA,currentTokenB,tokenAInput))
      }
      setIsListModalToggled(false);
      setCurrentTokenSelected("");
      setTokenAInput(0.0);
      setTokenBInput(0.0);
    }
  };
  const setSwapInput = (tokenInput, value) => {
    if (tokenInput === "tokenAInput" || tokenInput === "tokenBInput") {
      if (tokenInput === "tokenAInput") {
        setTokenAInput(value);
        setTokenBInput(calculateSwap(currentTokenA, currentTokenB, value));
      }
      if (tokenInput === "tokenBInput") {
        setTokenBInput(value);
        setTokenAInput(calculateSwap(currentTokenB, currentTokenA, value));
      }
    }
  };
  const calculateSwap = (baseObj, quoteObj, value) => {
    let bnbPriceBase = baseObj.price_BNB * value;
    let tokenPriceQuote = (1 / quoteObj.price_BNB) * bnbPriceBase;
    return tokenPriceQuote;
  };
  const swithCurrentToken = () => {
    let temp = currentTokenA;
    setCurrentTokenA(currentTokenB);
    setCurrentTokenB(temp);
    temp = tokenAInput;
    setTokenAInput(tokenBInput);
    setTokenBInput(temp);
  };
  const tokenDecimals = async (tokenAddress) => {
    // console.log(tokenAddress)
    let tD = await swapContract.getTokenDecimals(tokenAddress);
    // let result = BigNumber.from(10).pow(tD)
    return tD.toNumber();
  };
  const getUserTokenBalance = async (tokenAddress) => {
    const balance =
      tokenAddress === nativeToken
        ? await signer.getBalance()
        : await swapContract.getBalance(tokenAddress, userAddress);
    let decimals = await tokenDecimals(tokenAddress);
    const tokenBalance = ethers.utils.formatUnits(balance, decimals);
    return tokenBalance;
  };
  const setTokenBalances = async () => {
    let aBalance = await getUserTokenBalance(currentTokenA.address);
    let bBalance = await getUserTokenBalance(currentTokenB.address);
    setTokenABalance(aBalance);
    setTokenBBalance(bBalance);
  };
  useEffect(() => {
    storeOriginalList();
  }, []);
  useEffect(() => {
    getTokens();
  }, [originalTokenList]);
  useEffect(() => {
    if (currentTokenSelected === "A" || currentTokenSelected === "B") {
      setIsListModalToggled(true);
    } else {
      setIsListModalToggled(false);
    }
  }, [currentTokenSelected]);
  useEffect(() => {
    if (signer && userAddress) {
      setSwapContract(new ethers.Contract(swapCA, swapABI, signer));
    }
    // console.log("// Checking if this runs once")
  }, [signer, userAddress]);
  useEffect(() => {
    if (swapContract) {
      setTokenBalances();
    }
  }, [swapContract, currentTokenA,currentTokenB]);
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
              <TokenButton
                option={"A"}
                token={currentTokenA}
                toggleListModal={toggleListModal}
                tokenBalance={tokenABalance}
              />
              <SwapInput
                name="tokenAInput"
                value={tokenAInput}
                setSwapInput={setSwapInput}
              />
              <button className="max-swap-btn">MAX</button>
            </div>
            <SwitchToken swithCurrentToken={swithCurrentToken} />
            <div className="form-group">
              <TokenButton
                option={"B"}
                token={currentTokenB}
                toggleListModal={toggleListModal}
                tokenBalance={tokenBBalance}
              />
              <SwapInput
                name="tokenBInput"
                value={tokenBInput}
                setSwapInput={setSwapInput}
              />
            </div>
            <div className="form-group">
              <button className="swap-btn">Swap</button>
            </div>
          </div>
        </div>
      </div>
      {isListModalToggled && (
        <TokenListModal
          originalTokenList={originalTokenList}
          option={currentTokenSelected}
          replaceCurrentToken={replaceCurrentToken}
          tokens={tokens}
          setIsListModalToggled={setIsListModalToggled}
          isListModalToggled={isListModalToggled}
        />
      )}
    </>
  );
};

export default Swap;
