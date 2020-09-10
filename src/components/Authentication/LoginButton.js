import React from 'react';
import { TouchableOpacity, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

LoginButton.propTypes = {
  backgroudColor: PropTypes.string,
  fontColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

// LoginButton.defaultProps = {
//   fontColor: 'white',
// };

export default function LoginButton({
  backgroudColor,
  fontColor,
  title,
  onPress,
  style,
}) {
  return (
    <TouchableOpacity
      style={[
        style,
        {
          width: '100%',
          height: 50,
          backgroundColor: `${backgroudColor}`,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          marginVertical: 10,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
            },
            Android: {
              elevation: 1,
            },
          }),
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 16,
          color: `${fontColor}`,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
