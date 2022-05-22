import React, { Fragment } from "react";
import { Card } from "../index";
import { LoadingSpinner } from "../index";

const GlobalBestCoinsCard = (props) => {
  return (
    <>
      <Card>
        <h1 className="text-xl bg-other-green px-2 py-1 text-center text-grey-extralight font-medium">
          Best Coins
        </h1>
        {props.loadingState ? (
          <div className="w-[100%] h-[125px] translate-x-[50%] translate-y-[50%]">
            <LoadingSpinner />
          </div>
        ) : (
          <table className="w-[100%] mt-2">
            <thead className="">
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Symbol</th>
                <th className="text-left">Rank</th>
              </tr>
            </thead>

            <tbody>
              {props?.coinsData?.map((coin) => (
                <tr key={coin.uuid}>
                  <td className="underline underline-offset-2 decoration-accent-light">
                    {coin.name}
                  </td>
                  <td>{coin.symbol}</td>
                  <td>1</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </>
  );
};

export default GlobalBestCoinsCard;
