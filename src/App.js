import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import Routing from './Routing'


function App() {
  return (
    <div>
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
