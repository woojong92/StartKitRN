import React from 'react';
import { View, Text } from 'react-native';
import Theme from '../../theme';
import PropTypes from 'prop-types';

HorizontalCardItem.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default function HorizontalCardItem({ item, width, height }) {
  const { name } = item;
  return (
    <View>
      <View
        style={{
          height: height,
          width: width,
          marginRight: 15,
          backgroundColor: Theme.colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: width / 2,
        }}
      />
      <Text
        style={{
          width: width,
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
