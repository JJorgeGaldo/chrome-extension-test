import { useState, useEffect } from "react";
import CryptoList from "./components/CryptoList";
import "./styles.css";

export default function App() {

  const [url, setUrl] = useState('');

  // Get the current tab Url
  useEffect(() => {
    const queryInfo = {active:true, lastFocusedWindow: true};
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);

  return (
    <div>
      <p>{url}:</p>
      <CryptoList />
    </div>
  );
}
