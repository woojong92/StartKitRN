import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styled from '@emotion/native';
import Theme from '../../../theme';

EventItem.propTypes = {
  data: PropTypes.object,
};

export const WhiteText = styled.Text`
  font-size: ${(props) => props.size};
  color: ${Theme.colors.white};
`;

export default function EventItem({ data }) {
  return (
    <View
      style={{
        height: 89,
        width: 203,
        marginRight: 5,
        backgroundColor: Theme.colors.primary,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 12,
      }}></View>
  );
}
