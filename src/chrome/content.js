//import { ChromeMessage, Sender } from '../types';

const messagesFromReactAppListener = (message, sender, response ) =>{
    console.log('[content.js]. Message received', {
        message,
        sender
    })

    if  (
        sender.id === chrome.runtime.id
        && message.from === Sender.React
        && message.message === 'Hello from React'
        ) {
            response('Hello from content.js');
    }

    if  (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React &&
        message.message === "delete logo"
        ) {

        const logo = document.getElementsByClassName('lnXdpd');
        logo.style.display = 'none';
    }

}