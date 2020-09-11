import React from 'react';
import { ScrollView, View } from 'react-native';
import HorizontalCardItem from './HorizontalCardItem';
import HorizontalCircleItem from './HorizontalCircleItem';
import PropTypes from 'prop-types';

HorizontalCardView.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isSmall: PropTypes.bool,
  isCircle: PropTypes.bool.isRequired,
};

export default function HorizontalCardView({
  data,
  width,
  height,
  isSmall,
  isCircle,
}) {
  return (
    <ScrollView
      scrollEventThrottle={16}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {data.map((item, i) => {
        return (
          <View key={i}>
            {isCircle ? (
              <HorizontalCircleItem item={item} width={width} height={height} />
            ) : (
              <HorizontalCardItem
                item={item}
                width={width}
                height={height}
                isSmall={isSmall}
              />
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}
