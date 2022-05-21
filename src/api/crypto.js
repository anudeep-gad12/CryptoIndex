const URL = "https://coinranking1.p.rapidapi.com/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": key,
  },
};

export const getJSON = async () => {
  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
