import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styled from '@emotion/native';
import Theme from '../../../theme';

LocationItem.propTypes = {
  data: PropTypes.object,
};

export const WhiteText = styled.Text`
  font-size: ${(props) => props.size};
  color: ${Theme.colors.white};
`;

export default function LocationItem({ data }) {
  const { name, address, category, distance } = data;
  return (
    <View
      style={{
        height: 138,
        width: 156,
        marginRight: 5,
        backgroundColor: Theme.colors.primary,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 12,
      }}>
      <WhiteText size={'13'}>{name}</WhiteText>
      <WhiteText size={'8'}>{address}</WhiteText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 6,
            alignItems: 'center',
          }}>
          <WhiteText size={'6'}>{category}</WhiteText>

          <View
            style={{
              borderLeftWidth: 1,
              width: 1,
              height: 5,
              borderColor: Theme.colors.white,
              marginHorizontal: 4,
            }}
          />

          <WhiteText size={'6'}>{distance}</WhiteText>
        </View>
        <Image
          source={require('../../../assets/Home/icn_wifi_color.png')}
          style={{
            width: 15,
            height: 13,
            marginRight: 5,
          }}
        />
      </View>
    </View>
  );
}
