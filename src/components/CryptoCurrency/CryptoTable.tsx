import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  getJSONPagination,
  options,
  currencyFormatter,
  getJSONSearch,
} from "../../api/crypto";
import { debounce } from "../../api/helper";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../index";
import { AiOutlineSearch } from "react-icons/ai";

interface Coin {
  uuid: string;
  rank: string;
  name: string;
  price: string;
  change: string;
  marketCap: string;
  iconUrl: string;
}

interface CoinsData {
  coins: Coin[];
}

interface SearchResults extends CoinsData {}

const CryptoTable = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [coinsData, setCoinsData] = useState<CoinsData>({ coins: [] });
  const [pageCounter, setPageCounter] = useState<number>(1);
  const coinsDataAPI = useCallback(async (limit: number, offset: number) => {
    try {
      setIsLoading(true);
      const data = await getJSONPagination(limit, offset, options);
      setCoinsData(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const searchAPI = useCallback(async (query: string) => {
    try {
      setIsLoading(true);
      const data = await getJSONSearch(query, options);
      setSearchResults(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const nextPageHandler = debounce((): void => {
    coinsDataAPI(10, pageCounter * 10);
    setPageCounter((prevState) => prevState + 1);
  });
  const previousPageHandler = debounce((): void => {
    coinsDataAPI(10, (pageCounter - 2) * 10);
    setPageCounter((prevState) => prevState - 1);
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current.value.length > 0) {
      setIsSearchActive(true);
      searchAPI(inputRef.current.value);
    }
  };

  const viewAllHandler = () => {
    setIsSearchActive(false);
    inputRef.current.value = "";
  };
  useEffect(() => {
    coinsDataAPI(10, 0);
  }, [coinsDataAPI]);
  return (
    <>
      {isSearchActive ? (
        <button
          className="bg-accent-light text-grey-extralight rounded py-1 px-6"
          onClick={viewAllHandler}
        >
          View All
        </button>
      ) : (
        ""
      )}

      <div className=" mb-10  justify-center mt-4">
        <form
          action=""
          className="flex items-center gap-4 justify-center"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className=" w-[70%] px-10 py-2 rounded-lg shadow-md text-lg"
            placeholder="Search...."
            ref={inputRef}
          />
          <button
            type="submit"
            className="bg-accent-light rounded-full p-2 text-grey-extralight"
          >
            <AiOutlineSearch className="w-6 h-6" />
          </button>
        </form>
        {/* viewall button*/}
      </div>
      {/*View All table  */}
      {isSearchActive ? (
        ""
      ) : (
        <div className="flex justify-center">
          {isLoading ? (
            <div className="flex justify-center items-center h-[80vh]">
              <LoadingSpinner />
            </div>
          ) : (
            <table className="w-[80%] mb-10 md:w-[95%] md:text-sm md:font-thin">
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
                            <img
                              src={coin.iconUrl}
                              alt=""
                              className="w-4 md:hidden"
                            />
                            <div className="md:text-left">{coin?.name}</div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="">
                          {currencyFormatter(parseFloat(coin?.price))}
                        </div>
                      </td>
                      <td>
                        {Number(coin.change) > 0 ? (
                          <div className="text-other-green">
                            +{coin.change}%
                          </div>
                        ) : (
                          <div className="text-other-red">
                            {coin.change ? coin.change : "-"}%
                          </div>
                        )}
                      </td>
                      <td>{currencyFormatter(parseFloat(coin.marketCap))}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* SearchResults Table */}
      {isSearchActive ? (
        <div className="flex justify-center">
          {isLoading ? (
            <div className="flex justify-center items-center h-[80vh]">
              <LoadingSpinner />
            </div>
          ) : (
            <table className="w-[80%] mb-10 md:w-[100%] md:text-sm md:font-thin">
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
                {searchResults?.coins?.map((coin: Coin) => {
                  return (
                    <tr
                      key={coin.uuid}
                      className="text-center h-[60px] border-solid border-b-2 border-b-[#2222] font-semibold	"
                    >
                      <td>{coin.rank}</td>
                      <td>
                        <Link to={coin.uuid}>
                          <div className="flex items-center gap-4 underline underline-offset-2">
                            <img
                              src={coin.iconUrl}
                              alt=""
                              className="w-4 md:hidden"
                            />
                            <div className="md:text-left">{coin.name}</div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="">
                          {currencyFormatter(parseFloat(coin.price))}
                        </div>
                      </td>
                      <td>
                        {Number(coin.change) > 0 ? (
                          <div className="text-other-green">
                            +{coin.change}%
                          </div>
                        ) : (
                          <div className="text-other-red">
                            {coin.change ? `${coin.change}%` : "-"}
                          </div>
                        )}
                      </td>
                      <td>{currencyFormatter(parseFloat(coin.marketCap))}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        ""
      )}

      {/* Prev Next buttons */}
      {isSearchActive ? (
        ""
      ) : (
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

          {isLoading ? (
            <button
              onClick={nextPageHandler}
              className="px-6 py-2 bg-accent-light text-grey-extralight rounded"
              disabled
            >
              Next &rarr;
            </button>
          ) : (
            <button
              onClick={nextPageHandler}
              className="px-6 py-2 bg-accent-light text-grey-extralight rounded"
            >
              Next &rarr;
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CryptoTable;
