export const URL = "https://free-news.p.rapidapi.com/v1/search";
const key: string = import.meta.env.VITE_NEWS_API_KEY;
import { optionsType } from "./crypto";

export const options: optionsType = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    "X-RapidAPI-Key": key,
  },
};

export const getJSONNews = async (
  URL: string,
  query: string = "",
  options: optionsType
) => {
  try {
    const response = await fetch(`${URL}?q=${query}&lang=en`, options);
    if (response.status === 429) throw new Error("Many Requests");
    if (!response.ok) throw new Error("Something went wrong! Please try again");
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err.message;
  }
};
