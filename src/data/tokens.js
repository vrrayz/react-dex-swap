const url = "https://api.pancakeswap.info/api/v2/tokens";

export const tokenData = async () => {
  const query = await fetch(url);
  const response = await query.json();
  const result = Object.keys(response.data).map((key) => {
    let currentToken = {
      address: key,
      ...response.data[key],
      img: `https://tokens.pancakeswap.finance/images/${key}.png`,
    };
    return currentToken;
  });
  return result
};
