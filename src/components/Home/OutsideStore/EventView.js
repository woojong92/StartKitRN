import React from 'react';
import { View, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import EventItem from './EventItem';

EventView.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function EventView({ data }) {
  return (
    <View
      style={{
        paddingLeft: 22,
        marginTop: 31,
        ...Platform.select({
          android: {
            marginBottom: 25,
          },
        }),
      }}>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => {
          return <EventItem key={i} data={item} />;
        })}
      </ScrollView>
    </View>
  );
}
