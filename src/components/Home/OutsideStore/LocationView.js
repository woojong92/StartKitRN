import React from 'react';
import { View, Image } from 'react-native';
import { HomeSectionTitle, HomeSectionSubTitle } from '../OutsideStoreLayout';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import LocationItem from './LocationItem';

LocationView.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default function LocationView({ data, title, location }) {
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
