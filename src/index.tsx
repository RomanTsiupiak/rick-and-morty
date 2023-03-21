import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AppProviders from 'Pages/App/AppProviders';
import App from 'Pages/App/App';
import reportWebVitals from './reportWebVitals';

// Render methods for msw
async function render() {
  if (process.env.REACT_APP_ENABLE_MSW) {
    if (window.location.pathname === process.env.PUBLIC_URL) {
      window.location.pathname = `${process.env.PUBLIC_URL}/`;
      return;
    }

    // eslint-disable-next-line
    const { worker } = require('test/browser/browser');

    await worker.start({
      waitUntilReady: true,
      serviceWorker: {
        url: `${process.env.PUBLIC_URL}/mockServiceWorker.js`,
      },
    });
  }

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  );
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsv
reportWebVitals();
