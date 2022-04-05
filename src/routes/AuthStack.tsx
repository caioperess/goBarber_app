import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';

const AuthStack = createStackNavigator();

export default function AuthStackRoutes() {
  return (
    <AuthStack.Navigator
      initialRouteName="signIn"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <AuthStack.Screen name="signIn" component={SignInPage} />
      <AuthStack.Screen name="signUp" component={SignUpPage} />
    </AuthStack.Navigator>
  );
}
