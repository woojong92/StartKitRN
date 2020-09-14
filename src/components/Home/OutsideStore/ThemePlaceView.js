import React from 'react';
import { View } from 'react-native';
import { HomeSectionTitle } from '../OutsideStoreLayout';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import ThemePlaceItem from './ThemePlaceItem';

ThemePlaceView.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function ThemePlaceView({ data }) {
  return (
    <View style={{ paddingLeft: 22 }}>
      <View style={{ marginTop: 33, marginBottom: 19 }}>
        <HomeSectionTitle>어떤 곳으로 가고싶으세요?</HomeSectionTitle>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => {
          return <ThemePlaceItem key={i} data={item} />;
        })}
      </ScrollView>
    </View>
  );
}
