import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

WelcomewView.propTypes = {
  username: PropTypes.string.isRequired,
};

export default function WelcomewView({ username }) {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        안녕하세요 {username}님,
      </Text>
      <Text
        style={{
          fontSize: 24,
          width: 209,
          marginTop: 15,
        }}>
        사우나 무료 이용권을 받아보세요.
      </Text>

      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: colors.primary,
            marginRight: 6,
          }}>
          지금 바로 확인하기
        </Text>
        <Image
          source={require('../../assets/Home/icn_wifi_color.png')}
          style={{ width: 14, height: 14 }}
        />
      </View>
    </View>
  );
}
