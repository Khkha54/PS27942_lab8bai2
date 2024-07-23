/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import AppNavigate from './navigation/AppNavigate';
import {store,persistor} from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
    <SafeAreaView style={{flex:1}}>
        <AppNavigate/>
      </SafeAreaView>
    </PersistGate>
    </Provider>
   
  );
}



export default App;
