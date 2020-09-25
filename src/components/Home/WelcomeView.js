import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { ChevronForwardIcon } from '../icons';

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
        <ChevronForwardIcon size={14} />
      </View>
    </View>
  );
}
