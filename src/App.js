import { useState } from "react";
import CryptoList from "./components/CryptoList";
import "./styles.css";

export default function App() {
  const [url, setUrl] = useState('');

  // Get the current Url
  

  return (
    <div>
      <h2></h2>
      <CryptoList />
    </div>
  );
}
