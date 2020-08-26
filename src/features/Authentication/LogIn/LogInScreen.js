import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';

// import { setUserToken } from './logInSlice';
import { onFacebookButtonPress } from '~/services/Authentication';

import LoginButton from '~/components/LoginButton';

LogInScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function LogInScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, padding: 15 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 30,
                marginBottom: 30,
                textAlign: 'center',
              }}>
              환영합니다 :)
            </Text>
            <LoginButton
              backgroudColor={'#FFE502'}
              fontColor={'#111'}
              title={'카카오톡으로 시작하기'}
              onPress={() => Alert.alert('카카오톡 로그인')}
            />
            <LoginButton
              backgroudColor={'#1FC800'}
              fontColor={'#fff'}
              title={'네이버로 시작하기'}
              onPress={() => Alert.alert('네이버 로그인')}
            />
            <LoginButton
              backgroudColor={'#1A76F2'}
              fontColor={'#fff'}
              title={'페이스북으로 시작하기'}
              onPress={async () =>
                await onFacebookButtonPress().then(() =>
                  console.log('Signed in with Facebook!'),
                )
              }
            />
            <LoginButton
              backgroudColor={'#FFFFFF'}
              fontColor={'#111'}
              title={'구글로 시작하기'}
              style={{ borderWidth: 1, borderColor: '#e5e5e5' }}
              onPress={async () =>
                await onFacebookButtonPress().then(() =>
                  console.log('Signed in with Facebook!'),
                )
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
