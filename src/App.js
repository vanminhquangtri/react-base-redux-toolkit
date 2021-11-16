import { Provider } from 'react-redux';
import './App.css';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>\
          <div className="App">
            <div>
              <Calculator />
              <hr />
              <Result />
            </div>
          </div>
        </PersistGate>
      </Provider>
    </>

  );
}

export default App;
