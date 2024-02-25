import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { URL, options, getJSON, endPoints } from "../../api/crypto";
import { Charts, Heading, Card, LoadingSpinner } from "../index";
import { FaSortAmountUpAlt, FaMedal } from "react-icons/fa";
import {
  AiOutlineFall,
  AiFillDollarCircle,
  AiFillPlusSquare,
  AiOutlineLink,
} from "react-icons/ai";
import { BsFillCalendarDateFill, BsArrowReturnLeft } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
import { currencyFormatter, format } from "../../api/crypto";
import HTMLReactParser from "html-react-parser";

const CryptoCurrencyDetail = () => {
  const params = useParams();
  const [timePeriod, setTimePeriod] = useState("1y");
  const [isLoading, setIsLoading] = useState(true);
  const [isOtherLoading, setIsOtherLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [chartsData, setChartsData] = useState({});
  const coinAPI = useCallback(async () => {
    try {
      setIsOtherLoading(true);
      const data = await getJSON(
        URL,
        endPoints.coin,
        options,
        `/${params.cryptodetail}`
      );
      setCoinData(data.data);
      setIsOtherLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [params.cryptodetail]);

  const coinPriceHistoryAPI = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getJSON(
        URL,
        endPoints.coin,
        options,
        `/${params.cryptodetail}/history`,
        `?timePeriod=${timePeriod}`
      );

      setChartsData(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [params.cryptodetail, timePeriod]);

  useEffect(() => {
    Promise.allSettled([coinAPI(), coinPriceHistoryAPI()]);
  }, [coinAPI, coinPriceHistoryAPI]);

  return (
    <>
      <div className="flex justify-center items-center">
        {isOtherLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex items-center gap-4">
            <Heading>{coinData?.coin?.name}</Heading>
            <div className="w-6 h-6 ">
              <img src={coinData?.coin?.iconUrl} className="" alt="coin icon" />
            </div>
          </div>
        )}
      </div>
      <div className="h-[290px] w-[95%] mb-[4rem]">
        <Charts chartsData={chartsData} loadingState={isLoading} />
        <select
          className="w-[30%] text-center"
          onChange={(event) => {
            setTimePeriod(event.target.value);
          }}
        >
          <option value="1y">1 Year</option>
          <option value="3y">3 Years</option>
          <option value="5y">5 Years</option>
          <option value="3m">3 Months</option>
          <option value="30d">1 Month</option>
          <option value="7d">1 Week</option>
          <option value="24h">1 Day </option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-6">
        <Card>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-4 items-center">
              <FaSortAmountUpAlt />
              <span>24h Volume</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin["24hVolume"] === "NaN" ||
                  coinData?.coin["24hVolume"] === null
                    ? "-"
                    : currencyFormatter(coinData?.coin["24hVolume"])}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-4 items-center">
              <AiFillDollarCircle />
              <span>Price</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin["price"] === "NaN" ||
                  coinData?.coin["price"] === null
                    ? "-"
                    : currencyFormatter(coinData?.coin["price"])}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <AiFillPlusSquare />
              <span>MarketCap</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin["marketCap"] === "NaN" ||
                  coinData?.coin["marketCap"] === null
                    ? "-"
                    : currencyFormatter(coinData?.coin["marketCap"])}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <AiOutlineFall />
              <span>Change</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <div>
                  {coinData?.coin["change"] === "NaN" ||
                  coinData?.coin["change"] === null ? (
                    "-"
                  ) : coinData?.coin["change"] > 0 ? (
                    <p className="text-other-green">
                      +{coinData?.coin["change"]}%
                    </p>
                  ) : (
                    <p className="text-other-red">
                      {coinData?.coin["change"]}%
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <FaMedal />
              <span>Rank</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin["rank"] === "NaN" ||
                  coinData?.coin["rank"] === null
                    ? "-"
                    : coinData?.coin["rank"]}
                </p>
              )}
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <FaMedal />
              <span>All Time High</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin?.allTimeHigh["price"] === "NaN" ||
                  coinData?.coin?.allTimeHigh["price"] === null
                    ? "-"
                    : currencyFormatter(coinData?.coin?.allTimeHigh["price"])}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <BsFillCalendarDateFill />
              <span>ATH date</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin?.allTimeHigh["timestamp"] === "NaN" ||
                  coinData?.coin?.allTimeHigh["timestamp"] === null
                    ? "-"
                    : new Date(coinData?.coin?.allTimeHigh["timestamp"] * 1000)
                        .toUTCString()
                        .split(",")[1]
                        .slice(1, 12)}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <SiMarketo />
              <span>Total Supply </span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin?.supply["total"] === "NaN" ||
                  coinData?.coin?.supply["total"] === null
                    ? "-"
                    : format(coinData?.coin?.supply["total"])}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <BsArrowReturnLeft />
              <span>Total Circulating </span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin?.supply["circulating"] === "NaN" ||
                  coinData?.coin?.supply["circulating"] === null
                    ? "-"
                    : format(coinData?.coin?.supply["circulating"])}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center  mb-2">
            <div className="flex gap-4 items-center">
              <AiOutlineLink />
              <span>More...</span>
            </div>
            <div>
              {isOtherLoading ? (
                <LoadingSpinner />
              ) : (
                <p>
                  {coinData?.coin["websiteUrl"] === "NaN" ||
                  coinData?.coin["websiteUrl"] === null ? (
                    "-"
                  ) : (
                    <a
                      className="py-1 px-4 bg-accent-light text-grey-extralight"
                      href={coinData?.coin["websiteUrl"]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      More
                    </a>
                  )}
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <Heading>About</Heading>
        {isOtherLoading ? (
          <LoadingSpinner />
        ) : (
          HTMLReactParser(String(coinData?.coin?.description))
        )}
      </Card>
    </>
  );
};

export default CryptoCurrencyDetail;
