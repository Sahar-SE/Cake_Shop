import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import { Store } from 'redux';

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
