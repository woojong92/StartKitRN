import React from 'react';
import { SafeAreaView, Text, View, ScrollView, Dimensions } from 'react-native';
import Theme from '../../theme';
import GradientItem from './GradientItem';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/Authentication/authenticationSlice';

export default function DrawerContent({ navigation }) {
  const dispatch = useDispatch();
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  return (
    <GradientItem
      style={{
        flex: 1,
        width: 116,
      }}>
      <SafeAreaView style={{ height: height, justifyContent: 'space-between' }}>
        <View style={{ marginTop: 72 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            비스키트님
          </Text>
        </View>
        <View style={{ marginBottom: 100 }}>
          <TouchableWithoutFeedback onPress={() => dispatch(logOut())}>
            <Text
              style={{
                color: Theme.colors.white,
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              로그아웃
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </GradientItem>
  );
}
