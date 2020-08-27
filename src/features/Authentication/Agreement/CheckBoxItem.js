import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';

CheckBoxItem.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function CheckBoxItem({ value, setValue, children }) {
  const onValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <CheckBox
        disabled={false}
        value={value}
        onValueChange={onValueChange}
        style={{ marginRight: 10 }}
      />
      <Text style={{ fontSize: 16 }}>{children}</Text>
    </View>
  );
}
