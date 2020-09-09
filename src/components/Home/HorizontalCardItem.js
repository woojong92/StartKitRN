import React from 'react';
import { View, Image } from 'react-native';
import Theme from '../../theme';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

HorizontalCardItem.propTypes = {
  item: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  size: PropTypes.object.isRequired,
};

export const WhiteText = styled.Text`
  font-size: ${(props) => props.size};
  color: ${Theme.colors.white};
`;

export default function HorizontalCardItem({ item, width, height, size }) {
  const { name, address, category, distance } = item;
  const {
    nameSize,
    addressSize,
    categorySize,
    distanceSize,
    imageHeight,
    imageWidth,
  } = size;
  return (
    <View
      style={{
        height: height,
        width: width,
        marginRight: 5,
        backgroundColor: Theme.colors.primary,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 12,
      }}>
      <WhiteText size={nameSize}>{name}</WhiteText>
      <WhiteText size={addressSize}>{address}</WhiteText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 6,
            alignItems: 'center',
          }}>
          <WhiteText size={categorySize}>{category}</WhiteText>
          <View
            style={{
              borderLeftWidth: 1,
              width: 1,
              height: 5,
              borderColor: Theme.colors.white,
              marginHorizontal: 4,
            }}
          />
          <WhiteText size={distanceSize}>{distance}</WhiteText>
        </View>
        <Image
          source={require('../../assets/Home/icn_wifi_color.png')}
          style={{
            width: imageWidth,
            height: imageHeight,
            marginRight: 5,
          }}
        />
      </View>
    </View>
  );
}
