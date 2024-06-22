import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import Providers from './components/providers/TanstackProvider';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <Router>
      <Providers>
        <App />
      </Providers>
    </Router>
  </React.StrictMode>,
);
