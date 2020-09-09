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
const { height: windowHeight } = Dimensions.get('window');
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

OptionalUserInfoScreen.propTypes = {
  navigation: PropTypes.object,
};
import styled from '@emotion/native';

const DotGroup = styled.View`
  flex-direction: row;
`;
const Dot = styled.View`
  width: 18px;
  height: 18px;
  background-color: ${(props) => props?.color};
  border-radius: 25px;
  margin-horizontal: 3px;
`;

const DotGroupContainer = () => {
  const { colors } = useTheme();
  return (
    <DotGroup>
      <Dot color={colors.darkGray} />
      <Dot color={colors.darkGray} />
      <Dot color={colors.darkGray} />
      <Dot color={colors.darkGray} />
      <Dot color={colors.darkGray} />
      <Dot color={colors.darkGray} />
    </DotGroup>
  );
};

const Diver = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        width: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      }}
    />
  );
};

function OptionalUserInfoScreen({ navigation }) {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');

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
                추가 정보 입력
              </AuthenticationTitle>
              <AuthenticationSubTitle>
                생일 쿠폰 등 각종 이벤트 진행을 위해 활용됩니다.
              </AuthenticationSubTitle>
            </AuthenticationTitleContainer>

            <View>
              <StyledTextInput
                label="이름"
                setValue={setName}
                placeholder="웨이크업"
                value={name}
              />

              <View>
                <Text style={{ paddingVertical: 10 }}>주민등록번호</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <StyledTextInput
                    style={{ width: 100 }}
                    setValue={setBirth}
                    placeholder=""
                    value={birth}
                    keyboardType="number-pad"
                    maxLength={6}
                    warningMesseage=""
                  />
                  <Diver />
                  <StyledTextInput
                    style={{ width: 30 }}
                    setValue={setGender}
                    placeholder=""
                    value={gender}
                    maxLength={1}
                    keyboardType="number-pad"
                    warningMesseage=""
                  />
                  <DotGroupContainer />
                </View>
              </View>
            </View>
          </AuthenticationLayout>
        </SafeAreaView>
      </ScrollView>
      <NextButton
        onPress={() => navigation.navigate('Home')}
        isOk={name !== '' && birth !== '' && gender !== ''}
      />
    </>
  );
}

export default OptionalUserInfoScreen;
