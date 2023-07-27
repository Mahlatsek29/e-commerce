import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import AppNavigation from './src/AppNavigation';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;