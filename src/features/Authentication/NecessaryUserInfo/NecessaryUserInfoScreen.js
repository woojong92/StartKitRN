import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
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
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from './necessaryUserInfoSlice';
import { ChevronDownIcon } from '../../../components/icons';
import SelectBoxContainer from '../../../components/SelectBox';
import SecureToggleButton from '../../../components/Authentication/SecureToggleButton';

NecessaryUserInfoScreen.propTypes = {
  navigation: PropTypes.object,
};

function NecessaryUserInfoScreen({ navigation }) {
  const [isSelectBoxVisible, setSelectBoxVisible] = useState(false); //
  const [checkPassword, setCheckPassword] = useState('');
  const [currentSelectBoxValue, setCurrentSelectBoxValue] = useState(
    '직접입력',
  );
  const [isSecure, setSecure] = useState(true);

  const emailId = useSelector((state) => state.necessaryUserInfo.emailId);
  const emailAddress = useSelector(
    (state) => state.necessaryUserInfo.emailAddress,
  );
  const password = useSelector((state) => state.necessaryUserInfo.password);
  const dispatch = useDispatch();

  const emailIdRef = useRef();
  const emailAddressRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  const onChange = (key) =>
    useCallback(
      (text) => {
        dispatch(changeField({ key: key, value: text }));
      },
      [dispatch],
    );

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (currentSelectBoxValue === '직접입력') {
      dispatch(changeField({ key: 'emailAddress', value: null }));
    } else {
      dispatch(
        changeField({ key: 'emailAddress', value: currentSelectBoxValue }),
      );
    }
  }, [currentSelectBoxValue]);

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
                      textInputRef={emailIdRef}
                      marginBottom={0}
                      style={{ width: windowWidth / 2 - 60 }}
                      setValue={onChange('emailId')}
                      onSubmitEditing={() => {
                        if (currentSelectBoxValue === '직접입력') {
                          emailAddressRef.current.focus();
                        } else {
                          passwordRef.current.focus();
                        }
                      }}
                      placeholder=""
                      value={emailId}
                      warningMesseage="disable"
                    />
                    <Text style={{ fontSize: 20 }}>@</Text>
                    <StyledTextInput
                      textInputRef={emailAddressRef}
                      onSubmitEditing={() => passwordRef.current.focus()}
                      marginBottom={0}
                      style={{ width: windowWidth / 2 - 30 }}
                      setValue={onChange('emailAddress')}
                      placeholder="직접입력"
                      value={emailAddress}
                      editable={currentSelectBoxValue === '직접입력'}
                      rightItem={
                        <TouchableOpacity
                          onPress={() => setSelectBoxVisible(true)}>
                          <ChevronDownIcon />
                        </TouchableOpacity>
                      }
                      warningMesseage="disable"
                    />
                  </View>
                  <Text style={{ marginTop: 5, color: 'red' }}>
                    {/* warning message */}
                  </Text>
                </View>

                <StyledTextInput
                  label="비밀번호"
                  textInputRef={passwordRef}
                  onSubmitEditing={() => checkPasswordRef.current.focus()}
                  setValue={onChange('password')}
                  placeholder=""
                  secureTextEntry={isSecure}
                  value={password}
                  textContentType={'password'}
                  rightItem={
                    <SecureToggleButton value={isSecure} setValue={setSecure} />
                  }
                />

                <StyledTextInput
                  label="비밀번호 확인"
                  textInputRef={checkPasswordRef}
                  setValue={setCheckPassword}
                  placeholder=""
                  secureTextEntry={true}
                  value={checkPassword}
                  textContentType={'password'}
                />
              </View>
            </AuthenticationLayout>
          </AuthenticationSafeAreaViewContainer>
        </ScrollView>
      </KeyboardAvoidingView>
      <SelectBoxContainer
        isVisible={isSelectBoxVisible}
        setVisible={setSelectBoxVisible}
        items={['naver.com', 'hanmail.com', 'gmail.com', '직접입력']}
        value={currentSelectBoxValue}
        setValue={setCurrentSelectBoxValue}
      />
      <NextButton
        onPress={() => navigation.navigate('OptionalUserInfo')}
        isOk={emailId !== ''}
      />
    </>
  );
}

export default NecessaryUserInfoScreen;
