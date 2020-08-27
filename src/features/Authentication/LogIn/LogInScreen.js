import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Alert,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// import { setUserToken } from './logInSlice';
import { GoogleSignin } from '@react-native-community/google-signin';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
} from '~/services/Authentication';

import LoginButton from '~/components/LoginButton';

LogInScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function LogInScreen({ navigation }) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '288981239410-78k5bk1ue8eru4dkhj05dasv7mkm2njv.apps.googleusercontent.com',
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, padding: 30 }}>
          <View style={{ flex: 1 }}>
            <View style={{ marginVertical: 30 }}>
              <Text style={styles.title}>WAKE UP에 </Text>
              <Text style={[styles.title, { marginBottom: 10 }]}>
                오신 것을 환영합니다.
              </Text>
              <Text style={styles.subTitle}>
                제주도의 와이파이 서비스, 웨이크업입니다.
              </Text>
            </View>

            <View>
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
                  await onGoogleButtonPress().then(() =>
                    console.log('Signed in with Google!'),
                  )
                }
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    height: 1,
                    width: windowWidth / 2 - 40,
                    border: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: '#757575',
                  }}
                />
                <View style={{ marginHorizontal: 10 }}>
                  <Text>or</Text>
                </View>
                <View
                  style={{
                    height: 1,
                    width: windowWidth / 2 - 40,
                    border: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: '#757575',
                  }}
                />
              </View>

              <LoginButton
                backgroudColor={'#FFFFFF'}
                fontColor={'#111'}
                title={'이메일로 계속하기'}
                style={{ borderWidth: 1, borderColor: '#e5e5e5' }}
                onPress={() => navigation.push('SignUp')}
              />
            </View>
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
  title: {
    color: '#0092DA',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subTitle: {
    color: 'black',
    fontSize: 18,
  },
});
