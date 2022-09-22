import React, { useEffect, useState } from "react";
import TokenButton from "./TokenButton";
import SwapInput from "./SwapInput";
import SwitchToken from "./SwitchToken";
import TokenListModal from "./TokenListModal";
import "../styles/Swap.css";
const url = "https://api.pancakeswap.info/api/v2/tokens";
const Swap = () => {
  const [tokens, setTokens] = useState([]);
  const [currentTokenA, setCurrentTokenA] = useState({});
  const [currentTokenB, setCurrentTokenB] = useState({});
  const [currentTokenSelected, setCurrentTokenSelected] = useState("");
  const [isListModalToggled, setIsListModalToggled] = useState(false);

  const getTokens = () => {
    fetch(url)
      .then((res) => res.json())
      .then((tokens) => {
        setTokens(
          Object.keys(tokens.data)
            .map((key) => {
              let currentToken = {
                address: key,
                ...tokens.data[key],
                img: `https://tokens.pancakeswap.finance/images/${key}.png`,
              };
              if (key === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
                setCurrentTokenA(currentToken);
              }
              if (key === "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377") {
                setCurrentTokenB(currentToken);
              }
              return currentToken;
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
  const toggleListModal = (option) => {
    if (option === "A" || option === "B") {
      setCurrentTokenSelected(option);
    }
  };
  const replaceCurrentToken = (option, address) => {
    if (option === "A" || option === "B") {
      const newCurrentToken = tokens.filter(
        (token) => token.address === address
      )[0];
      option === "A"
        ? setCurrentTokenA(newCurrentToken)
        : setCurrentTokenB(newCurrentToken);
      setIsListModalToggled(false);
      setCurrentTokenSelected("");
    }
  };
  useEffect(() => {
    getTokens();
  }, []);
  useEffect(() => {
    if (currentTokenSelected === "A" || currentTokenSelected === "B") {
      setIsListModalToggled(true);
    } else {
      setIsListModalToggled(false);
    }
  }, [currentTokenSelected]);
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
              />
              <SwapInput />
              <button className="max-swap-btn">MAX</button>
            </div>
            <SwitchToken />
            <div className="form-group">
              <TokenButton
                option={"B"}
                token={currentTokenB}
                toggleListModal={toggleListModal}
              />
              <SwapInput />
            </div>
            <div className="form-group">
              <button className="swap-btn">Swap</button>
            </div>
          </div>
        </div>
      </div>
      {isListModalToggled && (
        <TokenListModal
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
