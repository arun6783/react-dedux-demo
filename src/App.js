import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'

import CakeComponent from './components/cakeComponent';

function App() {
  return (
 <Provider store={store}>
      <div className="App">
          <h1>Welcome to Cake shop</h1>
          <CakeComponent></CakeComponent>
      </div>
      </Provider>
  );
}

export default App;
