import React, { useEffect, useState, useCallback } from "react";
import { GlobalCoinsCard, Heading, MainCoins } from "../index";
import { URL, options, getJSON, endPoints } from "../../api/crypto";
import { GlobalData, CoinsData, Coin } from "./Main.types";

const initialGlobalStats: GlobalData = {
  totalCoins: 0,
  totalMarkets: 0,
  totalExchanges: 0,
  totalMarketCap: 0,
  total24hVolume: 0,
};

const initialCoinsData: CoinsData = {
  coins: [],
};

const Main = () => {
  const [globalStats, setGlobalStats] =
    useState<GlobalData>(initialGlobalStats);
  const [coinsData, setCoinsData] = useState<CoinsData>(initialCoinsData);
  const [isLoading, setIsLoading] = useState(true);
  const globalDataAPI = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getJSON(URL, endPoints.stats, options, "");
      setGlobalStats(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const coinsDataAPI = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getJSON(
        URL,
        endPoints.coins,
        options,
        undefined,
        "?limit=10"
      );
      setCoinsData(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    Promise.allSettled([globalDataAPI(), coinsDataAPI()]);
  }, [globalDataAPI, coinsDataAPI]);
  return (
    <>
      <div className=" min-h-[100vh] p-10 1.5xl:p-6">
        <Heading>Global Statistics</Heading>
        <div className="grid grid-cols-2 gap-4 1.5xl:grid-cols-1 mb-10">
          <GlobalCoinsCard globalData={globalStats} LoadingState={isLoading} />
        </div>
        <div className="mt-[100px]">
          <Heading>Top 10 Cryptocurrency</Heading>
          <MainCoins coinsData={coinsData} LoadingState={isLoading} />
        </div>
      </div>
    </>
  );
};

export default Main;
