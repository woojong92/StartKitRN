import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../../../theme';

ThemePlaceItem.propTypes = {
  data: PropTypes.object,
};

export default function ThemePlaceItem({ data }) {
  const { name } = data;
  return (
    <View>
      <View
        style={{
          height: 95,
          width: 95,
          marginRight: 15,
          backgroundColor: Theme.colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 47,
        }}
      />
      <Text
        style={{
          width: 95,
          marginTop: 11,
          textAlign: 'center',
          fontSize: 11,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </View>
  );
}
