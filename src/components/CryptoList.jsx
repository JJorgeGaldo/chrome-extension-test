import useCryptoData from "../hooks/useCryptoData";
import CryptoItem from "./CryptoItem";

const CryptoList = () => {
  const { cryptoData, isLoading } = useCryptoData();
  return (
    <div className="container">
      {!isLoading ? (
        cryptoData.map((itemData) => (
          <CryptoItem key={itemData.Id} {...itemData} />
        ))
      ) : (
        <p className="loading-text">Loading data...</p>
      )}
    </div>
  );
};

export default CryptoList;
