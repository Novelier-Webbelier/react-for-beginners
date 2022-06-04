import {useEffect, useState} from "react";

function SelectCoins({ coins }) {
  return (
    <select>
      {coins.map((coin, index) => (
        <option key={index}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
        </option>
      ))}
    </select>
  )
}

function Loading() {
  return (
    <strong>Loading...</strong>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false);
      })
  }, [])

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <Loading /> : <SelectCoins coins={coins} />}
    </div>
  );
}

export default App;
