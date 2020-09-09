import React from 'react';
import { ScrollView } from 'react-native';
import HorizontalCardItem from './HorizontalCardItem';
import PropTypes from 'prop-types';

HorizontalCardView.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  size: PropTypes.object.isRequired,
};

export default function HorizontalCardView({ data, width, height, size }) {
  return (
    <ScrollView
      scrollEventThrottle={16}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {data.map((item, i) => {
        return (
          <HorizontalCardItem
            key={i}
            item={item}
            width={width}
            height={height}
            size={size}
          />
        );
      })}
    </ScrollView>
  );
}
