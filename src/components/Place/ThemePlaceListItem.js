import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

ThemePlaceListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function ThemePlaceListItem({ data }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        marginBottom: 20,
      }}>
      <View
        style={{
          backgroundColor: colors.secondary,
          width: 170,
          height: 170,
        }}
      />
      <View>
        <Text
          style={{ marginVertical: 5, fontSize: 13, color: colors.darkGray }}>
          {data.category}
        </Text>
        <Text
          style={{
            marginBottom: 3,
            fontSize: 14,
            color: colors.black,
            fontWeight: 'bold',
          }}>
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.black,
          }}>
          {data.desc}
        </Text>
      </View>
    </View>
  );
}
