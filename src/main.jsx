import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'
import { CheckoutApp } from './CheckoutApp.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter >
        <CheckoutApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
