/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import GaragisteHomeDrawer from './src/routes/drawer';

const App = () =>{
  return (
    
    <NativeBaseProvider>
        <GaragisteHomeDrawer /> 
    </NativeBaseProvider>
  );
}
export default App;
