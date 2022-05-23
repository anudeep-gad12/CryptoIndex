import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { URL, options, getJSON, endPoints } from "../../api/crypto";
import { Charts } from "../index";

const CryptoCurrencyDetail = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [chartsData, setChartsData] = useState({});
  const coinAPI = useCallback(async () => {
    setIsLoading(true);
    const data = await getJSON(
      URL,
      endPoints.coin,
      options,
      `/${params.cryptodetail}`
    );
    setCoinData(data.data);
    setIsLoading(false);
  }, [params.cryptodetail]);

  const coinPriceHistoryAPI = useCallback(async () => {
    setIsLoading(true);
    const data = await getJSON(
      URL,
      endPoints.coin,
      options,
      `/${params.cryptodetail}/history`,
      "?timePeriod=1y"
    );
    console.log(data);

    setChartsData(data.data);
    setIsLoading(false);
  }, [params.cryptodetail]);

  useEffect(() => {
    // coinAPI();
    // coinPriceHistoryAPI();
  }, [coinAPI, coinPriceHistoryAPI]);

  return (
    <div>
      <Charts chartsData={chartsData} loadingState={isLoading} />
    </div>
  );
};

export default CryptoCurrencyDetail;
