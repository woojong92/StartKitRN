import React, { useState } from 'react';
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
} from '../../../components/Authentication/AuthenticationLayout';

import StyledTextInput from '../../../components/Authentication/StyledTextInput';

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
                  <StyledTextInput
                    setValue={setPhoneNumber}
                    placeholder="01012345678"
                    value={phoneNumber}
                    rightItem={
                      <TouchableOpacity
                        onPress={() => Alert.alert('인증번호 전송 완료')}>
                        <View>
                          <Text>인증번호 전송</Text>
                        </View>
                      </TouchableOpacity>
                    }
                  />
                </View>

                <View>
                  <Text style={{ paddingVertical: 10 }}>인증번호</Text>
                  <StyledTextInput
                    setValue={setCertificationNumber}
                    placeholder=""
                    value={certificationNumber}
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
