import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationSubTitle,
  AuthenticationTitleContainer,
} from '../../../components/Authentication/AuthenticationLayout';

function EmailLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailWarningMessage, setEmailWarningMessage] = useState(
    '띄어쓰기를 사용하지 말아주세요.',
  );
  const [passwordWarningMessage, setPasswordWarningMessage] = useState(
    '소문자, 숫자 입력',
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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
                <TextInput
                  style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                  }}
                  placeholder="이메일을 입력해주세요."
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
                <Text>{emailWarningMessage}</Text>
              </View>

              <View>
                <Text>비밀번호</Text>
                <TextInput
                  style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                  }}
                  placeholder="비밀번호를 입력해주세요."
                  onChangeText={(text) => setPassword(text)}
                  value={password}
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
                onPress={() => navigation.native('SignUp')}>
                <Text style={{ marginRight: 5 }}>이메일 회원가입</Text>
              </TouchableWithoutFeedback>
              <Text>|</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.native('ForgotPassword')}>
                <Text style={{ marginLeft: 5 }}>비밀번호 찾기</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </AuthenticationLayout>
      </SafeAreaView>
      <NextButton onPress={() => Alert.alert('Email Login')} isOk />
    </>
  );
}

export default EmailLogin;
