import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import Theme from '../../theme';
import { HomeHeaderIcon } from './OutsideStoreLayout';
import PropTypes from 'prop-types';

HomeHeader.propTypes = {
  navigation: PropTypes.object,
};

export default function HomeHeader({ navigation }) {
  return (
    <SafeAreaView>
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
          <TouchableWithoutFeedback
            hitSlop={{ left: 7, right: 7, bottom: 7, top: 7 }}
            onPress={() => navigation.openDrawer()}>
            {/* onPress={() => navigation.push('Drawer')}> */}
            <HomeHeaderIcon
              source={require('../../assets/Home/icn_wifi_color.png')}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}
