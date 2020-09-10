import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
  AuthenticationSubTitle,
  AuthenticationSafeAreaViewContainer,
} from '../../../components/Authentication/AuthenticationLayout';
import StyledTextInput from '../../../components/Authentication/StyledTextInput';
const { width: windowWidth } = Dimensions.get('window');
import PropTypes from 'prop-types';

NecessaryUserInfoScreen.propTypes = {
  navigation: PropTypes.object,
};

function NecessaryUserInfoScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

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
              <AuthenticationTitleContainer>
                <AuthenticationTitle style={{ marginBottom: 15 }}>
                  필수 정보 입력
                </AuthenticationTitle>
                <AuthenticationSubTitle>
                  로그인 시 사용할 이메일과 비밀번호를 입력해 주세요.
                </AuthenticationSubTitle>
              </AuthenticationTitleContainer>

              <View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ marginVertical: 5 }}>이메일</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <StyledTextInput
                      marginBottom={0}
                      style={{ width: windowWidth / 2 - 60 }}
                      setValue={setEmail}
                      placeholder=""
                      value={email}
                      warningMesseage="disable"
                    />
                    <Text style={{ fontSize: 20 }}>@</Text>
                    <StyledTextInput
                      marginBottom={0}
                      style={{ width: windowWidth / 2 - 30 }}
                      setValue={setEmailAddress}
                      placeholder="직접입력"
                      value={emailAddress}
                      rightItem={<Text>{'\\/'}</Text>}
                      warningMesseage="disable"
                    />
                  </View>
                  <Text style={{ marginTop: 5, color: 'red' }}>
                    {/* warning message */}
                  </Text>
                </View>

                <StyledTextInput
                  label="비밀번호"
                  setValue={setPassword}
                  placeholder=""
                  secureTextEntry={true}
                  value={password}
                />

                <StyledTextInput
                  label="비밀번호 확인"
                  setValue={setCheckPassword}
                  placeholder=""
                  secureTextEntry={true}
                  value={checkPassword}
                />
              </View>
            </AuthenticationLayout>
          </AuthenticationSafeAreaViewContainer>
        </ScrollView>
      </KeyboardAvoidingView>

      <NextButton
        onPress={() => navigation.navigate('OptionalUserInfo')}
        isOk={email !== ''}
      />
    </>
  );
}

export default NecessaryUserInfoScreen;
