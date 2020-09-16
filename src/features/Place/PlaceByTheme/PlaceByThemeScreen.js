import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import TitleHeader from '../../../components/Place/TitleHeader';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import ThemePlaceList from '../../../components/Place/ThemePlaceList';
import SelectBoxContainer from '../../../components/SelectBox';

PlaceByThemeScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object,
};
export default function PlaceByThemeScreen({ route }) {
  // 임시 ThemeeData
  const initialThemeeData = [
    {
      id: 1,
      name: '짬뽕에 취한 날',
      category: '중식당',
      desc: '갈비와 얼큰한 짬뽕을 한번에',
      imageUri: '',
    },
    {
      id: 2,
      name: '짬뽕에 취한 날',
      category: '중식당',
      desc: '갈비와 얼큰한 짬뽕을 한번에',
      imageUri: '',
    },
    {
      id: 3,
      name: '짬뽕에 취한 날',
      category: '중식당',
      desc: '갈비와 얼큰한 짬뽕을 한번에',
      imageUri: '',
    },
    {
      id: 4,
      name: '짬뽕에 취한 날',
      category: '중식당',
      desc: '갈비와 얼큰한 짬뽕을 한번에',
      imageUri: '',
    },
  ];

  const { theme, navigation } = route.params;
  const [ThemeeData, setThemeeData] = useState(initialThemeeData);
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isSortModalVisible, setSortModalVisible] = useState(false);
  const [category, setCategory] = useState(theme);
  const [sort, setSort] = useState('최신순');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TitleHeader title={'테마별 장소'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, marginTop: 14 }}>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={{ width: 110 }}>
              <Text style={{ fontSize: 12 }}>CATEGORY</Text>
              <TouchableWithoutFeedback
                onPress={() => setCategoryModalVisible(true)}>
                <Text style={{ fontSize: 17, marginTop: 5 }}>{category}</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ width: 100 }}>
              <Text style={{ fontSize: 12 }}>SORT</Text>
              <TouchableWithoutFeedback
                onPress={() => setSortModalVisible(true)}>
                <Text style={{ fontSize: 17, marginTop: 5 }}>{sort}</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <ThemePlaceList data={ThemeeData} />
        </View>
      </ScrollView>
      <SelectBoxContainer
        isVisible={isCategoryModalVisible}
        setVisible={setCategoryModalVisible}
        items={['젋고 캐쥬얼한', '아이와 함께', '조용한', '비 오는 날']}
        value={category}
        setValue={setCategory}
      />
      <SelectBoxContainer
        isVisible={isSortModalVisible}
        setVisible={setSortModalVisible}
        items={['최신순', '거리순', '인기순']}
        value={sort}
        setValue={setSort}
      />
    </SafeAreaView>
  );
}
