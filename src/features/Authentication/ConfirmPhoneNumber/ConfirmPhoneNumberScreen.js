import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Text,
  View,
  Alert,
  ScrollView,
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
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from './confirmPhoneNumberSlice';

ConfirmPhoneNumberScreen.propTypes = {
  navigation: PropTypes.object,
};

function ConfirmPhoneNumberScreen({ navigation }) {
  const [phoneNumberWarningMessage, setPhoneNumberWarningMessage] = useState(
    '',
  );
  const phoneNumber = useSelector(
    (state) => state.confirmPhoneNumber.phoneNumber,
  );
  const certificationNumber = useSelector(
    (state) => state.confirmPhoneNumber.certificationNumber,
  );

  const phoneNumberRef = useRef();
  const certificationNumberRef = useRef();
  const sendButtonRef = useRef();

  const dispatch = useDispatch();

  const onChange = (key) =>
    useCallback(
      (text) => {
        dispatch(changeField({ key: key, value: text }));
      },
      [dispatch],
    );

  useEffect(() => {
    dispatch(initialize());
  }, []);

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
                  textInputRef={phoneNumberRef}
                  label={'휴대폰 번호'}
                  setValue={onChange('phoneNumber')}
                  placeholder="01012345678"
                  value={phoneNumber}
                  warningMesseage={phoneNumberWarningMessage}
                  keyboardType="number-pad"
                  maxLength={11}
                  onSubmitEditing={() => {
                    Alert.alert('인증번호 전송 완료');
                    certificationNumberRef.current.focus();
                  }}
                  rightItem={
                    <TouchableOpacity
                      style={{ padding: 8 }}
                      ref={sendButtonRef}
                      onPress={() => {
                        Alert.alert('인증번호 전송 완료');
                        certificationNumberRef.current.focus();
                      }}>
                      <View>
                        <Text>인증번호 전송</Text>
                      </View>
                    </TouchableOpacity>
                  }
                />

                <StyledTextInput
                  textInputRef={certificationNumberRef}
                  label={'인증번호'}
                  setValue={onChange('certificationNumber')}
                  placeholder="012345"
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
