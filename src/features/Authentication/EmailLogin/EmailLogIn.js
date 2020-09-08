import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationSubTitle,
  AuthenticationTitleContainer,
} from '../../../components/Authentication/AuthenticationLayout';

import styled from '@emotion/native';
import { useTheme } from '@react-navigation/native';

const StyledTextInput = styled.TextInput`
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  color: ${(props) => props?.textColor};
  border: 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props?.lineColor};
`;

const StyledTextInputContainer = ({
  placeholder,
  value,
  setValue,
  style,
  type = 'none',
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(type === 'password');
  return (
    <StyledTextInput
      style={{ ...style }}
      textColor={focused ? colors.secondary : colors.black}
      lineColor={focused ? colors.secondary : colors.gray}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setValue(text)}
      onFocus={() => setFocused(true)}
      onEndEditing={() => setFocused(false)}
      secureTextEntry={secureTextEntry}
      // keyboardType={'number-pad'}
    />
  );
};

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
                  <StyledTextInputContainer
                    setValue={setEmail}
                    placeholder="abcde@wakeup.com"
                    value={email}
                  />
                  <Text>{emailWarningMessage}</Text>
                </View>

                <View>
                  <Text>비밀번호</Text>
                  <StyledTextInputContainer
                    placeholder="비밀번호를 입력해주세요."
                    setValue={setPassword}
                    value={password}
                    type={'password'}
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
                  onPress={() => navigation.push('SignUp')}>
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
