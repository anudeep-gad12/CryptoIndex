import React from "react";
import { Card, LoadingSpinner } from "../index";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
import { FcCurrencyExchange } from "react-icons/fc";
import { AiFillPlusSquare } from "react-icons/ai";
import { format } from "../../api/crypto";

const GlobalCoinsCard = (props) => {
  // console.log("Global Card", props.loadingState);

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <BsCoin />
            <p className="font-medium">Coins</p>
          </div>
          <div>
            {props.loadingState ? (
              <LoadingSpinner />
            ) : (
              format(props.globalData.totalCoins)
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <SiMarketo />
            <p className="font-medium"> Markets</p>
          </div>
          <div>
            {props.loadingState ? (
              <LoadingSpinner />
            ) : (
              format(props.globalData.totalMarkets)
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FcCurrencyExchange />
            <p className="font-medium"> Exchanges</p>
          </div>
          <div>
            {props.loadingState ? (
              <LoadingSpinner />
            ) : (
              format(props.globalData.totalExchanges)
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <AiFillPlusSquare />
            <p className="font-medium"> MarketCap</p>
          </div>
          <div>
            {props.loadingState ? (
              <LoadingSpinner />
            ) : (
              format(props.globalData.totalMarketCap)
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaSortAmountUpAlt />
            <p className="font-medium"> 24h Volume</p>
          </div>
          <div>
            {props.loadingState ? (
              <LoadingSpinner />
            ) : (
              format(props.globalData.total24hVolume)
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GlobalCoinsCard;
