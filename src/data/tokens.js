const url = "https://api.pancakeswap.info/api/v2/tokens";

export const testnetTokenData = [
  {
    address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    img: "https://tokens.pancakeswap.finance/images/0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd.png",
    name: "Wrapped BNB",
    price: "340.331",
    price_BNB: "1",
    symbol: "WBNB",
  },
  {
    address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
    img: "https://tokens.pancakeswap.finance/images/0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7.png",
    name: "BUSD Token",
    price: "1",
    price_BNB: "0.00261617",
    symbol: "BUSD",
  },
  {
    address: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
    img: "https://tokens.pancakeswap.finance/images/0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5.png",
    name: "Bakery Token",
    price: "0.289251",
    price_BNB: "0.00053076",
    symbol: "BAKE",
  },
  {
    address: "0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8",
    img: "https://tokens.pancakeswap.finance/images/0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8.png",
    name: "BTCB",
    price: "234.275",
    price_BNB: "0.663737",
    symbol: "BTCB",
  },
  {
    address: "0x8a9424745056Eb399FD19a0EC26A14316684e274",
    img: "https://tokens.pancakeswap.finance/images/0x8a9424745056Eb399FD19a0EC26A14316684e274.png",
    name: "DAI TOKEN",
    price: "0.854548",
    price_BNB: "0.00224814",
    symbol: "DAI",
  },
];

export const tokenData = async () => {

  return testnetTokenData;

  // ************* Mainnet code below *************************
  // const query = await fetch(url);
  // const response = await query.json();
  // const result = Object.keys(response.data).map((key) => {
  //   let currentToken = {
  //     address: key,
  //     ...response.data[key],
  //     img: `https://tokens.pancakeswap.finance/images/${key}.png`,
  //   };
  //   return currentToken;
  // });
  // return result;
};
