import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationSubTitle,
  AuthenticationTitleContainer,
} from '../../../components/Authentication/AuthenticationLayout';

import StyledTextInput from '../../../components/Authentication/StyledTextInput';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function EmailLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailWarningMessage, setEmailWarningMessage] = useState('');
  const [passwordWarningMessage, setPasswordWarningMessage] = useState('');

  return (
    <>
      <ScrollView>
        <SafeAreaView
          style={{ flex: 1, height: windowHeight, backgroundColor: '#fff' }}>
          <AuthenticationLayout>
            <AuthenticationTitleContainer>
              <AuthenticationTitle style={{ marginBottom: 15 }}>
                로그인
              </AuthenticationTitle>
              <AuthenticationSubTitle>다시만나 반가워요</AuthenticationSubTitle>
            </AuthenticationTitleContainer>

            <View>
              {/* 로그인 Input 영역 */}
              <View style={{ marginBottom: 50, marginTop: 50 }}>
                <View style={{ marginBottom: 30 }}>
                  <Text>이메일</Text>
                  <StyledTextInput
                    setValue={setEmail}
                    placeholder="abcde@wakeup.com"
                    value={email}
                  />
                  <Text>{emailWarningMessage}</Text>
                </View>

                <View>
                  <Text>비밀번호</Text>
                  <StyledTextInput
                    placeholder="비밀번호를 입력해주세요."
                    setValue={setPassword}
                    value={password}
                    secureTextEntry={true}
                  />
                  <Text>{passwordWarningMessage}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.push('OptionalUserInfo')}>
                  <Text style={{ marginRight: 5, fontSize: 12 }}>
                    이메일 회원가입
                  </Text>
                </TouchableWithoutFeedback>
                <Text>|</Text>
                <TouchableWithoutFeedback
                  onPress={() => navigation.push('ForgotPassword')}>
                  <Text style={{ marginLeft: 5, fontSize: 12 }}>
                    비밀번호 찾기
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </AuthenticationLayout>
        </SafeAreaView>
      </ScrollView>
      <NextButton
        onPress={() => navigation.navigate('ConfirmPhoneNumber')}
        isOk={email !== '' && password != ''}
      />
    </>
  );
}

export default EmailLogin;
