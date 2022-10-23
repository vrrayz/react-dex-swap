export const swapCA = "0x40ecA28e7C50E55E82A24Accb12AF28c9202eB7F";

export const swapABI = [
  {
    inputs: [{ internalType: "address", name: "router", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inputToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "outputToken",
        type: "address",
      },
    ],
    name: "SwapTokens",
    type: "event",
  },
  {
    inputs: [],
    name: "UniswapV2Router02",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "token", type: "address" },
    ],
    name: "WETHTokenSwap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "token", type: "address" },
      { internalType: "address", name: "user", type: "address" },
    ],
    name: "getBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "token", type: "address" },
    ],
    name: "getTokenDecimals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWETH",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "inputToken", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "contract ERC20", name: "outputToken", type: "address" },
    ],
    name: "swapTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
