import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

import './assets/styles/reset.css';
import './assets/styles/style.css';
import { HotelProvider } from './contexts/HotelContext';
import { ToastContainer } from 'react-toastify';
import { EventInfoProvider } from './contexts/EventInfoContext';
import { UserProvider } from './contexts/UserContext';
import { PaymentProvider } from './contexts/PaymentContext';
import './assets/styles/overideStyles.css';

ReactDOM.render(<>
  <ToastContainer />
  <EventInfoProvider>
    <UserProvider>
    <PaymentProvider>
      <HotelProvider>
        <App />
      </HotelProvider>
    </PaymentProvider>
    </UserProvider>
  </EventInfoProvider>
</>, document.getElementById('root'));
