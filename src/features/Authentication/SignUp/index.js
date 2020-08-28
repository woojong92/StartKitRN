import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const Input = ({ placeholder, value, setValue }) => {
  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <TextInput
      style={{
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 30,
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

import { NextButton } from '../../../components/Authentication/NextButton';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationSubTitle,
  AuthenticationTitleContainer,
} from '../../../components/Authentication/AuthenticationLayout';
import { useTheme } from '@react-navigation/native';

export default function SignUpScreen() {
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <AuthenticationLayout>
          <AuthenticationTitleContainer>
            <AuthenticationTitle style={{ marginBottom: 10 }}>
              필수 정보 입력
            </AuthenticationTitle>
            <AuthenticationSubTitle>
              더 많은 혜택을 위한 추가 정보 입력페이지입니다.
            </AuthenticationSubTitle>
          </AuthenticationTitleContainer>

          <Input placeholder="이메일" setValue={setEmail} value={email} />
          <Input placeholder="이름" setValue={setName} value={name} />
          <Input
            placeholder="생년월일[8자리] - ex)2020/09/27"
            setValue={setBirth}
            value={birth}
          />
          <Input placeholder="성별" setValue={setGender} value={gender} />
        </AuthenticationLayout>
      </SafeAreaView>

      <View style={{ flexDirection: 'row' }}>
        <TouchableNativeFeedback onPress={() => Alert.alert('나중에 입력하기')}>
          <View
            style={{
              width: '50%',
              height: Platform.OS === 'ios' ? 80 : 60,
              backgroundColor: colors.gray,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{ fontSize: 20, color: colors.white, fontWeight: 'bold' }}>
              나중에 입력하기
            </Text>
          </View>
        </TouchableNativeFeedback>
        <NextButton width={'50%'} onPress={() => Alert.alert('gg')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
