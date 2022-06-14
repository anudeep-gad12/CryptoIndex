export const URL = "https://free-news.p.rapidapi.com/v1/search";
const key = process.env.REACT_APP_NEWS_API_KEY;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    "X-RapidAPI-Key": key,
  },
};

export const getJSONNews = async (URL, query = "", options) => {
  try {
    const response = await fetch(`${URL}?q=${query}&lang=en`, options);
    if (response.status === 429) throw new Error("Many Requests");
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err) {
    throw err.message;
  }
};
