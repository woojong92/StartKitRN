import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { GoogleSignin } from '@react-native-community/google-signin';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  onKakaoButtonPress,
  onNaverButtonPress,
} from '~/services/Authentication';

import LoginButton from '~/components/Authentication/LoginButton';

LogInScreen.propTypes = {
  navigation: PropTypes.object,
};

import {
  AuthenticationTitle,
  AuthenticationTitleContainer,
  AuthenticationSubTitle,
  AuthenticationLayout,
  AuthenticationSafeAreaViewContainer,
} from '../../../components/Authentication/AuthenticationLayout';

import { useTheme } from '@react-navigation/native';
import { setAccessToken } from '../authenticationSlice';
import { useDispatch } from 'react-redux';

const SNSColors = {
  kakao: '#FFE502',
  naver: '#1FC800',
  facebook: '#1A76F2',
  google: '#FFFFFF',
};

export default function LogInScreen({ navigation }) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '288981239410-78k5bk1ue8eru4dkhj05dasv7mkm2njv.apps.googleusercontent.com',
    });
  }, []);

  const dispatch = useDispatch();

  const { colors } = useTheme();

  return (
    <>
      <AuthenticationSafeAreaViewContainer>
        <AuthenticationLayout>
          <AuthenticationTitleContainer style={{ marginBottom: 40 }}>
            <AuthenticationTitle color={colors.black}>
              WAKE UP에
            </AuthenticationTitle>
            <AuthenticationTitle
              color={colors.black}
              style={{ marginBottom: 10 }}>
              오신 것을 환영합니다.
            </AuthenticationTitle>
            <AuthenticationSubTitle>
              제주도의 와이파이 서비스, 웨이크업입니다.
            </AuthenticationSubTitle>
          </AuthenticationTitleContainer>

          <View style={{ marginTop: 10 }}>
            <LoginButton
              backgroudColor={SNSColors.kakao}
              fontColor={colors.black}
              title={'카카오톡으로 계속하기'}
              onPress={
                () => navigation.navigate('Agreement')
                // async () =>
                // await onKakaoButtonPress().then(() =>
                //   console.log('kakao login success!'),
                // )
              }
            />
            <LoginButton
              backgroudColor={SNSColors.naver}
              fontColor={colors.white}
              title={'네이버로 계속하기'}
              onPress={
                () => navigation.navigate('Agreement')
                // async () =>
                // await onNaverButtonPress().then(() =>
                //   console.log('naver login success!'),
                // )
              }
            />
            <LoginButton
              backgroudColor={SNSColors.facebook}
              fontColor={colors.white}
              title={'페이스북으로 계속하기'}
              onPress={
                () => navigation.navigate('Agreement')
                // async () =>
                // await onFacebookButtonPress().then(() =>
                //   console.log('Signed in with Facebook!'),
                // )
              }
            />
            <LoginButton
              backgroudColor={SNSColors.google}
              fontColor={colors.black}
              title={'구글로 계속하기'}
              style={{
                borderWidth: Platform.OS === 'ios' ? 0 : 1,
                borderColor: colors.gray,
              }}
              onPress={
                () => navigation.navigate('Agreement')
                // async () =>
                // await onGoogleButtonPress().then(() =>
                //   console.log('Signed in with Google!'),
                // )
              }
            />

            <View
              style={{
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => navigation.navigate('EmailLogIn')}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: colors.black,
                  }}>
                  이메일로 계속하기
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Button
            style={{ margin: 20, width: 100, height: 30 }}
            title={'임시 Home화면으로'}
            onPress={() => {
              dispatch(setAccessToken());
            }}
          />
        </AuthenticationLayout>
      </AuthenticationSafeAreaViewContainer>
    </>
  );
}
