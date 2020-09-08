import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
  AuthenticationSubTitle,
} from '../../../components/Authentication/AuthenticationLayout';

import StyledTextInput from '../../../components/Authentication/StyledTextInput';

const { height: windowHeight } = Dimensions.get('window');

function ForgotPasswrodScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <>
      <ScrollView>
        <SafeAreaView
          style={{ flex: 1, height: windowHeight, backgroundColor: '#fff' }}>
          <AuthenticationLayout>
            <AuthenticationTitleContainer>
              <AuthenticationTitle style={{ marginBottom: 15 }}>
                비밀번호 초기화
              </AuthenticationTitle>
              <AuthenticationSubTitle>
                가입하신 이메일을 입력하시면{'\n'}
                비밀번호 변경 메일을 보내드립니다.
              </AuthenticationSubTitle>
            </AuthenticationTitleContainer>

            <StyledTextInput
              setValue={setEmail}
              placeholder="wakeup@wakeup.com"
              value={email}
            />
          </AuthenticationLayout>
        </SafeAreaView>
      </ScrollView>
      <NextButton onPress={() => Alert.alert('요청하기')} isOk={email !== ''} />
    </>
  );
}

export default ForgotPasswrodScreen;
