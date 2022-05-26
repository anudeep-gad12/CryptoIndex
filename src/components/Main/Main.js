import React, { useEffect, useState, useCallback } from "react";
import {
  GlobalCoinsCard,
  GlobalBestCoinsCard,
  GlobalNewCoinsCard,
  Heading,
  MainCoins,
} from "../index";
import { URL, options, getJSON, endPoints } from "../../api/crypto";

const Main = () => {
  const [globalStats, setGlobalStats] = useState({});
  const [coinsData, setCoinsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const globalDataAPI = useCallback(async () => {
    setIsLoading(true);
    const data = await getJSON(URL, endPoints.stats, options, "");
    setGlobalStats(data.data);
    setIsLoading(false);
  }, []);

  const coinsDataAPI = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    Promise.allSettled([globalDataAPI(), coinsDataAPI()]);
  }, [globalDataAPI, coinsDataAPI]);
  return (
    <div className=" min-h-[100vh] p-10 1.5xl:p-6">
      <Heading>Global Statistics</Heading>
      <div className="grid grid-cols-2 gap-4 1.5xl:grid-cols-1 mb-10">
        <GlobalCoinsCard globalData={globalStats} loadingState={isLoading} />
        {/* <GlobalBestCoinsCard
          coinsData={globalStats.bestCoins}
          loadingState={isLoading}
        />
        <GlobalNewCoinsCard
          coinsData={globalStats.newestCoins}
          loadingState={isLoading}
        /> */}
      </div>
      <div className="mt-[100px]">
        <Heading>Top 10 Cryptocurrency</Heading>
        <MainCoins coinsData={coinsData} loadingState={isLoading} />
      </div>
    </div>
  );
};

export default Main;
