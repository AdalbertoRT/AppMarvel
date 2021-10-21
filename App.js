import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/navigators/Stack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
