import React from 'react';
import { Provider } from 'react-redux'
import store from './redux';
import './App.css';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
