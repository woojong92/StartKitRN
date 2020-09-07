import React from 'react';
// import styled from '@emotion/native';
import { TouchableWithoutFeedback, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Theme from '../../theme';

NextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  width: PropTypes.string,
  isOk: PropTypes.bool,
};

export function NextButton({ onPress, width = '100%', isOk = false }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={!isOk}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={
          isOk
            ? [Theme.colors.primary, Theme.colors.secondary]
            : [Theme.colors.gray, Theme.colors.gray]
        }
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
