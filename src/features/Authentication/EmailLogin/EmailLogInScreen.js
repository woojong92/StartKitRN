import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationSubTitle,
  AuthenticationTitleContainer,
  AuthenticationSafeAreaViewContainer,
} from '../../../components/Authentication/AuthenticationLayout';

import StyledTextInput from '../../../components/Authentication/StyledTextInput';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { initialize, changeField } from './emailLogInSlice';
import { setAccessToken } from '../authenticationSlice';

import { EyeIcon, EyeOffIcon } from '../../../components/icons';
import { useTheme } from '@react-navigation/native';

EmailLogInScreen.propTypes = {
  navigation: PropTypes.object,
};

function EmailLogInScreen({ navigation }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [emailWarningMessage, setEmailWarningMessage] = useState('');
  const [passwordWarningMessage, setPasswordWarningMessage] = useState('');

  const email = useSelector((state) => state.emailLogIn.email);
  const password = useSelector((state) => state.emailLogIn.password);

  const dispatch = useDispatch();

  const onChange = (key) =>
    useCallback(
      (text) => {
        dispatch(changeField({ key: key, value: text }));
      },
      [dispatch],
    );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        enabled>
        <ScrollView>
          <AuthenticationSafeAreaViewContainer>
            <AuthenticationLayout>
              <AuthenticationTitleContainer style={{ marginBottom: 40 }}>
                <AuthenticationTitle style={{ marginBottom: 15 }}>
                  로그인
                </AuthenticationTitle>
                <AuthenticationSubTitle>
                  다시만나 반가워요
                </AuthenticationSubTitle>
              </AuthenticationTitleContainer>

              <View>
                {/* 로그인 Input 영역 */}
                <View>
                  <StyledTextInput
                    key={'email'}
                    label={'이메일'}
                    setValue={onChange('email')}
                    placeholder="abcde@wakeup.com"
                    value={email}
                    warningMesseage={emailWarningMessage}
                  />

                  <StyledTextInput
                    key={'password'}
                    label={'비밀번호'}
                    placeholder="비밀번호를 입력해주세요."
                    setValue={onChange('password')}
                    value={password}
                    secureTextEntry={true}
                    warningMesseage={passwordWarningMessage}
                    rightItem={<EyeOffIcon />}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginBottom: 40,
                  }}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Agreement')}>
                    <Text
                      style={{
                        padding: 10,
                        marginRight: 5,
                        fontSize: 12,
                      }}>
                      이메일 회원가입
                    </Text>
                  </TouchableWithoutFeedback>
                  <Text>|</Text>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text
                      style={{
                        padding: 10,
                        marginLeft: 5,
                        fontSize: 12,
                      }}>
                      비밀번호 찾기
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </AuthenticationLayout>
          </AuthenticationSafeAreaViewContainer>
        </ScrollView>
      </KeyboardAvoidingView>

      <NextButton
        style={{ position: 'absolute' }}
        onPress={() => dispatch(setAccessToken())}
        isOk={email !== '' && password != ''}
      />
    </>
  );
}

export default EmailLogInScreen;
