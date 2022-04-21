import { useState, useEffect } from "react";
import CryptoList from "./components/CryptoList";
//import {ChromeMessage, Sender} from './types';
import "./styles.css";

export default function App() {

  const [url, setUrl] = useState('');
  const [responseFromContent, setResponseFromContent] = useState('');

  // Get the current tab Url
  useEffect(() => {
    const queryInfo = {active:true, lastFocusedWindow: true};
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);

  // Send message to the content script of the browser
  const sendTestMessage = () => {
    const message = {
      from: Sender.React,
      message: 'Hello from React'
    }

    const queryInfo = chrome.tabs.QueryInfo = {
      active: true,
      currentWindow: true
    }

    // We can't use "chrome.runtime.sendMessage" for sending messages from React.
    // For sending messages from React we need to specify which tab to send it to.
    chrome.tabs && chrome.tabs.query(queyInfo, tabs => {
      const currentTabId = tabs[0].id;

      // Sends a single message to the content script(s) in the specified tab,
      // with an optional callback to run when a response is sent back.
      // The runtime.onMessage event is fired in each content script running
      // in the specified tab for the current extension.
      chrome.tabs.sendMessage(
        currentTabId,
        message,
        (response) => {
          setResponseFromContent(response);
        });
    });
  }

  const sendRemoveMessage = () => {
    const message = {
        from: Sender.React,
        message: "delete logo",
    }

    const queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        const currentTabId = tabs[0].id;
        chrome.tabs.sendMessage(
            currentTabId,
            message,
            (response) => {
                setResponseFromContent(response);
            });
    });
  };

  return (
    <div>
      <p>{url}:</p>
      <CryptoList />
      <div>
        <button onClick={sendTestMessage}>SEND MESSAGE</button>
        <button onClick={sendRemoveMessage}>Hide Google logo</button>
      </div>
      <p>{responseFromContent}</p>
    </div>
  );
}
