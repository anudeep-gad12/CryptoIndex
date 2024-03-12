import React from "react";
import { Card, LoadingSpinner } from "../index";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
import { FcCurrencyExchange } from "react-icons/fc";
import { AiFillPlusSquare } from "react-icons/ai";
import { format } from "../../api/crypto";
import { GlobalData } from "./Main.types";

interface GlobalCoinsCardProps {
  globalData: GlobalData;
  LoadingState: boolean;
}

const GlobalCoinsCard = ({
  globalData,
  LoadingState,
}: GlobalCoinsCardProps) => {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <BsCoin />
            <p className="font-medium">Coins</p>
          </div>
          <div>
            {LoadingState ? <LoadingSpinner /> : format(globalData.totalCoins)}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <SiMarketo />
            <p className="font-medium"> Markets</p>
          </div>
          <div>
            {LoadingState ? (
              <LoadingSpinner />
            ) : (
              format(globalData.totalMarkets)
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FcCurrencyExchange />
            <p className="font-medium"> Exchanges</p>
          </div>
          <div>
            {LoadingState ? (
              <LoadingSpinner />
            ) : (
              format(globalData.totalExchanges)
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <AiFillPlusSquare />
            <p className="font-medium"> MarketCap</p>
          </div>
          <div>
            {LoadingState ? (
              <LoadingSpinner />
            ) : (
              `$${format(globalData.totalMarketCap)}`
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaSortAmountUpAlt />
            <p className="font-medium"> 24h Volume</p>
          </div>
          <div>
            {LoadingState ? (
              <LoadingSpinner />
            ) : (
              `$${format(globalData.total24hVolume)}`
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GlobalCoinsCard;
