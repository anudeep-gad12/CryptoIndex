import React, { useState, useEffect, useCallback } from "react";
import {
  getJSONPagination,
  options,
  currencyFormatter,
  getJSONSearch,
} from "../../api/crypto";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../index";
import { AiOutlineSearch } from "react-icons/ai";

const CryptoTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coinsData, setCoinsData] = useState({});
  const [pageCounter, setPageCounter] = useState(1);
  const coinsDataAPI = useCallback(async (limit, offset) => {
    setIsLoading(true);
    const data = await getJSONPagination(limit, offset, options);
    setCoinsData(data.data);
    setIsLoading(false);
  }, []);

  const searchAPI = useCallback(async (query) => {
    const data = await getJSONSearch(query, options);
    console.log(data);
  }, []);

  const nextPageHandler = () => {
    coinsDataAPI(10, pageCounter * 10);
    setPageCounter((prevState) => prevState + 1);
  };
  const previousPageHandler = () => {
    coinsDataAPI(10, (pageCounter - 2) * 10);
    setPageCounter((prevState) => prevState - 1);
  };

  const searchHandler = () => {};

  useEffect(() => {
    // coinsDataAPI(10, 0);
  }, [coinsDataAPI, searchAPI]);
  return (
    <>
      <div className=" mb-10  justify-center mt-4">
        <form action="" className="flex items-center gap-4 justify-center">
          <input
            type="text"
            className=" w-[70%] px-10 py-2 rounded-lg shadow-md text-lg"
            placeholder="Search...."
            onChange={searchHandler}
          />
          <button
            type="submit"
            className="bg-accent-light rounded-full p-2 text-grey-extralight"
          >
            <AiOutlineSearch className="w-6 h-6" />
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <table className="w-[80%] mb-10">
            <thead>
              <tr className="text-center bg-accent-light text-grey-extralight h-[40px]">
                <th>Rank</th>
                <th className="w-[25%]">Name</th>
                <th>Price</th>
                <th>Change</th>
                <th className="w-[20%]">MarketCap</th>
              </tr>
            </thead>
            <tbody>
              {coinsData?.coins?.map((coin) => {
                return (
                  <tr
                    key={coin.uuid}
                    className="text-center h-[60px] border-solid border-b-2 border-b-[#2222] font-semibold	"
                  >
                    <td>{coin.rank}</td>
                    <td>
                      <Link to={coin.uuid}>
                        <div className="flex items-center gap-4 underline underline-offset-2">
                          <img src={coin.iconUrl} alt="" className="w-4" />
                          <div>{coin.name}</div>
                        </div>
                      </Link>
                    </td>
                    <td>
                      <div className="">{currencyFormatter(coin.price)}</div>
                    </td>
                    <td>
                      {coin.change > 0 ? (
                        <div className="text-other-green">+{coin.change}%</div>
                      ) : (
                        <div className="text-other-red">{coin.change}%</div>
                      )}
                    </td>
                    <td>{currencyFormatter(coin.marketCap)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex items-center justify-between">
        {pageCounter === 1 ? (
          <button
            disabled
            className="px-6 py-2 bg-grey-regular text-grey-extralight"
          >
            &larr; Prev
          </button>
        ) : (
          <button
            onClick={previousPageHandler}
            className="px-6 py-2 bg-accent-light text-grey-extralight rounded"
          >
            &larr; Prev
          </button>
        )}

        <button
          onClick={nextPageHandler}
          className="px-6 py-2 bg-accent-light text-grey-extralight rounded"
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};

export default CryptoTable;
