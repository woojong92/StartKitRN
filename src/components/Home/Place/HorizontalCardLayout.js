import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import ThemePlaceItem from './ThemePlaceItem';
import { HomeSectionSubTitle, HomeSectionTitle } from '../OutsideStoreLayout';
import LocationItem from './LocationItem';
import RecommendItem from './RecommendItem';

ThemePlaceView.propTypes = {
  data: PropTypes.array.isRequired,
};
LocationView.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
};
RecommendView.propTypes = {
  data: PropTypes.array.isRequired,
};

export function ThemePlaceView({ data }) {
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

export function RecommendView({ data }) {
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

export function LocationView({ data, title, location }) {
  return (
    <View style={{ paddingLeft: 22, marginTop: 33, marginBottom: 15 }}>
      <View style={{ marginBottom: 15 }}>
        <HomeSectionTitle>{title}</HomeSectionTitle>
        {location && (
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image
              source={require('../../../assets/Home/icn_wifi_color.png')}
              style={{
                width: 7,
                height: 10,
                marginRight: 5,
              }}
            />
            <HomeSectionSubTitle>{location}</HomeSectionSubTitle>
          </View>
        )}
      </View>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => {
          return <LocationItem key={i} data={item} />;
        })}
      </ScrollView>
    </View>
  );
}
