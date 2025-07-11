'use client';

import { useEffect, useState } from 'react';

export default function ChatPop() {
  const [isTawkReady, setIsTawkReady] = useState(false);

  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget(); // hide default icon
      setIsTawkReady(true);         // now we know it's ready
    };
  }, []);

  return (
    isTawkReady && (
      <button
        onClick={() => window.Tawk_API?.maximize()}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src="/03.svg" alt="Chat" width="60" />
      </button>
    )
  );
}
