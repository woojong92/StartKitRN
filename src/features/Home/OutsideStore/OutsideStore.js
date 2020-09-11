import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from 'react-native';
import HomeHeader from '../../../components/Home/HomeHeader';
import { useTheme } from '@react-navigation/native';
import {
  HomeSectionTitle,
  HomeSectionSubTitle,
} from '../../../components/Home/OutsideStoreLayout';
import HorizontalCardView from '../../../components/Home/HorizontalCardView';
import GradientItem from '../../../components/Home/GradientItem';
import PropTypes from 'prop-types';

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
          <View
            style={{
              height: 81,
              backgroundColor: colors.background,
              justifyContent: 'center',
              paddingHorizontal: 22,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 4, fontWeight: 'bold' }}>
                B요금제
              </Text>
              <Image
                source={require('../../../assets/Home/icn_wifi_color.png')}
              />
            </View>
            <View>
              <View
                style={{
                  backgroundColor: colors.gray,
                  height: 19,
                  marginTop: 12,
                }}>
                <Text
                  style={{
                    textAlign: 'right',
                    marginRight: 7,
                  }}>
                  8GB
                </Text>
              </View>
              <GradientItem
                style={{
                  height: 19,
                  top: 8,
                  width: '70%',
                  position: 'absolute',
                }}>
                <Text
                  style={{
                    color: colors.white,
                    textAlign: 'right',
                    marginRight: 7,
                  }}>
                  6.7GB
                </Text>
              </GradientItem>
            </View>
          </View>

          <View style={{ paddingHorizontal: 22, marginTop: 27 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              안녕하세요 비스키트님,
            </Text>
            <Text
              style={{
                fontSize: 24,
                width: 209,
                marginTop: 15,
              }}>
              사우나 무료 이용권을 받아보세요.
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: colors.primary,
                  marginRight: 6,
                }}>
                지금 바로 확인하기
              </Text>
              <Image
                source={require('../../../assets/Home/icn_wifi_color.png')}
                style={{ width: 14, height: 14 }}
              />
            </View>
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

          <View style={{ paddingLeft: 22 }}>
            <View style={{ marginTop: 33, marginBottom: 15 }}>
              <HomeSectionTitle>근처 핫 플레이스</HomeSectionTitle>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image
                  source={require('../../../assets/Home/icn_wifi_color.png')}
                  style={{
                    width: 7,
                    height: 10,
                    marginRight: 5,
                  }}
                />
                <HomeSectionSubTitle>제주시 애월읍</HomeSectionSubTitle>
              </View>
            </View>
            <HorizontalCardView
              data={HotPlaceData}
              width={156}
              height={138}
              isCircle={false}
              isSmall={true}
            />
          </View>

          <View style={{ paddingLeft: 22 }}>
            <View style={{ marginTop: 50, marginBottom: 13 }}>
              <HomeSectionTitle>요즘 뜨는 장소</HomeSectionTitle>
            </View>
            <HorizontalCardView
              data={HotPlaceData}
              isCircle={false}
              width={156}
              height={138}
              isSmall={true}
            />
          </View>

          <View style={{ paddingLeft: 22 }}>
            <View style={{ marginTop: 50, marginBottom: 13 }}>
              <HomeSectionTitle>WAKE UP 추천</HomeSectionTitle>
            </View>
            <HorizontalCardView
              data={HotPlaceData}
              isCircle={false}
              width={197}
              height={295}
              isSmall={false}
            />
          </View>

          <View style={{ paddingLeft: 22 }}>
            <View style={{ marginTop: 50, marginBottom: 19 }}>
              <HomeSectionTitle>어떤 곳으로 가고싶으세요?</HomeSectionTitle>
            </View>
            <HorizontalCardView
              data={HotPlaceData}
              isCircle={true}
              width={95}
              height={95}
              size={{
                nameSize: '11',
              }}
            />
          </View>

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
            <HorizontalCardView
              data={AdvertiseData}
              isCircle={false}
              width={203}
              height={89}
            />
          </View>
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
