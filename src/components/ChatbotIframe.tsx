"use client"
import React, { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
        z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
      }
    `);

    iframe.src = "";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "") return null;
      try {
        const dimensions = JSON.parse(e.data);
        iframe.style.width = dimensions.width + 'px';
        iframe.style.height = dimensions.height + 'px';
      } catch (error) {
        console.error('Invalid message data:', e.data);
      }
      iframe.contentWindow?.postMessage("53145645-0e45-4c8e-bd01-d71c1ca174cc", "");
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null; 
};

export default ChatbotIframe;
