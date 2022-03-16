import { useEffect, useState } from "react";

const useCryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const preparedData = [];
        for (let d of data.Data) {
          const { Id, Name, FullName, ImageUrl, Url } = d.CoinInfo;
          let price, change24hr;
          if (d.DISPLAY?.USD) {
            const { PRICE, CHANGEPCT24HOUR } = d.DISPLAY.USD;
            price = PRICE;
            change24hr = CHANGEPCT24HOUR;
          }
          preparedData.push({
            Id,
            Name,
            FullName,
            imageUrl: `https://www.cryptocompare.com${ImageUrl}`,
            url: `https://www.cryptocompare.com${Url}`,
            price,
            change24hr
          });
        }
        setCryptoData(preparedData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { cryptoData, isLoading };
};

export default useCryptoData;
