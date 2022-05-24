import React from "react";
import { Card, LoadingSpinner } from "../index";
// import { format } from "../../api/crypto";
import { currencyFormatter } from "../../api/crypto";
import { Link, useLocation } from "react-router-dom";

const MainCoins = (props) => {
  return (
    <>
      {props.loadingState ? (
        <div className="flex justify-center items-center w-[100%] h-[100%]">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 py-4 1.5xl:grid-cols-2 sm:grid-cols-1 ">
          {props?.coinsData?.coins?.map((coin) => (
            <Link to={`/cryptocurrency/${coin.uuid}`} key={coin.uuid}>
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-xl">{coin.name}</h2>
                  <div className="w-10">
                    <img src={coin.iconUrl} alt="coin-icon" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col gap-1">
                    <p>Price</p>
                    <p className="font-semibold">
                      {currencyFormatter(coin.price)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <p>Rank</p>
                    <p className="font-semibold">{coin.rank}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>Change</p>
                    {coin.change > 0 ? (
                      <p className="text-other-greendark font-semibold">
                        +{coin.change}%
                      </p>
                    ) : (
                      <p className="text-other-red font-semibold">
                        {coin.change}%
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MainCoins;
