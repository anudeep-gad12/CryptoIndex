import React from "react";
import { Card, LoadingSpinner } from "../index";

const GlobalNewCoinsCard = (props) => {
  return (
    <>
      <Card>
        <h1 className="text-xl bg-accent-light px-2 py-1 text-center text-grey-extralight font-medium">
          New Coins
        </h1>
        {props.loadingState ? (
          <div className="w-[100%] h-[125px] translate-x-[50%] translate-y-[50%]">
            <LoadingSpinner />
          </div>
        ) : (
          <table className="w-[100%] mt-2">
            <thead className="">
              <tr className="">
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

export default GlobalNewCoinsCard;
