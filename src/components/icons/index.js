import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

import theme from '../../theme';
const { colors } = theme;

EyeIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
EyeOffIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
ChevronDownIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
ChevronForwardIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
LocationPinIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
HeartIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
EarthIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
TimeIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
PhoneIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

BackIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export function EyeIcon({ size = 25, color = colors.secondary }) {
  return <Ionicons name="eye" size={size} color={color} />;
}

export function EyeOffIcon({ size = 25, color = colors.secondary }) {
  return <Ionicons name="eye-off" size={size} color={color} />;
}

export function ChevronDownIcon({ size = 25, color = colors.darkGray }) {
  return <Ionicons name="chevron-down" size={size} color={color} />;
}

export function ChevronForwardIcon({ size = 25, color = colors.darkGray }) {
  return <Ionicons name="chevron-forward" size={size} color={color} />;
}

export function LocationPinIcon({ size = 25, color = colors.darkGray }) {
  return <SimpleLineIcons name="location-pin" size={size} color={color} />;
}

export function HeartIcon({ size = 25, color = colors.white }) {
  return <AntDesignIcons name="hearto" size={size} color={color} />;
}

export function EarthIcon({ size = 25, color = colors.primary }) {
  return <AntDesignIcons name="earth" size={size} color={color} />;
}

export function TimeIcon({ size = 25, color = colors.primary }) {
  return <Ionicons name="time-outline" size={size} color={color} />;
}

export function PhoneIcon({ size = 25, color = colors.primary }) {
  return <SimpleLineIcons name="phone" size={size} color={color} />;
}

export function BackIcon({ size = 25, color = colors.black }) {
  return <Ionicons name="chevron-back-outline" size={size} color={color} />;
}
