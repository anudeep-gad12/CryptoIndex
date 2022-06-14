export const URL = "https://coinranking1.p.rapidapi.com";
const key = process.env.REACT_APP_CRYPTO_API_KEY;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": key,
  },
};

export const endPoints = {
  stats: "stats",
  coins: "coins",
  coin: "coin",
};

export const getJSON = async (
  URL,
  endpoint,
  options,
  additional = "",
  query = ""
) => {
  try {
    const response = await fetch(
      `${URL}/${endpoint}${additional}${query}`,
      options
    );
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err) {
    throw err.message;
  }
};

export const getJSONPagination = async (limit, offset, options) => {
  try {
    const response = await fetch(
      `https://coinranking1.p.rapidapi.com/coins?limit=${limit}&offset=${offset}`,
      options
    );
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err) {
    throw err.message;
  }
};

export const getJSONSearch = async (query, options) => {
  try {
    const response = await fetch(
      `https://coinranking1.p.rapidapi.com/coins?search=${query}`,
      options
    );
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err) {
    throw err.message;
  }
};

const formatter = new Intl.NumberFormat("en", {
  notation: "compact",
});
const percentageFormat = new Intl.NumberFormat("en", {
  style: "percent",
});

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
});

export const format = formatter.format;
export const currencyFormatter = currencyFormat.format;
export const percentageFormatter = percentageFormat.format;
