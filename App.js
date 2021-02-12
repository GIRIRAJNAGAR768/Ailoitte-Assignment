import React from 'react';
import {
  StatusBar,
  LogBox
} from 'react-native';
import RootNavigation from './src/Navigations/RootNavigation'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import homeReducer from './src/Reducers/HomeReducer'

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const store = createStore(homeReducer)

const App = ()=> {
  
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={'#0878b4'} />
      <RootNavigation />
    </Provider>
  );
};
export default App;