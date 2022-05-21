import React from "react";
import { Card, GlobalCard } from "../index";
import { millify } from "millify";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
import { FcCurrencyExchange } from "react-icons/fc";
import { AiFillPlusSquare } from "react-icons/ai";

const Main = () => {
  return (
    <div className=" bg-grey-extralight min-h-[100vh] p-10">
      <h2 className="text-grey-dark text text-2xl font-medium mt-6 mb-3">
        Global Statistics
      </h2>

      <div className="grid grid-cols-2 gap-2">
        <Card>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <BsCoin />
                <p className="font-medium">Coins</p>
              </div>
              <p>{millify(3220)}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <SiMarketo />
                <p className="font-medium"> Markets</p>
              </div>
              <p>{millify(27497)}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <FcCurrencyExchange />
                <p className="font-medium"> Exchanges</p>
              </div>
              <p>{millify(190)}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <AiFillPlusSquare />
                <p className="font-medium"> MarketCap</p>
              </div>
              <p>{millify(425992114544)}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <FaSortAmountUpAlt />
                <p className="font-medium"> 24h Volume</p>
              </div>
              <p>{millify(23752040073)}</p>
            </div>
          </div>
        </Card>
        <GlobalCard />

        <Card></Card>
      </div>
    </div>
  );
};

export default Main;

// "Coins": 3220,
//     "totalMarkets": 27497,
//     "totalExchanges": 190,
//     "totalMarketCap": "425992114544",
//     "total24hVolume": "23752040073",

// "bestCoins": [
//   {
//     "uuid": "razxDUgYGNAdQ",
//     "symbol": "ETH",
//     "name": "Ethereum",
//     "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
//     "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth"
//   },
//   {
//     "uuid": "Qwsogvtv82FCd",
//     "symbol": "BTC",
//     "name": "Bitcoin",
//     "iconUrl": "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
//     "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc"
//   },
//   {
//     "uuid": "HIVsRcGKkPFtW",
//     "symbol": "USDT",
//     "name": "Tether",
//     "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
//     "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt"
//   }
// ],
// "newestCoins": [
//   {
//     "uuid": "razxDUgYGNAdQ",
//     "symbol": "ETH",
//     "name": "Ethereum",
//     "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
//     "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth"
//   },
//   {
//     "uuid": "Qwsogvtv82FCd",
//     "symbol": "BTC",
//     "name": "Bitcoin",
//     "iconUrl": "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
//     "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc"
//   },
//   {
//     "uuid": "HIVsRcGKkPFtW",
//     "symbol": "USDT",
//     "name": "Tether",
//     "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
//     "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt"
//   }
