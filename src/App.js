/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useSelector } from 'react-redux';

import store from './store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from './features/OnBoarding';
import LogInScreen from './features/LogIn';
import HomeScreen from './features/Home';

const Stack = createStackNavigator();

function StackNavigator() {
  const userToken = useSelector((state) => state.auth.userToken);
  return (
    <Stack.Navigator initialRouteName="OnBoarding" headerMode="none">
      {userToken === null ? (
        <>
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="LogIn" component={LogInScreen} />
        </>
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
