import React, { useState } from 'react';
import {
  SafeAreaView,
  Alert,
  ScrollView,
  Dimensions,
  Text,
  View,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
} from '../../../components/Authentication/AuthenticationLayout';

import StyledTextInput from '../../../components/Authentication/StyledTextInput';

const { height: windowHeight } = Dimensions.get('window');

function ResetPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const [passwordWarningMessage, setPasswordWarningMessage] = useState(
    '6자리 이상 입력해주세요.',
  );
  const [
    checkPassworddWarningMessage,
    setCheckPassworddWarningMessage,
  ] = useState('');

  return (
    <>
      <ScrollView>
        <SafeAreaView
          style={{ flex: 1, height: windowHeight, backgroundColor: '#fff' }}>
          <AuthenticationLayout>
            <AuthenticationTitleContainer>
              <AuthenticationTitle style={{ marginBottom: 15 }}>
                새 비밀번호 설정하기
              </AuthenticationTitle>
            </AuthenticationTitleContainer>

            <View style={{ marginTop: 30 }}>
              <View style={{ marginBottom: 50 }}>
                <StyledTextInput
                  label="비밀번호"
                  setValue={setPassword}
                  placeholder=""
                  value={password}
                  secureTextEntry={true}
                  warningMesseage={passwordWarningMessage}
                />
              </View>

              <View>
                <StyledTextInput
                  label="비밀번호 확인"
                  setValue={setCheckPassword}
                  placeholder=""
                  value={checkPassword}
                  secureTextEntry={true}
                  warningMesseage={checkPassworddWarningMessage}
                />
              </View>
            </View>
          </AuthenticationLayout>
        </SafeAreaView>
      </ScrollView>
      <NextButton
        onPress={() => Alert.alert('요청하기')}
        isOk={password !== '' && checkPassword !== ''}
      />
    </>
  );
}

export default ResetPasswordScreen;
