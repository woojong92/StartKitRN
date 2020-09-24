import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import theme from '../../theme';
const { colors } = theme;

const IconPropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

EyeIcon.propTypes = IconPropTypes;
EyeOffIcon.propTypes = IconPropTypes;
ChevronDownIcon.propTypes = IconPropTypes;
ChevronForwardIcon.propTypes = IconPropTypes;
LocationPinIcon.propTypes = IconPropTypes;
HeartIcon.propTypes = IconPropTypes;
EarthIcon.propTypes = IconPropTypes;
TimeIcon.propTypes = IconPropTypes;
PhoneIcon.propTypes = IconPropTypes;
BackIcon.propTypes = IconPropTypes;
CloseIcon.propTypes = IconPropTypes;
CouponIcon.propTypes = IconPropTypes;
MenuIcon.propTypes = IconPropTypes;
MapIcon.propTypes = IconPropTypes;
WifiIcon.propTypes = IconPropTypes;

export function EyeIcon({ size = 25, color = colors.secondary }) {
  return <Ionicons name="eye" size={size} color={color} />;
}

export function EyeOffIcon({ size = 25, color = colors.secondary }) {
  return <Ionicons name="eye-off" size={size} color={color} />;
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

export function ChevronDownIcon({ size = 25, color = colors.darkGray }) {
  return <Ionicons name="chevron-down" size={size} color={color} />;
}

export function ChevronForwardIcon({ size = 25, color = colors.darkGray }) {
  return <Ionicons name="chevron-forward" size={size} color={color} />;
}

export function BackIcon({ size = 25, color = colors.darkGray }) {
  return <Ionicons name="chevron-back-outline" size={size} color={color} />;
}

export function CloseIcon({ size = 25, color = colors.black }) {
  return <Ionicons name="close-outline" size={size} color={color} />;
}

export function CouponIcon({ size = 25, color = colors.black }) {
  return <FontAwesomeIcons name="ticket" size={size} color={color} />;
}

export function MenuIcon({ size = 25, color = colors.black }) {
  return <SimpleLineIcons name="menu" size={size} color={color} />;
}

export function SearchIcon({ size = 25, color = colors.black }) {
  return <Ionicons name="search-outline" size={size} color={color} />;
}

export function MapIcon({ size = 25, color = colors.black }) {
  return <Ionicons name="map-outline" size={size} color={color} />;
}

export function WifiIcon({ size = 25, color = colors.black }) {
  return <Ionicons name="wifi-outline" size={size} color={color} />;
}

export function PointIcon({ size = 25, color = colors.black }) {
  return (
    <MaterialCommunityIcons
      name="car-brake-parking"
      size={size}
      color={color}
    />
  );
}
