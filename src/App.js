import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [userPrice, setUserPrice] = useState(100);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeInput = (event) => {
    setUserPrice(event.target.value);
  }

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input type={"number"} min={0} value={userPrice} onChange={onChangeInput} />
          <ul>
            {coins.map((coin, index) => {
              if (userPrice >= coin.quotes.USD.price) {
                return (
                  <li key={index}>
                    {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
