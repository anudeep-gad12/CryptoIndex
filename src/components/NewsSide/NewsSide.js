import React, { useEffect, useCallback, useState } from "react";
import { getJSONNews, URL, options } from "../../api/news";
import { Card, Heading } from "../index";
const NewsSide = () => {
  const [newsData, setNewsData] = useState([]);
  const getNews = useCallback(async (query) => {
    const data = await getJSONNews(URL, query, options);

    console.log(data);
    setNewsData(data.articles.slice(1, 10));
  }, []);

  useEffect(() => {
    getNews("cryptocurrency");
  }, [getNews]);
  // console.log(newsData);

  return (
    <div className=" p-4">
      <Heading>Crypto News</Heading>
      <div className="flex flex-col gap-6">
        {newsData.map((news) => {
          return (
            <a
              href={news.link}
              target="_blank"
              rel="noreferrer"
              key={news.link}
            >
              <Card>
                <div className="">
                  <div className="flex">
                    <h1 className="font-semibold">{news.title} </h1>
                    <img
                      src={news.media}
                      alt="news about cryptocurrency"
                      className="rounded-md  w-[30%] block 1.5xl:hidden"
                    />
                  </div>
                  <p className="mt-4 text-sm">
                    {news.summary.slice(0, 100)}
                    <span>....</span>
                  </p>
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NewsSide;
