import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import HooksProviders from './hooks';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#312e38"
        translucent
        barStyle="light-content"
      />
      <NavigationContainer>
        <HooksProviders>
          <Routes />
        </HooksProviders>
      </NavigationContainer>
    </>
  );
}
