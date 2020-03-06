import React from 'react';
import logo from './logo.svg';
import './App.css';
import  IceCream  from './components/icecreamComponent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {iceCreamReducer} from './redux/iceCreamReducer'
const store= createStore(iceCreamReducer)
function App() {
  return (
<Provider store={store}>
      <div className="App">
          <h1>Welcome to Cake shop</h1>
          <IceCream></IceCream>
      </div>
      </Provider>
  );
}

export default App;
