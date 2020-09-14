import React from 'react';
import { View } from 'react-native';
import { HomeSectionTitle } from '../OutsideStoreLayout';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import RecommendItem from './RecommendItem';

RecommendView.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function RecommendView({ data }) {
  return (
    <View style={{ paddingLeft: 22, marginBottom: 15 }}>
      <View style={{ marginTop: 33, marginBottom: 15 }}>
        <HomeSectionTitle>WAKE UP 추천</HomeSectionTitle>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => {
          return <RecommendItem key={i} data={item} />;
        })}
      </ScrollView>
    </View>
  );
}
