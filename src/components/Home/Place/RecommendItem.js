import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styled from '@emotion/native';
import Theme from '../../../theme';

RecommendItem.propTypes = {
  data: PropTypes.object,
};

export const WhiteText = styled.Text`
  font-size: ${(props) => props.size};
  color: ${Theme.colors.white};
`;

export default function RecommendItem({ data }) {
  const { name, address, category, distance } = data;
  return (
    <View
      style={{
        height: 295,
        width: 197,
        marginRight: 5,
        backgroundColor: Theme.colors.primary,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 12,
      }}>
      <WhiteText size={'16'}>{name}</WhiteText>
      <WhiteText size={'9'}>{address}</WhiteText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 6,
            alignItems: 'center',
          }}>
          <WhiteText size={'7'}>{category}</WhiteText>

          <View
            style={{
              borderLeftWidth: 1,
              width: 1,
              height: 7,
              borderColor: Theme.colors.white,
              marginHorizontal: 4,
            }}
          />

          <WhiteText size={'7'}>{distance}</WhiteText>
        </View>
        <Image
          source={require('../../../assets/Home/icn_wifi_color.png')}
          style={{
            width: 19,
            height: 17,
            marginRight: 5,
          }}
        />
      </View>
    </View>
  );
}
