import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';

const AuthStack = createStackNavigator();

export default function AuthStackRoutes() {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignInPage} />
      <AuthStack.Screen name="SignUp" component={SignUpPage} />
    </AuthStack.Navigator>
  );
}
