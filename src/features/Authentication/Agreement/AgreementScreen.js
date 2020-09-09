import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
} from '../../../components/Authentication/AuthenticationLayout';
import { NextButton } from '../../../components/Authentication/NextButton';
import PropTypes from 'prop-types';

AgreementScreen.propTypes = {
  navigation: PropTypes.object,
};

import CheckBoxItem from './CheckBoxItem';
import Theme from '../../../theme';
import styled from '@emotion/native';

const Diver = styled.View`
  width: 100%;
  height: 1;
  border-bottom-color: ${Theme.colors.gray};
  border-bottom-width: 1;
  margin-vertical: 10px;
`;

export default function AgreementScreen({ navigation }) {
  const [totalToggleCheckBox, setTotalToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);

  const handleTotalToggleCheckBox = (newValue) => {
    setTotalToggleCheckBox(newValue);
    setToggleCheckBox1(newValue);
    setToggleCheckBox2(newValue);
    setToggleCheckBox3(newValue);
  };

  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <AuthenticationLayout>
            {/* AuthenticationTitle box */}
            <AuthenticationTitleContainer>
              <AuthenticationTitle>서비스 이용을 위한</AuthenticationTitle>
              <AuthenticationTitle>이용약관 동의입니다.</AuthenticationTitle>
            </AuthenticationTitleContainer>

            {/* 약관 동의 화면 */}
            <View style={{}}>
              <View>
                <CheckBoxItem
                  value={totalToggleCheckBox}
                  setValue={handleTotalToggleCheckBox}>
                  약관 전체동의
                </CheckBoxItem>
              </View>

              <Diver />

              <CheckBoxItem
                value={toggleCheckBox1}
                setValue={setToggleCheckBox1}>
                이용약관 및 개인정보처리방침 (필수)
              </CheckBoxItem>

              <CheckBoxItem
                value={toggleCheckBox2}
                setValue={setToggleCheckBox2}>
                위치기반서비스 이용약관 (필수)
              </CheckBoxItem>

              <CheckBoxItem
                value={toggleCheckBox3}
                setValue={setToggleCheckBox3}>
                마케팅 황용 동의 (선택)
              </CheckBoxItem>
            </View>
          </AuthenticationLayout>
        </SafeAreaView>
      </ScrollView>

      <NextButton
        onPress={() => navigation.navigate('ConfirmPhoneNumber')}
        isOk
      />
    </>
  );
}

const { height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: windowHeight - 30,
  },
});
