import React, { useState } from 'react';
import theme from '../../theme';
import {
  TouchableOpacity,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import { HeartIcon, CouponIcon, PointIcon } from '../icons';
import styled from '@emotion/native';

const { colors } = theme;

const UserInfoContainer = styled.View`
  border-bottom-color: ${colors.gray};
  border-bottom-width: 1px;
  padding: 20px;
`;

const UserNameContainer = styled.View`
  height: 100px;
  align-items: flex-start;
`;

const UserNameItems = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserNameText = styled.Text`
  font-size: 24px;
  text-align: left;
  text-align-vertical: center;
  color: ${colors.black};
  font-weight: bold;
  padding-vertical: 10px;
`;

const CurrentFeeTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CurrentFeeText = styled.Text`
  color: ${(props) => (props?.color ? colors.primary : colors.darkGray)};
  text-align-vertical: center;
`;

const UserInfoIconsContainer = styled.View`
  height: 100px;
  flex-direction: row;
  margin-bottom: 20px;
`;

const UserInfoIconContainer = styled.View`
  height: 100%;
  width: 33.33%;
  // background-color: red;
  justify-content: space-between;
  align-items: center;
`;

const UserInfoIcon = styled.View`
  width: 40px;
  height: 40px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const UserInfoIconText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.black};
  margin: 5px;
`;

function UserName() {
  const [userName, setUserName] = useState('비스키트');
  const [feeType, setFeeType] = useState('B요금제');

  return (
    <UserNameContainer>
      <UserNameItems>
        <UserNameText>{userName}님</UserNameText>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            padding: 10,
          }}
          onPress={() => Alert.alert('회원정보 페이지로 이동')}>
          <Text style={{ color: colors.white }}>회원정보</Text>
        </TouchableOpacity>
      </UserNameItems>

      {/* 클릭 시 이용중인 상품으로 이동 */}
      <TouchableOpacity
        activeOpacity={0.5}
        style={{ paddingVertical: 3 }}
        onPress={() => Alert.alert('이용중인 상품으로 이동')}>
        <CurrentFeeTextContainer>
          <CurrentFeeText color>{feeType}</CurrentFeeText>
          <CurrentFeeText>{'  사용중'}</CurrentFeeText>
        </CurrentFeeTextContainer>
      </TouchableOpacity>
    </UserNameContainer>
  );
}

function UserInfoIcons() {
  const [point, setPoint] = useState(150);
  const [couponCount, setCouponCount] = useState(3);
  const [scrapCount, setScrapCount] = useState(10);

  return (
    <UserInfoIconsContainer>
      <TouchableWithoutFeedback onPress={() => Alert.alert('point 조회')}>
        <UserInfoIconContainer>
          <UserInfoIcon>
            <PointIcon color={colors.darkGray} size={30} />
          </UserInfoIcon>
          <View>
            <UserInfoIconText>{point}p</UserInfoIconText>
          </View>
        </UserInfoIconContainer>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Alert.alert('쿠폰 조회')}>
        <UserInfoIconContainer>
          <UserInfoIcon>
            <CouponIcon color={colors.darkGray} size={30} />
          </UserInfoIcon>
          <View>
            <UserInfoIconText>{couponCount}</UserInfoIconText>
          </View>
        </UserInfoIconContainer>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Alert.alert('scrap 조회')}>
        <UserInfoIconContainer>
          <UserInfoIcon>
            <HeartIcon color={colors.darkGray} size={30} />
          </UserInfoIcon>
          <View>
            <UserInfoIconText>{scrapCount}</UserInfoIconText>
          </View>
        </UserInfoIconContainer>
      </TouchableWithoutFeedback>
    </UserInfoIconsContainer>
  );
}

export default function UserInfo() {
  return (
    <UserInfoContainer>
      <UserName />
      <UserInfoIcons />
    </UserInfoContainer>
  );
}
