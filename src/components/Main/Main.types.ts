export interface GlobalData {
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: number;
  total24hVolume: number;
}

export interface Coin {
  uuid: string;
  name: string;
  iconUrl: string;
  price: number;
  rank: number;
  change: number;
}

export interface CoinsData {
  coins: Coin[];
}
