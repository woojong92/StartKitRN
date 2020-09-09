import React from 'react';
import { View, Image } from 'react-native';
import Theme from '../../theme';
import { HomeHeaderIcon } from './OutsideStoreLayout';

export default function HomeHeader() {
  return (
    <>
      <View
        style={{
          backgroundColor: Theme.colors.white,
          height: 70,
          paddingHorizontal: 22,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../assets/Home/icn_wifi_color.png')}
          style={{ width: 25, height: 19 }}
        />
        <View style={{ flexDirection: 'row' }}>
          <HomeHeaderIcon
            source={require('../../assets/Home/icn_wifi_color.png')}
          />
          <HomeHeaderIcon
            source={require('../../assets/Home/icn_wifi_color.png')}
          />
          <HomeHeaderIcon
            source={require('../../assets/Home/icn_wifi_color.png')}
          />
          <HomeHeaderIcon
            source={require('../../assets/Home/icn_wifi_color.png')}
          />
        </View>
      </View>
    </>
  );
}
