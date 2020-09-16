import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../../../theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

ThemePlaceItem.propTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default function ThemePlaceItem({ data, onPress }) {
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
      <TouchableWithoutFeedback onPress={onPress}>
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
      </TouchableWithoutFeedback>
    </View>
  );
}
