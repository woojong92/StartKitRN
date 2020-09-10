import React from 'react';
import { View, Image } from 'react-native';
import Theme from '../../theme';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

HorizontalCardItem.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isSmall: PropTypes.bool,
};

export const WhiteText = styled.Text`
  font-size: ${(props) => props.size};
  color: ${Theme.colors.white};
`;

export default function HorizontalCardItem({ item, width, height, isSmall }) {
  const { name, address, category, distance } = item;
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
      <WhiteText size={isSmall ? '13' : '16'}>{name}</WhiteText>
      <WhiteText size={isSmall ? '8' : '9'}>{address}</WhiteText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 6,
            alignItems: 'center',
          }}>
          <WhiteText size={isSmall ? '6' : '7'}>{category}</WhiteText>
          {isSmall && (
            <View
              style={{
                borderLeftWidth: 1,
                width: 1,
                height: 5,
                borderColor: Theme.colors.white,
                marginHorizontal: 4,
              }}
            />
          )}
          <WhiteText size={isSmall ? '6' : '7'}>{distance}</WhiteText>
        </View>
        {isSmall && (
          <Image
            source={require('../../assets/Home/icn_wifi_color.png')}
            style={{
              width: isSmall ? 15 : 19,
              height: isSmall ? 13 : 17,
              marginRight: 5,
            }}
          />
        )}
      </View>
    </View>
  );
}
