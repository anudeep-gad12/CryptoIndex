export const URL = "https://coinranking1.p.rapidapi.com";
const key = "";

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

export const wait = (waitTime) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request took too long to respond! Please try again!");
    }, waitTime * 1000);
  });
};

export const timeOut = (wait, f1) => {
  Promise.race([wait, f1])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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
