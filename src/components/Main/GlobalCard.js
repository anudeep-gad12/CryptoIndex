import React from "react";
import { Card } from "../index";

const GlobalCard = (props) => {
  return (
    <>
      <Card>
        <h1 className="text-xl bg-other-green px-2 py-1 text-center text-grey-extralight font-medium">
          Best Coins
        </h1>
        <table className="w-[100%] mt-2">
          <thead className="">
            <tr className="text-left">
              <th>Name</th>
              <th>Symbol</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="underline underline-offset-2 decoration-accent-light">
                Ethereum
              </td>
              <td>ETH</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="underline underline-offset-2 decoration-accent-light">
                Bitcoin
              </td>
              <td>BTC</td>
              <td>2</td>
            </tr>
            <tr>
              <td className="underline underline-offset-2 decoration-accent-light">
                Tether
              </td>
              <td>USDT</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default GlobalCard;
