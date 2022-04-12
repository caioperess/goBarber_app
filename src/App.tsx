import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import HooksProviders from './hooks';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}
