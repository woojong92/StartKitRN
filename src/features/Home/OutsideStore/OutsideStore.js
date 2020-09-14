import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import HomeHeader from '../../../components/Home/HomeHeader';
import { useTheme } from '@react-navigation/native';
import GradientItem from '../../../components/Home/GradientItem';
import PropTypes from 'prop-types';
import LocationView from '../../../components/Home/OutsideStore/LocationView';
import RecommendView from '../../../components/Home/OutsideStore/RecommendView';
import ThemePlaceView from '../../../components/Home/OutsideStore/ThemePlaceView';
import EventView from '../../../components/Home/OutsideStore/EventView';
import DataRemainView from '../../../components/Home/OutsideStore/DataRemainView';
import WelcomewView from '../../../components/Home/OutsideStore/WelcomeView';

OutsideStore.propTypes = {
  navigation: PropTypes.object,
};
export default function OutsideStore({ navigation }) {
  // 임시 HotPlaceData
  const initialHotPlaceData = [
    {
      id: 1,
      name: '제니의 정원',
      address: '제주시 연삼로 17',
      category: '브런치',
      distance: '1.3KM',
    },
    {
      id: 2,
      name: '클랭 블루 제주',
      address: '제주시 한경면 신창리 1293-1',
      category: '카페',
      distance: '2.4KM',
    },
    {
      id: 3,
      name: '제니의 정원',
      address: '제주시 연삼로 17',
      category: '브런치',
      distance: '1.3KM',
    },
  ];

  // 임시 AdvertiseData
  const initialAdvertiseData = [
    {
      id: 1,
      imageUri: '',
    },
    {
      id: 2,
      imageUri: '',
    },
    {
      id: 3,
      imageUri: '',
    },
  ];
  const [HotPlaceData, setHotPlaceData] = useState(initialHotPlaceData);
  const [AdvertiseData, setAdvertiseData] = useState(initialAdvertiseData);
  const { colors } = useTheme();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HomeHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <DataRemainView />
          <View style={{ paddingHorizontal: 22, marginTop: 27 }}>
            <WelcomewView username={'비스키트'} />
            <TouchableWithoutFeedback>
              <GradientItem
                style={{
                  height: 39,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 34,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  안전하게 인터넷 접속하기
                </Text>
              </GradientItem>
            </TouchableWithoutFeedback>
          </View>

          <LocationView
            data={HotPlaceData}
            title={'근처 핫 플레이스'}
            location={'제주시 애월읍'}
          />
          <LocationView data={HotPlaceData} title={'요즘 뜨는 장소'} />
          <RecommendView data={HotPlaceData} />
          <ThemePlaceView data={HotPlaceData} />
          <EventView data={AdvertiseData} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
