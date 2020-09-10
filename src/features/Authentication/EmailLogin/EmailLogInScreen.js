import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
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

const { height: windowHeight } = Dimensions.get('window');

import PropTypes from 'prop-types';

EmailLoginScreen.propTypes = {
  navigation: PropTypes.object,
};

function EmailLoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailWarningMessage, setEmailWarningMessage] = useState('');
  const [passwordWarningMessage, setPasswordWarningMessage] = useState('');

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
                    label={'이메일'}
                    setValue={setEmail}
                    placeholder="abcde@wakeup.com"
                    value={email}
                    warningMesseage={emailWarningMessage}
                  />

                  <StyledTextInput
                    label={'비밀번호'}
                    placeholder="비밀번호를 입력해주세요."
                    setValue={setPassword}
                    value={password}
                    secureTextEntry={true}
                    warningMesseage={passwordWarningMessage}
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
                    <Text style={{ marginRight: 5, fontSize: 12 }}>
                      이메일 회원가입
                    </Text>
                  </TouchableWithoutFeedback>
                  <Text>|</Text>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={{ marginLeft: 5, fontSize: 12 }}>
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
        onPress={() => navigation.navigate('Home')}
        isOk={email !== '' && password != ''}
      />
    </>
  );
}

export default EmailLoginScreen;
