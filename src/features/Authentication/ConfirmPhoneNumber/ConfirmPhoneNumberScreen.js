import React, { useState, useRef } from 'react';
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
  Button,
  TouchableOpacity,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
} from '../../../components/Authentication/AuthenticationLayout';

import styled from '@emotion/native';
import { useTheme } from '@react-navigation/native';

const StyledPhoneNumberTextInputContainer = ({
  placeholder,
  value,
  setValue,
  style,
  type = 'none',
  sendConfirmMessage,
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: focused ? colors.secondary : colors.gray,
      }}>
      <StyledTextInput
        style={{ ...style }}
        textColor={focused ? colors.secondary : colors.black}
        lineColor={focused ? colors.secondary : colors.gray}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        onFocus={() => setFocused(true)}
        onEndEditing={() => setFocused(false)}
        // keyboardType={'number-pad'}
      />
      {type === 'phoneNumber' ? (
        <TouchableOpacity onPress={sendConfirmMessage}>
          <View>
            <Text>인증번호 전송</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Text>3:00</Text>
      )}
    </View>
  );
};

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

function ConfirmPhoneNumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');

  return (
    <>
      <ScrollView>
        <SafeAreaView
          style={{ flex: 1, height: windowHeight, backgroundColor: '#fff' }}>
          <AuthenticationLayout>
            <AuthenticationTitleContainer>
              <AuthenticationTitle style={{ marginBottom: 15 }}>
                휴대폰 본인 확인
              </AuthenticationTitle>
            </AuthenticationTitleContainer>

            <View>
              {/* 로그인 Input 영역 */}
              <View style={{ marginBottom: 50, marginTop: 50 }}>
                <View style={{ marginBottom: 50 }}>
                  <Text style={{ paddingVertical: 10 }}>휴대폰 번호</Text>
                  <StyledPhoneNumberTextInputContainer
                    style={{ borderBottomWidth: 0 }}
                    setValue={setPhoneNumber}
                    placeholder="01012345678"
                    value={phoneNumber}
                    sendConfirmMessage={() => Alert.alert('인증번호 전송')}
                    type="phoneNumber"
                  />
                </View>

                <View>
                  <Text style={{ paddingVertical: 10 }}>인증번호</Text>
                  <StyledPhoneNumberTextInputContainer
                    style={{ borderBottomWidth: 0 }}
                    setValue={setCertificationNumber}
                    placeholder=""
                    value={certificationNumber}
                    // sendConfirmMessage={handleTimer}
                    type="certificationNumber"
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 10,
                    }}>
                    <Text>인증번호 재발송</Text>
                  </View>
                </View>
              </View>
            </View>
          </AuthenticationLayout>
        </SafeAreaView>
      </ScrollView>
      <NextButton
        onPress={() => Alert.alert('Email Login')}
        isOk={phoneNumber !== '' && certificationNumber !== ''}
      />
    </>
  );
}

export default ConfirmPhoneNumberScreen;
