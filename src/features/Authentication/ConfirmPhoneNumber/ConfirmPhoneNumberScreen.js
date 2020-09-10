import React, { useState } from 'react';
import {
  Text,
  View,
  Alert,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
  AuthenticationSafeAreaViewContainer,
} from '../../../components/Authentication/AuthenticationLayout';
import PropTypes from 'prop-types';
import StyledTextInput from '../../../components/Authentication/StyledTextInput';

const { height: windowHeight } = Dimensions.get('window');

ConfirmPhoneNumberScreen.propTypes = {
  navigation: PropTypes.object,
};

function ConfirmPhoneNumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');
  const [phoneNumberWarningMessage, setPhoneNumberWarningMessage] = useState(
    '',
  );

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
                  휴대폰 본인 확인
                </AuthenticationTitle>
              </AuthenticationTitleContainer>

              <View>
                {/* 로그인 Input 영역 */}
                <StyledTextInput
                  label={'휴대폰 번호'}
                  setValue={setPhoneNumber}
                  placeholder="01012345678"
                  value={phoneNumber}
                  warningMesseage={phoneNumberWarningMessage}
                  keyboardType="number-pad"
                  maxLength={11}
                  rightItem={
                    <TouchableOpacity
                      onPress={() => Alert.alert('인증번호 전송 완료')}>
                      <View>
                        <Text>인증번호 전송</Text>
                      </View>
                    </TouchableOpacity>
                  }
                />

                <StyledTextInput
                  label={'인증번호'}
                  setValue={setCertificationNumber}
                  placeholder=""
                  value={certificationNumber}
                  warningMesseage={'disable'}
                  keyboardType="number-pad"
                  maxLength={6}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 10,
                    marginBottom: 40,
                  }}>
                  <Text>인증번호 재발송</Text>
                </View>
              </View>
            </AuthenticationLayout>
          </AuthenticationSafeAreaViewContainer>
        </ScrollView>
      </KeyboardAvoidingView>

      <NextButton
        onPress={() => navigation.navigate('NecessaryUserInfo')}
        isOk={phoneNumber !== '' && certificationNumber !== ''}
      />
    </>
  );
}

export default ConfirmPhoneNumberScreen;
