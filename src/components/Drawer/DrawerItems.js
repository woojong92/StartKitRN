import React from 'react';
import styled from '@emotion/native';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/Authentication/authenticationSlice';
import PropTypes from 'prop-types';

const DrawerItemsContainer = styled.View`
  padding: 20px;
`;
const DrawerItem = styled.TouchableOpacity`
  height: 60px;
  justify-content: center;
  margin-vertical: 5px;
`;

const DrawerItemText = styled.Text`
  text-align-vertical: center;
  font-size: 18px;
  font-weight: bold;
`;

DrawerItems.propTypes = {
  navigation: PropTypes.object,
};

export default function DrawerItems({ navigation }) {
  const dispatch = useDispatch();

  return (
    <DrawerItemsContainer>
      <DrawerItem onPress={() => navigation.navigate('MyData')}>
        <DrawerItemText>마이데이터</DrawerItemText>
      </DrawerItem>
      <DrawerItem onPress={() => Alert.alert('이용자참여')}>
        <DrawerItemText>이용자 참여</DrawerItemText>
      </DrawerItem>
      <DrawerItem onPress={() => Alert.alert('가맹점별 내 등급')}>
        <DrawerItemText>가맹점별 내 등급</DrawerItemText>
      </DrawerItem>
      <DrawerItem onPress={() => Alert.alert('접속기기관리')}>
        <DrawerItemText>접속기기 관리</DrawerItemText>
      </DrawerItem>
      <DrawerItem onPress={() => Alert.alert('고객센트')}>
        <DrawerItemText>고객센터</DrawerItemText>
      </DrawerItem>
      <DrawerItem onPress={() => dispatch(logOut())}>
        <DrawerItemText>로그아웃</DrawerItemText>
      </DrawerItem>
    </DrawerItemsContainer>
  );
}
