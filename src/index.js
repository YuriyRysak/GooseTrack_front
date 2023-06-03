import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import {
  store,
  persistor
} from 'redux/store';
import { themes } from 'styles/themes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="GooseTrack_front">
        <ThemeProvider theme={themes}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
       </PersistGate>
    </Provider>
  </React.StrictMode>
);
