import React from 'react';
// import styled from '@emotion/native';
import { TouchableWithoutFeedback, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Theme from '../../theme';

NextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  width: PropTypes.string,
};

export function NextButton({ onPress, width = '100%' }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[Theme.colors.primary, Theme.colors.secondary]}
        style={[
          {
            marginTop: 'auto',
            width: width,
            height: Platform.OS === 'ios' ? 80 : 60,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text
          style={{
            fontSize: 20,
            color: Theme.colors.white,
            fontWeight: 'bold',
          }}>
          다음
        </Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
