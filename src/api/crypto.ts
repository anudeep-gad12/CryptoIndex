export const URL: string = "https://coinranking1.p.rapidapi.com";
const key: string = import.meta.env.VITE_CRYPTO_API_KEY;

export type optionsType = {
  method: string;
  headers: { [key: string]: string };
};

export const options: optionsType = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": key,
  },
};

export const endPoints: { stats: string; coins: string; coin: string } = {
  stats: "stats",
  coins: "coins",
  coin: "coin",
};

export const getJSON = async (
  URL: string,
  endpoint: string,
  options: optionsType,
  additional: string = "",
  query: string = ""
) => {
  try {
    const response = await fetch(
      `${URL}/${endpoint}${additional}${query}`,
      options
    );
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err.message;
  }
};

export const getJSONPagination = async (
  limit: number,
  offset: number,
  options: optionsType
) => {
  try {
    const response = await fetch(
      `https://coinranking1.p.rapidapi.com/coins?limit=${limit}&offset=${offset}`,
      options
    );
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err.message;
  }
};

export const getJSONSearch = async (query: string, options: optionsType) => {
  try {
    const response = await fetch(
      `https://coinranking1.p.rapidapi.com/coins?search=${query}`,
      options
    );
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err: any) {
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
