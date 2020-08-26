import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
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
          height: 60,
          backgroundColor: `${backgroudColor}`,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          marginBottom: 15,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 18,
          color: `${fontColor}`,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}