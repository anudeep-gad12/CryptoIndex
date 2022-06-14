import React, { useEffect, useCallback, useState, useRef } from "react";
import { URL, options, getJSONNews } from "../../api/news";
import { AiOutlineSearch } from "react-icons/ai";
import { Card, LoadingSpinner } from "../index";

const NewsMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const inputRef = useRef("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (!inputRef.current.value) return;
    getNews(inputRef.current.value);
    inputRef.current.value = "";
  };
  const getNews = useCallback(async (query) => {
    try {
      setIsLoading(true);
      const data = await getJSONNews(URL, query, options);
      setNewsData(data.articles);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getNews("cryptocurrency");
  }, [getNews]);
  return (
    <>
      <div className=" mb-10  justify-center mt-4">
        <form
          action=""
          className="flex items-center gap-4 justify-center"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            ref={inputRef}
            className=" w-[70%] px-10 py-2 rounded-lg shadow-md text-lg"
            placeholder="Search category...."
          />
          <button
            type="submit"
            className="bg-accent-light rounded-full p-2 text-grey-extralight"
          >
            <AiOutlineSearch className="w-6 h-6" />
          </button>
        </form>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-2 lg:gap-2 sm:grid-cols-1">
          {newsData.map((news) => {
            return (
              <Card key={news._id}>
                <div className="flex flex-col">
                  <div>
                    <img
                      src={news.media}
                      alt={news.title}
                      className="max-w-[100%] max-h-[250px] h-[100%]"
                    />
                  </div>
                  <div className="flex justify-between mt-2 mb-4">
                    <p className="text-xs">{news.clean_url}</p>
                    <p className="text-xs">
                      {new Date(news.published_date).toDateString()}
                    </p>
                  </div>
                  <p className="text-lg font-semibold mb-2">{news.title}</p>
                  <div>
                    <p>{news.summary.split(" ").slice(0, 20).join(" ")}...</p>
                    <a
                      href={news.link}
                      target="_blank"
                      className="block px-2 py-1  w-[120px] mt-6 	self-end	hover:bg-grey-alwhite text-accent-dark border-b-2 bg-grey-extralight font-semibold rounded"
                      rel="noreferrer"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NewsMain;
