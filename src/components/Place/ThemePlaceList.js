import React from 'react';
import { View, Text } from 'react-native';
import ThemePlaceListItem from './ThemePlaceListItem';
import PropTypes from 'prop-types';

ThemePlaceList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function ThemePlaceList({ data }) {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      {data.map((item, i) => {
        return <ThemePlaceListItem data={item} key={i} />;
      })}
    </View>
  );
}
