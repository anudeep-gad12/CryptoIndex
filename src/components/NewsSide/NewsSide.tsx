import React, { useEffect, useCallback, useState } from "react";
import { getJSONNews, URL, options } from "../../api/news";
import { Card, Heading, LoadingSpinner } from "../index";

interface News {
  _id: string;
  title: string;
  summary: string;
  link: string;
  media: string;
}

const NewsSide = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState<News[]>([]);
  const getNews = useCallback(async (query: string) => {
    try {
      setIsLoading(true);
      const data = await getJSONNews(URL, query, options);
      setNewsData(data.articles.slice(1, 10));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getNews("cryptocurrency");
  }, [getNews]);

  return (
    <div className=" p-4">
      <Heading>Crypto News</Heading>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {newsData.map((news) => {
            return (
              <a
                href={news.link}
                target="_blank"
                rel="noreferrer"
                key={news._id}
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
      )}
    </div>
  );
};

export default NewsSide;
