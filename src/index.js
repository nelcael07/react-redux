import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeView from './views/Home.view'
import {Provider} from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';
import {store, persistedStore} from './store/store'

ReactDOM.render(
  <React.StrictMode>
    {/* passar o estado global para todos os filhos */}
    <Provider store={store}>
      {/* persistencia de dados */}
      <PersistGate persistor={persistedStore}>
        <HomeView />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

