import React from 'react';
import { useSelector } from 'react-redux';
import store from './store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import OnBoardingScreen from './features/Authentication/OnBoarding';
import EmailLoginScreen from './features/Authentication/EmailLogin';
import LogInScreen from './features/Authentication/LogIn';
import SignUpScreen from './features/Authentication/SignUp';
import AgreementScreen from './features/Authentication/Agreement';
import ConfirmPhoneNumberScreen from './features/Authentication/ConfirmPhoneNumber';

import HomeScreen from './features/Home';

const Stack = createStackNavigator();

function StackNavigator() {
  const userToken = useSelector((state) => state.auth.userToken);
  return (
    <Stack.Navigator initialRouteName="LogIn" mode="card" headerMode="none">
      {userToken === null ? (
        <>
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Agreement" component={AgreementScreen} />
          <Stack.Screen name="EmailLogIn" component={EmailLoginScreen} />
          <Stack.Screen
            name="ConfirmPhoneNumber"
            component={ConfirmPhoneNumberScreen}
          />
        </>
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
}

import Theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={Theme}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
