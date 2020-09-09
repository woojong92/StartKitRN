import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  Text,
  Alert,
} from 'react-native';
import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
  AuthenticationSubTitle,
} from '../../../components/Authentication/AuthenticationLayout';
import StyledTextInput from '../../../components/Authentication/StyledTextInput';
const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
import PropTypes from 'prop-types';

NecessaryUserInfoScreen.propTypes = {
  navigation: PropTypes.object,
};

function NecessaryUserInfoScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  return (
    <>
      <ScrollView>
        <SafeAreaView
          style={{
            flex: 1,
            height: windowHeight - 30,
            backgroundColor: '#fff',
          }}>
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
              <View>
                <Text style={{ paddingVertical: 10 }}>이메일</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <StyledTextInput
                    style={{ width: windowWidth / 2 - 60 }}
                    setValue={setEmail}
                    placeholder=""
                    value={email}
                  />
                  <Text>@</Text>
                  <StyledTextInput
                    style={{ width: windowWidth / 2 - 30 }}
                    setValue={setEmail}
                    placeholder="직접입력"
                    value={email}
                    rightItem={<Text>{'\\/'}</Text>}
                  />
                </View>
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
        </SafeAreaView>
      </ScrollView>
      <NextButton
        onPress={() => navigation.navigate('OptionalUserInfo')}
        isOk={email !== ''}
      />
    </>
  );
}

export default NecessaryUserInfoScreen;
