import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

GradientItem.propTypes = {
  props: PropTypes.object,
};
export default function GradientItem(props) {
  const { colors } = useTheme();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1.5, y: 1.5 }}
      colors={[colors.primary, colors.secondary]}
      {...props}
    />
  );
}
