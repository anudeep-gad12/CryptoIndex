import React, { useState, useEffect, useCallback } from "react";
import {
  getJSONPagination,
  options,
  currencyFormatter,
  format,
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

    console.log(data.data.coins);

    setCoinsData(data.data);
    setIsLoading(false);
  }, []);
  const nextPageHandler = () => {
    coinsDataAPI(10, pageCounter * 10);
    setPageCounter((prevState) => prevState + 1);
  };
  const previousPageHandler = () => {
    coinsDataAPI(10, (pageCounter - 2) * 10);
    setPageCounter((prevState) => prevState - 1);
  };
  useEffect(() => {
    coinsDataAPI(10, 0);
  }, [coinsDataAPI]);
  return (
    <>
      <div className="flex mb-10  justify-center mt-4">
        <input
          type="text"
          className="w-[70%] px-10 py-2 rounded-lg shadow-md text-xl"
          placeholder="Search...."
        />
      </div>
      <div className="flex justify-center h-[90vh] ">
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
                    className="text-center h-[60px] border-solid border-b-2 border-b-[#2222]"
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
                      <div>{coin.change}</div>
                    </td>
                    <td>{currencyFormatter(coin.marketCap)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex items-center justify-between ">
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
