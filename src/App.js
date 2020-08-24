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
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import OnBoardingScreen from './features/Authentication/OnBoarding';
import LogInScreen from './features/Authentication/LogIn';
import SignUpScreen from './features/Authentication/SignUp';
import ForgotPasswrodScreen from './features/Authentication/ForgotPassword';

import HomeScreen from './features/Home';

const Stack = createStackNavigator();

function StackNavigator() {
  const userToken = useSelector((state) => state.auth.userToken);
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      mode="card"
      headerMode="none">
      {userToken === null ? (
        <>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
            options={{
              transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
              },
            }}
          />
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswrodScreen}
          />
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
