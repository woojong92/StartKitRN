import React from 'react';
import { useSelector } from 'react-redux';
import store from './store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EmailLogInScreen from './features/Authentication/EmailLogIn';
import LogInScreen from './features/Authentication/LogIn';
import AgreementScreen from './features/Authentication/Agreement';
import ConfirmPhoneNumberScreen from './features/Authentication/ConfirmPhoneNumber';
import ForgotPasswordScreen from './features/Authentication/ForgotPassword';
import ResetPasswordScreen from './features/Authentication/ResetPassword';
import OptionalUserInfoScreen from './features/Authentication/OptionalUserInfo';
import NecessaryUserInfoScreen from './features/Authentication/NecessaryUserInfo';

import HomeScreen from './features/Home/OutsideStore';

const Stack = createStackNavigator();

function StackNavigator() {
  const userToken = useSelector((state) => state.auth.userToken);
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      mode="card"
      headerMode={Platform.OS === 'ios' ? 'float' : 'none'}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
        headerTintColor: '#111',
        headerBackTitleVisible: false,
        headerTitle: false,
        gestureEnabled: false,
      }}>
      {/* {userToken === null ? (
        <> */}
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Agreement" component={AgreementScreen} />
      <Stack.Screen name="EmailLogIn" component={EmailLogInScreen} />
      <Stack.Screen
        name="ConfirmPhoneNumber"
        component={ConfirmPhoneNumberScreen}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen
        name="OptionalUserInfo"
        component={OptionalUserInfoScreen}
      />
      <Stack.Screen
        name="NecessaryUserInfo"
        component={NecessaryUserInfoScreen}
      />
      {/* </>
      ) : ( */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      {/* )} */}
    </Stack.Navigator>
  );
}

import Theme from './theme';
import { Platform } from 'react-native';

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
