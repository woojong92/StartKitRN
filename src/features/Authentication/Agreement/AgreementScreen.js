import React, { useState, useCallback, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
  AuthenticationLayout,
  AuthenticationTitle,
  AuthenticationTitleContainer,
  AuthenticationSafeAreaViewContainer,
} from '../../../components/Authentication/AuthenticationLayout';
import { NextButton } from '../../../components/Authentication/NextButton';
import PropTypes from 'prop-types';
import CheckBoxItem from './CheckBoxItem';
import Theme from '../../../theme';
import styled from '@emotion/native';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from './agreementSlice';

const Diver = styled.View`
  width: 100%;
  height: 1;
  border-bottom-color: ${Theme.colors.gray};
  border-bottom-width: 1;
  margin-vertical: 10px;
`;

AgreementScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function AgreementScreen({ navigation }) {
  const allAgreement = useSelector((state) => state.agreement.allAgreement);
  const useAndPrivacyAgreement = useSelector(
    (state) => state.agreement.useAndPrivacyAgreement,
  );
  const locationAgreement = useSelector(
    (state) => state.agreement.locationAgreement,
  );
  const marketingAgreement = useSelector(
    (state) => state.agreement.marketingAgreement,
  );

  const dispatch = useDispatch();

  const onChange = (key) =>
    useCallback(
      (newValue) => {
        dispatch(changeField({ key: key, value: newValue }));
      },
      [dispatch],
    );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);

  return (
    <>
      <ScrollView>
        <AuthenticationSafeAreaViewContainer>
          <AuthenticationLayout>
            {/* AuthenticationTitle box */}
            <AuthenticationTitleContainer style={{ marginBottom: 60 }}>
              <AuthenticationTitle>서비스 이용을 위한</AuthenticationTitle>
              <AuthenticationTitle>이용약관 동의입니다.</AuthenticationTitle>
            </AuthenticationTitleContainer>

            {/* 약관 동의 화면 */}
            <View style={{}}>
              <View>
                <CheckBoxItem
                  value={allAgreement}
                  setValue={onChange('allAgreement')}
                  fontSize={18}>
                  약관 전체동의
                </CheckBoxItem>
              </View>

              <Diver />

              <CheckBoxItem
                value={useAndPrivacyAgreement}
                setValue={onChange('useAndPrivacyAgreement')}>
                이용약관 및 개인정보처리방침 (필수)
              </CheckBoxItem>

              <CheckBoxItem
                value={locationAgreement}
                setValue={onChange('locationAgreement')}>
                위치기반서비스 이용약관 (필수)
              </CheckBoxItem>

              <CheckBoxItem
                value={marketingAgreement}
                setValue={onChange('marketingAgreement')}>
                마케팅 활용 동의 (선택)
              </CheckBoxItem>
            </View>
          </AuthenticationLayout>
        </AuthenticationSafeAreaViewContainer>
      </ScrollView>

      <NextButton
        onPress={() => navigation.navigate('ConfirmPhoneNumber')}
        isOk
      />
    </>
  );
}
